import { FC } from 'react';
import { ProductDetail } from '@/components/ProductDetail';
import classes from './ProductPage.module.scss';

export const ProductPage: FC = () => {
  return (
    <div className={classes.productPage}>
      <ProductDetail />
    </div>
  );
}; 