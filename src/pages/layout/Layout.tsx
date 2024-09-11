import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'src/widgets/header/Header';

import s from './layout.module.scss';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.main_wrapper}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
