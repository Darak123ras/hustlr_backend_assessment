const products = require('../data/products');

// GET /products?category=Apparel
const getAllProducts = (req, res) => {
  const category = req.query.category;
  if (category) {
    const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    return res.json(filtered);
  }
  res.json(products);
};

// GET /products/:id
const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
};

// POST /products
const addProduct = (req, res) => {
  const { name, category, price } = req.body;
  if (!name || !category || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};
