import React from 'react';
import Button from '@mui/material/Button';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div
      className={
        product.inStock
          ? styles.card
          : `${styles.card} ${styles.outOfStock} outOfStockClass`
      }
    >
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <Button
        variant="outlined"
        color="error"
        onClick={() => onRemove(product.id)}
      >
        Remove
      </Button>
    </div>
  );
};

export default ProductCard;