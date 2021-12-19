import express from'express'
import auth from'../middleware/auth.js'
import isClient from'../middleware/isCLient.js'
import {
  registerNewUser,
  loginUser,
  logoutUser,
  getUsers,
  getProfile,
  updateUser,
  deleteUser,
  getClientDashboard
} from'../controllers/user.js'

const router = new express.Router()

//FOR ALL USERS
//Register new user
router.post('/register', registerNewUser)

//Login User
router.post('/login', loginUser)

//Logout User
router.post('/logout', auth, logoutUser)

//Get Personal Profile
router.get('/me', auth, getProfile)

//update Profile
router.put('/update', auth, updateUser)

//Delete Profile
router.delete('/delete', auth, deleteUser)


// FOR CLIENTS 
//Get Client Dashboard
router.get('/client/dashboard', auth, isClient, getClientDashboard)


// // FOR VENDORS 
// //Get Vendor Dashboard
// router.get('/vendor/dashboard', auth, isVendor, getVendorDashboard)



//Get All Users
router.get('/get', getUsers)


export default router