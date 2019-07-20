const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
// const bodyParser = require('body-parser')
const mongoSanitize = require('express-mongo-sanitize')
dotenv.config({ path: './config.env' })

// Connect Mongo DB
const connect = require('./db/db')
connect()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const userRouter = require('./routes/userRoutes')
const sectionRouter = require('./routes/sectionRoutes')

// Start express app
const app = express()

app.enable('trust proxy')

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors())
// Access-Control-Allow-Origin *
// api.v1.com, front-end myadress.com
// app.use(cors({
//   origin: 'https://www.myadress.com'
// }))

app.options('*', cors())
// app.options('/api/v1/tours/:id', cors());

// Set security HTTP headers
app.use(helmet())

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
})
app.use('/api', limiter)

// TODO
// Stripe webhook, BEFORE body-parser, because stripe needs the body as stream
// app.post(
//   '/webhook-checkout',
//   bodyParser.raw({ type: 'application/json' }),
//   // bookingController.webhookCheckout
// );

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())

// Data sanitization against NoSQL query injection
app.use(mongoSanitize())

app.use(compression())

// ROUTES
app.use('/api/v1/user', userRouter)
app.use('/api/v1/section', sectionRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Success' })
})
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes })
    }
  })
})

// Server run
const port = process.env.PORT || 5000
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

// Process
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...')
  console.log(err.name, err.message)
  process.exit(1)
})

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...')
  console.log(err.name, err.message)
  server.close(() => {
    process.exit(1)
  })
})

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully')
  server.close(() => {
    console.log('💥 Process terminated!')
  })
})
