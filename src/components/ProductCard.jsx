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
    <h3 className={styles.productHeading}>
      <span className={styles.productIcon} aria-hidden="true">
        {product.name === 'Laptop'
          ? '💻'
          : product.name === 'Phone'
            ? '📱'
            : '▣'}
  </span>
  <span>{product.name}</span>
</h3>
      <p>{product.price}</p>
      <p className={!product.inStock ? styles.stockLabel : undefined}>
  {product.inStock ? 'In Stock' : 'Out of Stock'}
</p>

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