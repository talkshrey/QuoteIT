import express from'express'
import auth from'../middleware/auth.js'
import isVendor from '../middleware/isVendor.js'
import {
  createQuotation
} from'../controllers/quotation.js'

const router = new express.Router()

//Create a new query
router.post('/new', auth, isVendor, createQuotation)

export default router