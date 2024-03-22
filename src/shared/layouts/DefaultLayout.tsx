import React from 'react';
import { Outlet } from 'react-router-dom';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Container, Box, Typography } from '@mui/material';

function DefaultLayout() {
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
