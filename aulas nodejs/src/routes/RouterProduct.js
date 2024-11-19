const express = require('express')
const router = express.Router()
const ProductController=require('../controllers/ProductController')

router.get('/', ProductController.ProductList)
router.get('/:id', ProductController.ProductList)
router.post('/', ProductController.ProductRegister)
router.put('/:id', ProductController.ProductUpdate)
router.delete('/:id', ProductController.ProductDelete)

module.exports=router


// const express = require('express')
// const router = express.Router()
// const ProductController=require('../controllers/ProductController')

// router.get('/', ProductController.ProductList)

// router.post('/', ProductController.ProductRegister)

// module.exports=router