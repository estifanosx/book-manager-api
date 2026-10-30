const express = require('express')
const router = express.Router()

const {getAllbooks} = require('../controllers/bookControllers')
router.get('/' , getAllbooks)

module.exports = router