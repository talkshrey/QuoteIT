import mongoose from 'mongoose'

const QuotationSchema = new mongoose.Schema({
    companyName:{
        type: String,
        required: [true, 'Please provide the name of your company' ]
    },
    vendorContact: {
        type: Number,
        required: [true, 'Please provide your contact']
    },
    vedorName: {
        type: String,
        required: [true, 'Please provide your contact']
    },
    rawPrice: {
        type: Number,
        required: [true, 'Please provide the raw price']
    },
    afterTaxPrice: {
        type: Number,
        required: [true, 'Please provide the price after taxing']
    },
    quotedToName:{
        type: String,
        required: true,
        ref:'User'
    },
    quotedToEmail: {
        type: String,
        required: [true, 'Please enter the email of the client'],
        ref: 'User'
    },
    quotedBy:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Vendor'
    },
    quoteOf: {
        type: String,
        required: [true, 'Please provide the product model'],
    }
},{timestamps:true});

export default mongoose.model('Quotation', QuotationSchema);