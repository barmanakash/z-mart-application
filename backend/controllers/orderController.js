const Order = require('../models/Order');
const Product = require('../models/Product');
const { processPromoCalculations } = require('../middleware/promoEngine');

exports.createOrder = async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;
    
    // Fetch fresh database documents to prevent client injection attacks on pricing
    const populatedItems = await Promise.all(items.map(async (item) => {
      const productDoc = await Product.findById(item.productId);
      if (!productDoc) throw new Error(`Product mapping failed for identifier: ${item.productId}`);
      return { product: productDoc, quantity: item.quantity, size: item.size, color: item.color };
    }));

    // Calculate final pricing securely via server architecture
    const breakdown = processPromoCalculations(req.user, populatedItems);

    const newOrder = new Order({
      user: req.user._id,
      items: populatedItems.map(i => ({
        product: i.product._id,
        quantity: i.quantity,
        size: i.size,
        color: i.color,
        priceAtPurchase: i.product.currentPrice
      })),
      financials: breakdown,
      shippingAddress,
      paymentStatus: 'Pending'
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, data: savedOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};