# E-Commerce Product Management System (TypeScript SBA6)

mock eCommerce application to simulate how someone may interact with an ecommer website viewing products and price points. 

---
## 🚀 Getting Started

### 1. Clone the Repository and install all packages

```bash
git clone https://github.com/Per-Scholas-Hassan-Razak/e-commerce-system.git
cd e-commerce-system

npm install

```
### 2. Compile

```bash 
npx tsc
```

### 3. Run if NOT compiled 
```bash
npx ts-node src/main.ts
```
### 4. Run if compiled 
```bash
node src/main.js
```

## Features
 - Fetches product data from the DummyJSON API
 - Models product info using a TypeScript class
 - Calculates discount and tax amounts using utility modules
 - Handles errors using a custom error class and centralized error handler
 - Outputs a clean product summary in the console

## REFLECTION
In this SBA project, I applied my knowledge of TypeScript and advanced JavaScript to build a command-line E-commerce Product Management System. I used object-oriented principles to model product data, utility functions to calculate discounts and tax, and async/await to fetch and display product information. A key challenge was implementing robust error handling using a custom error class and a centralized handler, especially after realizing that fetch() doesn’t throw for HTTP errors by default. I also helped my classmate Lauren troubleshoot parts of her SBA, which reinforced my own understanding. This project strengthened my ability to write clean, maintainable TypeScript code for real-world applications.