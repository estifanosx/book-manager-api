const express = require('express')
const router = express.Router()

const {getAllbooks,getBookbyId} = require('../controllers/bookControllers')
router.get('/' , getAllbooks)
router.get('/:id' ,getBookbyId )

module.exports = router