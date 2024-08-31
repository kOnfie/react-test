import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'src/widgets/header/Header';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
