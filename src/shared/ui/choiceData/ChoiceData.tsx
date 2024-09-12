import { ChangeEvent, FC, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    console.log(title);
    if (title === 'User') {
      dispatch(addUserName(e.target.value));

      setSelectedValue({
        name: e.target.value,
        value: '',
      });

      return;
    }

    const dataItem = (data as DataUser[]).find((item) => item.value === e.target.value);

    if (dataItem) {
      setSelectedValue({
        value: dataItem.value,
        name: dataItem.name,
      });
    }
  };

  return (
    <div className={s.choiceData}>
      <label>
        <span>{title}</span>
        <select value={selectedValue.name} onChange={handleChoiceData}>
          {data.map((item) => {
            if (title === 'User') {
              return (
                <option value={(item as User).name} key={uuidv4()}>
                  {(item as User).name}
                </option>
              );
            } else {
              return (
                <option value={(item as DataUser).value} key={uuidv4()}>
                  {(item as DataUser).name}
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
