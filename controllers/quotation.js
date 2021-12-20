import Quotation from '../models/Quotation.js'
import User from '../models/User.js'
import { sendNotification } from '../emails/account.js'

//Create a new quote
const createQuotation = async (req, res) => {
  //console.log(req.user.contact);
  try {
    console.log(req.user.name)
    const quotation = new Quotation({
      ...req.body,
      quotedBy: req.user.id, //since logged in as vendor
      vendorContact: req.user.contact,
      vendorName: req.user.name,
    })

    const user = await User.findOne({ email: req.body.quotedToEmail })
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      })
    }

    await quotation.save()
    sendNotification(user.email, quotation.quoteOf)
    res.status(201).json({
      success: true,
      quotation,
    })
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    })
  }
}

export { createQuotation }
