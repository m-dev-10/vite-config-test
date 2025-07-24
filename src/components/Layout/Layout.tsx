import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classes from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <div className={classes.container}>
          <Link to="/" className={classes.logo}>
            Демонстрационное приложение
          </Link>
          <nav className={classes.nav}>
            <Link to="/" className={classes.navLink}>
              Главная
            </Link>
            <Link to="/products" className={classes.navLink}>
              Продукты
            </Link>
          </nav>
        </div>
      </header>
      
      <main className={classes.main}>
        {children}
      </main>
      
      <footer className={classes.footer}>
        <div className={classes.container}>
          <p>© 2023 Демонстрационное приложение. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}; 