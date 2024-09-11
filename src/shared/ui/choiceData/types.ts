export type Status = {
  name: string;
  value: string;
};

export type Department = {
  name: string;
  value: string;
};

export type Country = {
  name: string;
  value: string;
};

export interface User {
  name: string;
  status: Status;
  department: Department;
  country: Country;
}
