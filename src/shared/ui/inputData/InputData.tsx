import { FC } from 'react';

import s from './inputData.module.scss';

interface InputDataProps {
  title: string;
  type: string;
  placeholder: string;
}

const InputData: FC<InputDataProps> = ({ title, type, placeholder }) => {
  return (
    <label className={s.inputData}>
      <span>{title}</span>
      <input type={type} placeholder={placeholder} required />
    </label>
  );
};

export default InputData;
