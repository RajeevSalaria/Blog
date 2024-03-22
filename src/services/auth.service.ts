import axios from "axios";
import { IUser } from "../shared/models/user.model";

export default class AuthService{
  public async handleLogin(email:string, password:string){
   return await axios.post('http://localhost:3100/api/user/login', {email, password}).catch(err=>console.log(err));
  }

  public async createUser(user:IUser){
    return await axios.post('http://localhost:3100/api/user', user).catch(err=>console.log(err));
   }
}