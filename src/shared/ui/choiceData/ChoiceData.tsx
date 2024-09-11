import { FC } from 'react';
import { Icon } from 'src/shared/ui';

import type { User } from './types';

import s from './choiceData.module.scss';

interface ChoiceDataProps {
  title: string;
  users: User[];
}

const ChoiceData: FC<ChoiceDataProps> = ({ title, users }) => {
  return (
    <div className={s.choiceData}>
      <label>
        <span>{title}</span>
        <select>
          {users.map((user) => (
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
