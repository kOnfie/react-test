export type DataUser = {
  name: string;
  value: string;
};

export interface User {
  name: string;
  status: DataUser;
  department: DataUser;
  country: DataUser;
}
