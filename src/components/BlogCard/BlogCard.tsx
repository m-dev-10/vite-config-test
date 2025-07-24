import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './BlogCard.module.scss'
import { IProduct } from '@/shared/types/product.types';

interface BlogCardProps {
  product: IProduct;
}

export const BlogCard: FC<BlogCardProps> = ({ product }) => {
  const { id, title, price, imageUrl } = product;

  return (
    <Link to={`/product/${id}`} className={classes.card}>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt={title} className={classes.image} />
      </div>
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.price}>{price} ₽</p>
      </div>
    </Link>
  );
}; 