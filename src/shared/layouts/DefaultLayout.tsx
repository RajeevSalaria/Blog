import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Container, Box, Typography } from '@mui/material';
import AuthService from '../../services/auth.service';

function DefaultLayout() {
	const navigate = useNavigate();
	useEffect(() => {
		let authService = new AuthService();
		authService
			.getCurrentUser()
			.then((res) => {
				if (Object.keys(res.data).length > 0){
					navigate('/');
				}else{
					navigate('/sign-in')
				}
			})
			.catch((err) => console.log(err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<Box component="header" sx={{ py: 5, position: 'sticky', top: '0px' }}>
				<Container maxWidth="xl">
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Diversity2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
						<Typography variant={'h5'}>Blog</Typography>
					</Box>
				</Container>
			</Box>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default DefaultLayout;
