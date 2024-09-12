import { FC, useEffect, useState } from 'react';

import s from './inputData.module.scss';

interface InputDataProps {
  title: string;
  type: string;
  placeholder: string;
  value: string;
}

const InputData: FC<InputDataProps> = ({ title, type, placeholder, value }) => {
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  return (
    <label className={s.inputData}>
      <span>{title}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
    </label>
  );
};

export default InputData;
