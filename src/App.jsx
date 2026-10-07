import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') {
      return product.inStock;
    }

    if (filter === 'outOfStock') {
      return !product.inStock;
    }

    return true;
  });

  const handleRemove = (id) => {
  setProducts((currentProducts) =>
    currentProducts.filter((product) => product.id !== id)
  );
};

  return (
    <div>
      <h1 className="dashboardTitle">Product Dashboard</h1>

      <Button onClick={() => setFilter('all')}>
        All Products
      </Button>

      <Button onClick={() => setFilter('inStock')}>
        In Stock
      </Button>

      <Button onClick={() => setFilter('outOfStock')}>
        Out of Stock
      </Button>

      <ProductList
  products={filteredProducts}
  onRemove={handleRemove}
/>
    </div>
  );
};

export default App;