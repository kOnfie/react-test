import { useAppSelector } from '../hooks/reduxHook';

import { countries, departments, statuses, users } from '../constants';
import { DataUser } from '../ui/choiceData/types';

export const useGetData = () => {
  const userName = useAppSelector((state) => state.userDataSlice.userName);
  const userData = users.find((user) => user.name === userName);

  const formatData = (data: DataUser[], type: string) => {
    const id = data.findIndex((item) => {
      switch (type) {
        case 'status':
          return item.name === userData?.status.name;
        case 'department':
          return item.name === userData?.department.name;
        case 'country':
          return item.name === userData?.country.name;
        default:
          return 'Error';
      }
    });
    const deletedItem = data.splice(id, 1);
    data.unshift(deletedItem[0]);
    return data;
  };

  const formattedCountries = formatData(countries, 'country');
  const formattedDepartments = formatData(departments, 'department');
  const formattedStatuses = formatData(statuses, 'status');

  return {
    countries: formattedCountries,
    departments: formattedDepartments,
    statuses: formattedStatuses,
  };
};
