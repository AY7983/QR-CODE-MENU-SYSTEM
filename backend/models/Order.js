const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      quantity: Number,
    },
  ],
  total: Number,
  customer: {
    name: String,
    contact: String,
  },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Order', orderSchema);