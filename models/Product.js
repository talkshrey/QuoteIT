import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    category:{
        type: String,
        required:[true, 'Please enter Category']
    },
    subCategory: {
        type: String,
        required:[true, 'Please enter a sub category']
    },
    model: {
        type: String,
        required:[true, 'Please enter the model']
    }
},{timestamps:true});

export default mongoose.model('Product', ProductSchema);

