import Product from "../models/Product";
import { CustomErrorClass } from "../utils/errorHandler";

interface ProductResponse{
    products:Product[]
}

export const fetchProducts = async ():Promise<Product[]> => {
    try{
        const response = await fetch('https://dummyjson.com/products')
        if(!response.ok){
            throw new CustomErrorClass(`Failed to fetch products. Status: ${response.status}`, response.status)
        }
        const data:ProductResponse = await response.json();
        return data.products;

    }catch(error){
        throw error;
    }
}



