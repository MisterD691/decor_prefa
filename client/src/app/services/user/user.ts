export interface User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  address?: string;
  picture?: string;
  token?: string;
}
