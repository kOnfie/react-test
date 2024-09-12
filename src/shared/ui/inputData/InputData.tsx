import { FC } from 'react';

import s from './inputData.module.scss';

interface InputDataProps {
  title: string;
  type: string;
  placeholder: string;
  value: string;
}

const InputData: FC<InputDataProps> = ({ title, type, placeholder, value }) => {
  return (
    <label className={s.inputData}>
      <span>{title}</span>
      <input type={type} placeholder={placeholder} value={value} required />
    </label>
  );
};

export default InputData;
