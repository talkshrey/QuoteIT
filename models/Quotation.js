const mongoose = require('mongoose');

const QuotationSchema = new mongoose.Schema({
    quotedTo:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    quotedBy:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Vendor'
    },
    quoteOf: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Query'
    },
    rawPrice: {
        type: Number,
        required: true
    },
    afterTaxPrice: {
        type: Number,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('Quotation', QuotationSchema);