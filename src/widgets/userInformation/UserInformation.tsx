import InputData from 'src/shared/ui/inputData/InputData';
import ChoiceData from 'src/shared/ui/choiceData/ChoiceData';

import s from './userInformation.module.scss';

const departaments = [
  {
    name: 'Human Resources',
    value: 'HR',
  },
  {
    name: 'Finance',
    value: 'FIN',
  },
  {
    name: 'Information Technology',
    value: 'IT',
  },
  {
    name: 'Marketing',
    value: 'MKT',
  },
  {
    name: 'Sales',
    value: 'SAL',
  },
  {
    name: 'Customer Support',
    value: 'CS',
  },
  {
    name: 'Research and Development',
    value: 'R&D',
  },
  {
    name: 'Operations',
    value: 'OPS',
  },
  {
    name: 'Legal',
    value: 'LEG',
  },
  {
    name: 'Product Management',
    value: 'PM',
  },
];
const counties = [
  {
    name: 'Ukraine',
    value: 'UA',
  },
  {
    name: 'United States',
    value: 'US',
  },
  {
    name: 'Canada',
    value: 'CA',
  },
  {
    name: 'Germany',
    value: 'DE',
  },
  {
    name: 'France',
    value: 'FR',
  },
  {
    name: 'Australia',
    value: 'AU',
  },
  {
    name: 'Japan',
    value: 'JP',
  },
  {
    name: 'United Kingdom',
    value: 'GB',
  },
  {
    name: 'China',
    value: 'CN',
  },
  {
    name: 'India',
    value: 'IN',
  },
];
const statuses = [
  {
    name: 'All statuses',
    value: 'ALL',
  },
  {
    name: 'Active',
    value: 'ACTIVE',
  },
  {
    name: 'Disabled',
    value: 'DISABLED',
  },
];

const UserInformation = () => {
  return (
    <div className={s.userInformation}>
      <h2 className={s.userInformation_title}>User Information</h2>

      <div className={s.userInformation_block}>
        <InputData title="Full Name" placeholder="" type="text" />
        <ChoiceData title="Department" data={departaments} />
        <ChoiceData title="Country" data={counties} />
        <ChoiceData title="Status" data={statuses} />
      </div>
    </div>
  );
};

export default UserInformation;
