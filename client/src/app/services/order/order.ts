import { User } from "../user/user";

export interface Order {
  _id?: string;
  reference: string;
  client: User;
  clientId?: string;
  responded?: boolean;
  response?: boolean;
}
