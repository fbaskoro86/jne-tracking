const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema untuk Waybill dan modelnya
const WaybillSchema = new Schema({
  sender_name: {
    type: String,
    required: [true, 'The name of the sender is missing']
  },
  receiver_name: {
    type: String,
    required: [true, 'The name of the receiver is missing']
  },
  sender_city: {
    type: String,
    required: [true, 'The city of the sender is missing']
  },
  receiver_city: {
    type: String,
    required: [true, 'The city of the receiver is missing']
  },
  weight: {
    type: Number,
    required: [true, 'The weight of the delivery-goods is missing']
  },
  cost: {
    type: Number,
    required: [true, 'The cost of the delivery is missing']
  }
});

const Waybill = mongoose.model('waybill',WaybillSchema);

module.exports = Waybill;
