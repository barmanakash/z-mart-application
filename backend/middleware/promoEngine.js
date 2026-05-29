/**
 * Processes discounts for Megamart order payloads safely on the server side.
 * Supported systems: Flat-rate item discounts, automatic Megapass membership rate cuts,
 * and standard multi-buy offer mapping.
 */
exports.processPromoCalculations = (user, cartItems) => {
  let subtotal = 0;
  let bulkDiscountSavings = 0;
  
  // Calculate raw costs and check for bulk item parameters
  cartItems.forEach(item => {
    const rawCost = item.product.currentPrice * item.quantity;
    subtotal += rawCost;

    // Simulate "Buy 3 At 50% Off" logic if explicitly configured on the item document
    if (item.product.promotions?.includes('BUY3_AT_50') && item.quantity >= 3) {
      // Apply 50% discount to chunks of 3 items
      const promoApplicableCount = Math.floor(item.quantity / 3) * 3;
      bulkDiscountSavings += (item.product.currentPrice * promoApplicableCount) * 0.5;
    }
  });

  let adjustedTotal = subtotal - bulkDiscountSavings;
  let megapassSavings = 0;

  // Evaluate Megapass tier benefits (Flat extra 5% capped at ₹100)
  if (user && user.megapassMember?.isActive) {
    megapassSavings = adjustedTotal * 0.05;
    if (megapassSavings > 100) megapassSavings = 100;
  }

  const finalSavings = bulkDiscountSavings + megapassSavings;
  
  // Megapass members get absolute free shipping thresholds on all transactions
  const shippingCharges = (adjustedTotal - megapassSavings >= 999 || user?.megapassMember?.isActive) ? 0 : 99;
  const finalPayable = adjustedTotal - megapassSavings + shippingCharges;

  return {
    subtotal,
    savings: Math.round(finalSavings),
    shippingCharges,
    finalTotal: Math.round(finalPayable)
  };
};