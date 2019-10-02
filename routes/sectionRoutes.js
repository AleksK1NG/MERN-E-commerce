const express = require('express')
const router = express.Router()
// const authMiddleware = require('../middleware/authMiddleware')
const sectionController = require('../controllers/sectionController')

router.get('/', sectionController.getAllSections)
router.post('/', sectionController.createSection)

module.exports = router