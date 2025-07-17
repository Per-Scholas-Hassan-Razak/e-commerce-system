import Product from "../models/Product";

export const calculateTax = (product: Product): number => {
  const taxRate = product.category === "groceries" ? 3 : 4.75;

  const taxAmount = product.price * (taxRate / 100);
  return parseFloat(taxAmount.toFixed(2));
};
