const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController')

router.get('/', CategoryController.CategoryList)
router.get('/:id', CategoryController.CategoryList)
router.post('/', CategoryController.CategoryRegister)
router.put('/:id', CategoryController.CategoryUpdate)
router.delete('/:id', CategoryController.CategoryDelete)

module.exports=router