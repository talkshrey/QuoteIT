import Quotation from '../models/Quotation.js';

//Create a new query
const createQuote = async (req, res) => {
  try {
    const query = new Query({
      ...req.body,
      quotedBy: req.user.id, //since logged in as vendor
      quotedTo: req.user.id,
      quoteOf: 
      });

    await query.save();
    res.status(201).json({
      success: true,
      query
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};