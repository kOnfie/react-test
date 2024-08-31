import { Link } from 'src/shared/ui';

import s from './header.module.scss';

const data = [
  {
    path: '/edit-user',
    text: 'Edit Users',
  },
  {
    path: '/users',
    text: 'Users',
  },
];

const Header = () => {
  return (
    <header className={s.header}>
      {data.map(({ path, text }) => (
        <Link className={s.header__link} path={path} key={path}>
          {text}
        </Link>
      ))}
    </header>
  );
};

export default Header;
