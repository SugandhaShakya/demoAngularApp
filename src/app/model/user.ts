import { BaseModel } from './base-model';

export class User extends BaseModel {
  name!: string;
  email!: string;
  password!: string;
  phone!: string;
  city!: string;
  street!: string;
  apartment!: string;
  country!: string;


}
