import User from '../models/User.js';
import Quotation from '../models/Quotation.js';
import Query from '../models/Query.js';
import { sendWelcomeEmail } from '../emails/account.js';

//Register a user
const registerNewUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    await user.save();
    console.log(user)
    sendWelcomeEmail(user.email, user.name, user.role);
    res.status(201).send(token);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//Login user
const loginUser = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send(token);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//Logout User
const logoutUser = async (req, res) => {
  try {
    req.tokens === '';
    // await req.data.save()

    res.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

//Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};

//Get Personal Profile
const getProfile = async (req, res) => {
  try {
    const user = await req.user;
    res.json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

//Update user details
const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'contact', 'college', 'branch', 'batch'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'invalid Updates' });
  }
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Please login',
    });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));

    req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//Delete User
const deleteUser = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Please login',
    });
  }
  try {
    await req.user.remove();
    res.json({
      success: true,
      data: 'User deleted successfully',
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

//Get Client Dashboard

const getClientDashboard = async (req, res) => {
  try {
    const quotations = await Quotation.find({quotedToEmail: req.user.email})
    console.log(quotations);
    res.json({
      success: true,
      data: quotations,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
}

//Get Vendor Dashboard

const getVendorDashboard = async (req, res) => {
  try {
    const queries = await Query.find({})
    console.log(queries[0].queriedTo[0].email);
    const queriesToDisplay = []
    console.log(queries.length);
    // console.log(queries[0].queriedTo[0]); 
    // console.log(queries[0])
    // console.log(Object.values(queries.queriedTo))
    // queries.forEach(query, index => {
    //      console.log(index);
    //    if(query[index].queriedTo[index].email === req.user.email){
    //      queriesToDisplay.push(query)
    //    }
    //   //  console.log(queriesToDisplay);
    // });
    for(let i = 0; i<queries.length; i++)
    res.json({
      success: true,
      data: queriesToDisplay,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
}


export {
  registerNewUser,
  loginUser,
  logoutUser,
  getUsers,
  getProfile,
  updateUser,
  deleteUser,
  getClientDashboard,
  getVendorDashboard
};