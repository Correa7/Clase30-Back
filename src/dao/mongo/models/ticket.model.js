const mongoose = require('mongoose')
const uuid4= require('uuid4') 
const ticketSchema = new mongoose.Schema({
    code:{
        type: Date,
        default: uuid4(),

    },
    purchase_datetime:{
        type: Date,
        default: Date.now(),
    },
    amount:{
        type:Number, 
        unique:false,
        required:true,
    },
    purchaser:{
        type:String,
        unique:false, 
        required:true,
    }
},{ versionKey: false })

const TicketModel = mongoose.model('ticket', ticketSchema)

module.exports= TicketModel