import express from'express'
import auth from'../middleware/auth.js'
import isClient from '../middleware/isClient.js'
import {
  createQuery
} from'../controllers/query.js'

const router = new express.Router()

//Create a new query
router.post('/new', auth, isClient, createQuery)

export default router