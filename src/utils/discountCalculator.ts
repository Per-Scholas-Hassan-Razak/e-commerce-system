import Product from "../models/Product";

export const calculateDiscount = (product: Product): number => {
  const discountAmount = product.price * (product.discountPercentage / 100);
  return parseFloat(discountAmount.toFixed(2));
};