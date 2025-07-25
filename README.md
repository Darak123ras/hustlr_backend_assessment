# Product API - E-Commerce Backend 

Simple RESTful API built using **Node.js** and **Express.js**.

---

## Tech Stack

- **Node.js**
- **Express.js**
- JavaScript (ES6+)

---

### How to Run the Project
## 1. Clone the repository
```bash
git clone https://github.com/yourusername/product-api.git
cd product-api
```

## 2. Install dependencies
```bash
npm install
```
## 3. Start the server
```bash
npm start
```
Or if using nodemon:

```bash
npm run dev
```

## Features 

### 1. Get all products  
**GET** `/products`  
Returns a list of all available products.

**Example:**
```bash
curl http://localhost:3000/products
```

### 2. Get product by ID  
**GET** `/products/:id`  
Returns a single product that matches the given ID.

**Example:**
```bash
curl http://localhost:3000/products/2
```

### 3. Get product by category 
**GET** `/products?category=Apparel`  
Filters products by their category.

**Example:**
```bash
curl http://localhost:3000/products?category=Footwear
```

### 4. Adds a new product 
**POST** `/products`  
Adds a new product with basic validation.

```bash
{
  "name": "New Product",
  "category": "Accessories",
  "price": 100
}
```
**Example:**
```bash
curl -X POST http://localhost:3000/products \
-H "Content-Type: application/json" \
-d '{"name":"New Product","category":"Accessories","price":100}'

```