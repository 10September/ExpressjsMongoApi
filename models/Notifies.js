const mongoose = require('mongoose');

const NotifiesSchema = new mongoose.Schema({
    refno: Number,
    merchantid:  Number,
    customeremail:String,
    productdetail:String,
    total: Number,
    cardtype:String,
    Value: Number,
    Name:String,
    updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Notifies', NotifiesSchema)