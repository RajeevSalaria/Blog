import axios from 'axios';
import { IUser } from '../shared/models/user.model';

export default class AuthService {
	public async handleLogin(email: string, password: string): Promise<any> {
		return await axios
			.post('http://localhost:3100/api/user/login', { email, password })
			.catch((err) => console.log(err));
	}

	public async createUser(user: IUser) {
		return await axios.post('http://localhost:3100/api/user', user).catch((err) => console.log(err));
	}

	public async getCurrentUser(): Promise<any> {
		let authToken = localStorage.getItem('token');
		axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
		return await axios.get('http://localhost:3100/api/currentUser').catch((err) => console.log(err));
	}
}
