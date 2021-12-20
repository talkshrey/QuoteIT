import express from'express'
import {
  createProduct,
  getProducts
} from'../controllers/product.js'

const router = new express.Router()

//create a product
router.post('/new', createProduct)

//get products 
router.get('/get', getProducts)

export default router 
