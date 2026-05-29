const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    priceAtPurchase: { type: Number, required: true }
  }],
  financials: {
    subtotal: { type: Number, required: true },
    savings: { type: Number, required: true },
    shippingCharges: { type: Number, required: true },
    finalTotal: { type: Number, required: true }
  },
  shippingAddress: {
    street: String, city: String, state: String, zipCode: String
  },
  paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
  orderStatus: { type: String, enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled'], default: 'Processing' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);