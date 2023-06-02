const mongoose = require('mongoose');

const SNLhookSchema = new mongoose.Schema({
    transactionId:String,
    paymentId:String,
    ref_1:String,
    ref_2:String,
    resCode:String,
    resDesc:String,
    confirmId:String,
    updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('SNLhook', SNLhookSchema)