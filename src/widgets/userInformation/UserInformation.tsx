import InputData from 'src/shared/ui/inputData/InputData';
import ChoiceData from 'src/shared/ui/choiceData/ChoiceData';

import { useAppSelector } from 'src/shared/hooks/reduxHook';

import s from './userInformation.module.scss';
import { useGetData } from 'src/shared/hooks/useGetData';

const UserInformation = () => {
  const userName = useAppSelector((state) => state.userDataSlice.userName);
  const { departments, countries, statuses } = useGetData();

  return (
    <div className={s.userInformation}>
      <h2 className={s.userInformation_title}>User Information</h2>

      <div className={s.userInformation_block}>
        <InputData title="Full Name" placeholder="" type="text" value={userName} />
        <ChoiceData title="Department" data={departments} />
        <ChoiceData title="Country" data={countries} />
        <ChoiceData title="Status" data={statuses} />
      </div>
    </div>
  );
};

export default UserInformation;
