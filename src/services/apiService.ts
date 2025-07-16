import Product from "../models/Product";

interface ProductResponse{
    products:Product[]
}

export const fetchProducts = async ():Promise<Product[]> => {
    const response = await fetch('https://dummyjson.com/products')
    const data:ProductResponse = await response.json();
    return data.products;
}



