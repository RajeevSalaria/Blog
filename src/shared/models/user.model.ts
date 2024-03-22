export interface IUser{
  firstName: string;
  lastName: string;
  email:string;
  password:string;
  confirmPassword?:string;
  gender:string;
  dateOfBirth?:string;
  phone:string;
  address?:string;
  city?:string;
  country?:string;
}