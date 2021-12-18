import Product from '../models/Product.js'

//Create a new query
const createProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
    })

    await product.save()
    res.status(201).json({
      success: true,
      product,
    })
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    })
  }
}

//Get main categories

const getProducts = async (req, res) => {
  try{
    const products = await Product.find({});
    res.json({
      success: true,
      data: products
  })
  } catch(e) {
    res.status(400).json({
      success: false,
      message: e.message
    })
  }
}

export { 
  createProduct,
  getProducts
 }