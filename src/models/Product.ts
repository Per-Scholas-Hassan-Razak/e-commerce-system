class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  image: string;
  

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    image: string,
  
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.image = image;
  
  }

  displayDetails = (): void => {
    console.log(`
    ───────────────────────────────
    ID:                 ${this.id}
    Title:              ${this.title}
    Description:        ${this.description}
    Category:           ${this.category}
    Price:              $${this.price.toFixed(2)}
    Discount:           ${this.discountPercentage}%
    Image URL:          ${this.image}
    ───────────────────────────────
    `);
  };

  getPriceWithDiscount = (): number => {
    return this.price * (1 - this.discountPercentage / 100);
  };
}

export default Product;
