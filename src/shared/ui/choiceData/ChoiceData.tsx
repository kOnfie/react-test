import { ChangeEvent, FC, useState, useEffect } from 'react';
import { useAppDispatch } from 'src/shared/hooks/reduxHook';

import { Icon } from 'src/shared/ui';

import { addUserName } from 'src/app/store/slices/userDataSlice';
import type { User, DataUser } from './types';

import s from './choiceData.module.scss';

interface ChoiceDataProps {
  title: string;
  data: User[] | DataUser[];
}

const ChoiceData: FC<ChoiceDataProps> = ({ title, data }) => {
  const [selectedValue, setSelectedValue] = useState<DataUser>(data[0] as DataUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSelectedValue(data[0] as DataUser);
  }, [data]);

  const handleChoiceData = (e: ChangeEvent<HTMLSelectElement>) => {
    if (title === 'User') {
      dispatch(addUserName(e.target.value));

      setSelectedValue({
        name: e.target.value,
        value: '',
      });

      return;
    }

    const dataName = data.find((item) => (item as DataUser).value === e.target.value);
    setSelectedValue({
      value: e.target.value,
      name: dataName?.name ?? '',
    });
  };

  return (
    <div className={s.choiceData}>
      <label>
        <span>{title}</span>
        <select value={selectedValue.name} onChange={handleChoiceData}>
          {data.map((item) => {
            if (title === 'User') {
              return (
                <option value={(item as User).name} key={(item as User).status.value}>
                  {(item as User).name}
                </option>
              );
            } else {
              return (
                <option value={(item as DataUser).value} key={(item as DataUser).value}>
                  {item.name}
                </option>
              );
            }
          })}
        </select>
      </label>
      <div className={s.choiceData_icon}>
        <Icon name="arrow" />
      </div>
    </div>
  );
};

export default ChoiceData;
