
import { FC } from 'react';
import { Link } from 'react-router-dom';

import classes    from './HomePage.module.scss';
import { Form } from '@/components/Form';
import { Slider } from '@/components/Slider';

const slides = [
  { id: 1, title: 'Первый слайд',  imageUrl: 'https://picsum.photos/id/1018/800/400', description: 'Описание первого слайда' },
  { id: 2, title: 'Второй слайд',   imageUrl: 'https://picsum.photos/id/1015/800/400', description: 'Описание второго слайда' },
  { id: 3, title: 'Третий слайд',   imageUrl: 'https://picsum.photos/id/1019/800/400', description: 'Описание третьего слайда' },
];

export const HomePage: FC = () => (
  <div className={classes.homePage}>
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Форма</h2>
      <Form />
    </section>
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Слайдер</h2>
      <Slider slides={slides} />
    </section>
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Наши продукты</h2>
      <div className={classes.productsPreview}>
        <p>Ознакомьтесь с нашей коллекцией продуктов</p>
        <Link to="/products" className={classes.productsButton}>
          Посмотреть все продукты
        </Link>
      </div>
    </section>
  </div>
);