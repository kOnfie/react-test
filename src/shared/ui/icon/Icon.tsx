import { FC } from 'react';
import sprite from 'src/../public/sprite.svg';
import s from './icon.module.scss';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: FC<IconProps> = ({ name, className }) => {
  return (
    <svg className={`${s.icon} ${className}`}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default Icon;
