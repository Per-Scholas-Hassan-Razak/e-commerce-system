import { fetchProducts } from "./services/apiService";
import Product from "./models/Product"
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
          p.taxPercentage
        )
    )
    productList.forEach((p) =>{
        p.displayDetails()
        console.log(
            `
            Discounted Price : $${p.getPriceWithDiscount()}
            `
        )
    })

  } catch (error) {
    console.log(error);
  } finally {
    console.log("Api request complete");
  }
};


main();