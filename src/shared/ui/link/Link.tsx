import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import s from './link.module.scss';
interface LinkProps {
  path: string;
  children: ReactNode;
  className?: string;
}

const Link: FC<LinkProps> = ({ path, className, children }) => {
  return (
    <NavLink
      className={({ isActive }: { isActive: boolean }) =>
        isActive ? `${s.link} ${className} ${s.active}` : `${s.link} ${className}`
      }
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default Link;
