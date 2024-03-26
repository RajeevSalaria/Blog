import { Image } from '@mui/icons-material';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PostCard from '../../shared/components/postCard/PostCard';

function Home() {
	return (
		<>
			<Box component={'section'} paddingBottom={5}>
				<Grid container>
					<Grid item xs={12}>
						<Box
							component={'img'}
							sx={{ maxWidth: '100%', height: '100%' }}
							src="https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1903,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg"
							alt="loading"
						/>
					</Grid>
				</Grid>
			</Box>

			<Box component={'section'} paddingBottom={5}>
				<Container maxWidth="xl">
					<Typography variant="h3" marginBottom={3}> My Posts</Typography>
					<Grid container>
						<Grid item xs={12} md={2} lg={4}>
							<PostCard />
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box component={'section'} paddingBottom={5}>
				<Container maxWidth="xl">
					<Typography variant="h3" marginBottom={3}> Most Like</Typography>
          <Grid container>
						<Grid item xs={12} md={2} lg={4}>
							<PostCard />
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box component={'section'} paddingBottom={5}>
				<Container maxWidth="xl">
					<Typography variant="h3" marginBottom={3}> Most View</Typography>
          <Grid container>
						<Grid item xs={12} md={2} lg={4}>
							<PostCard />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}

export default Home;
