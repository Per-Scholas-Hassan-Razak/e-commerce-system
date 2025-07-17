import { fetchProducts } from "./services/apiService";
import Product from "./models/Product"
import { handleError } from "./utils/errorHandler";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
const main = async (): Promise<void> => {
  let productList: Product[]=[];
  try {
    
    const rawProductData = await fetchProducts();

    productList = rawProductData.map(
        (p) => 
        new Product(
          p.id,
          p.title,
          p.description,
          p.category,
          p.price,
          p.discountPercentage,
          p.image,
        )
    )
    productList.forEach((p) =>{
        p.displayDetails()
        console.log(
            `
            Discounted Price : $${p.getPriceWithDiscount()}
            `
        )
        console.log(
            `
            Discount Amount : $${(calculateDiscount(p))}
            `
        )
        console.log(
            `
            Tax Amount : $${(calculateTax(p))}
            `
        )
    })

  } catch (error) {
    handleError(error);
  } finally {
    console.log("Api request complete");
  }
};


main();