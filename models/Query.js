import mongoose from 'mongoose'

const QuerySchema = new mongoose.Schema({
    queriedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    queriedTo: {
        type: Array,
        required: true,
        // ref:'Vendor' 
    },
    productCategory:{
        type: String,
        required:[true, 'Please enter Category']
    },
    productSubCategory: {
        type: String,
        required:[true, 'Please enter a sub category']
    },
    productModel: {
        type: String,
        required:[true, 'Please enter the model']
    }
},{timestamps:true});

export default mongoose.model('Query', QuerySchema);