import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AuthService from '../../services/auth.service';
import { IUser } from '../models/user.model';

const UserLayout = React.memo(() => {
	const [user, setUser] = useState<IUser>();
	const navigate = useNavigate();
	useEffect(() => {
		let isUser = true;
		const authService = new AuthService();
		if (isUser) {
			authService
				.getCurrentUser()
				.then((res) => {
				 if(res?.data){
					setUser(res.data)
				 }else{
        navigate('/sign-in');
				 }
				})
		}
		return () => {
			isUser = false;
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<Header user={user} />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
});

export default UserLayout;
