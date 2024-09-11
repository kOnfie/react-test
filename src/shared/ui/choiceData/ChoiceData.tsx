import { FC } from 'react';
import { Icon } from 'src/shared/ui';

import type { User, Country } from './types';

import s from './choiceData.module.scss';

interface ChoiceDataProps {
  title: string;
  data: User[] | Country[];
}

const ChoiceData: FC<ChoiceDataProps> = ({ title, data }) => {
  return (
    <div className={s.choiceData}>
      <label>
        <span>{title}</span>
        <select>
          {data.map((user) => (
            <option value={user.name} key={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </label>
      <div className={s.choiceData_icon}>
        <Icon name="arrow" />
      </div>
    </div>
  );
};

export default ChoiceData;
