import express from'express'
import auth from'../middleware/auth.js'
//import isClient from '../middleware/isClient.js'
import {
  createQuotation
} from'../controllers/quotation.js'

const router = new express.Router()

//Create a new query
router.post('/new', auth, createQuotation)

export default router