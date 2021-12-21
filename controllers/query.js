import Query from '../models/Query.js'
import User from '../models/User.js'

import dotenv from 'dotenv'
dotenv.config()

import Twilio from 'twilio'
var client = new Twilio()

//Create a new query
const createQuery = async (req, res) => {
  try {
    const query = new Query({
      ...req.body,
      queriedBy: req.user.id,
      queriedTo: await User.find({ sells: req.body.productModel }),
    })

    const vendors = await User.find({ sells: query.productModel })
    await query.save()

    const contacts = []
    vendors.forEach((vendor) => {
      const number = vendor.contact
      const con = `whatsapp:+91${number}`
    
      client.messages
        .create({
          from: 'whatsapp:+14155238886',
          body: `Hi, ${vendor.name}! There is a query for ${query.productModel}. Follow the link: bit.ly/3mlzfae for logging in!`,
          to: con,
        })
        .then((message) => console.log('message sent' + message.sid))
    })
    console.log(contacts)
    res.status(201).json({
      success: true,
      query,
    })
  } catch (e) {
      console.log(e);
    res.status(400).json({
      success: false,
      message: e.message,
    })
  }
}

//Delete query
// const deleteUser = async (req, res) => {
//   if (!req.user) {
//     return res.status(401).json({
//       success: false,
//       message: 'Please login',
//     });
//   }
//   try {
//     await req.user.remove();
//     res.json({
//       success: true,
//       data: 'User deleted successfully',
//     });
//   } catch (e) {
//     res.status(500).json({
//       success: false,
//       message: e.message,
//     });
//   }
// };

export { createQuery }
