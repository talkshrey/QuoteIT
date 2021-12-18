import Query from '../models/Query.js'
import User from '../models/User.js'

//Create a new query
const createQuery = async (req, res) => {
  try {
    const query = new Query({
      ...req.body,
      queriedBy: req.user.id,
      queriedTo: await User.find({ sells: req.body.productModel}),
    })

    const vendors = await User.find({ sells: query.productModel})
    //console.log(query.productModel);
    await query.save()
    for(var i =0; i< vendors.length(); )
    console.log(vendors[i])
    res.status(201).json({
      success: true,
      query,
    })
  } catch (e) {
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
