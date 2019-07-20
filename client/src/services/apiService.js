import axios from 'axios'

/*
 * Api Service
 * */

const apiUrls = {
  BASE_URL: '/api/v1',
  USER_URL: `/api/v1/user`,
  USER_REGISTER_URL: '/api/v1/user/register',
  USER_LOGIN_URL: '/api/v1/user/login',
  USER_ME_URL: '/api/v1/user/me',
  GET_SECTIONS_URL: '/api/v1/section'
}

const STRIPE_PAYMENT_URL = '/payment'

// Axios Instance
const axiosInstance = axios.create({
  timeout: 3000
})

// Runs before every request
axiosInstance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('mern-dev') || ''

    if (token && token !== '') {
      config.headers['x-auth-token'] = token
    }
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

class ApiService {
  registerUser(userData) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return axios.post(apiUrls.USER_REGISTER_URL, userData, config)
  }

  loginUser(userData) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return axios.post(apiUrls.USER_LOGIN_URL, userData, config)
  }

  loadUser() {
    return axiosInstance.get(apiUrls.USER_ME_URL)
  }

  stripePayment(paymentData) {
    return axios.post(STRIPE_PAYMENT_URL, paymentData)
  }

  getAllSections() {
    return axios.get(apiUrls.GET_SECTIONS_URL)
  }
}

export default new ApiService()
