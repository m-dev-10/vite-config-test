import { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/shared/data/products';
import { IProduct } from '@/shared/types/product.types';
import classes from './ProductDetail.module.scss';

export const ProductDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p: IProduct) => p.id === Number(id));

  if (!product) {
    return (
      <div className={classes.notFound}>
        <h2>Продукт не найден</h2>
        <Link to="/" className={classes.backLink}>Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div className={classes.productDetail}>
      <Link to="/" className={classes.backLink}>
        ← Вернуться к списку
      </Link>
      
      <div className={classes.content}>
        <div className={classes.imageContainer}>
          <img src={product.imageUrl} alt={product.title} className={classes.image} />
        </div>
        
        <div className={classes.info}>
          <h1 className={classes.title}>{product.title}</h1>
          <p className={classes.price}>{product.price} ₽</p>
          <div className={classes.description}>
            <h3>Описание</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 