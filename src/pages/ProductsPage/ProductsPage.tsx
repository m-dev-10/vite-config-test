import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BlogCard } from '@/components/BlogCard';
import { products } from '@/shared/data/products';
import classes from './ProductsPage.module.scss';

export const ProductsPage: FC = () => {
  return (
    <div className={classes.productsPage}>
      <div className={classes.header}>
        <h1 className={classes.title}>Наши продукты</h1>
        <Link to="/" className={classes.backLink}>
          ← Вернуться на главную
        </Link>
      </div>
      
      <div className={classes.productGrid}>
        {products.map((product) => (
          <BlogCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}; 