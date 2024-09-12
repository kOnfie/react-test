import ChoiceData from 'src/shared/ui/choiceData/ChoiceData';
import UserInformation from 'src/widgets/userInformation/UserInformation';

import { users } from 'src/shared/constants';

import s from './userEdit.module.scss';

const UserEdit = () => {
  return (
    <div className={s.userEdit}>
      <h1 className={s.title}>EDIT USER</h1>

      <ChoiceData title="User" data={users} />

      <UserInformation />
    </div>
  );
};

export default UserEdit;
