const express = require('express')
const router = express.Router()
const ProductController=require('../controllers/ProductController')

router.get('/', ProductController.ProductList)

router.post('/', ProductController.ProductRegister)

module.exports=router