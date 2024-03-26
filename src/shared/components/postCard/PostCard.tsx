import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, CardActions, Divider, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function PostCard() {
	return (
		<Card>
			<Box component={'div'} display={'flex'}>
				<div>
					<CardMedia
						component="img"
						sx={{ height: '100%' }}
						height="140"
						image="https://static.wixstatic.com/media/0b340f_b032cab8e6314408bb8edaad4bce7fb2~mv2.jpg/v1/fill/w_532,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_b032cab8e6314408bb8edaad4bce7fb2~mv2.jpg"
						alt="green iguana"
					/>
				</div>
				<CardContent>
					<Box component={'div'} display={'flex'} alignItems={'center'}>
						<AccountCircleIcon sx={{ mr: 1}} />
						<Box component={'small'}>
							<Typography variant="caption">Admin</Typography>
							<Typography component={'small'} display={'block'} variant="caption">1 March 2024</Typography>
						</Box>
					</Box>
					<Typography gutterBottom variant="h5" component="div">
						Playing with patterns
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your
						audience to continue reading....
					</Typography>
					<Divider sx={{mt:2}} />
					<Box>
						1 view 1 comment{' '}
						<IconButton size="small" area-label="Like" color="error">
							<FavoriteBorderIcon />
						</IconButton>
					</Box>
				</CardContent>
			</Box>
		</Card>
	);
}

export default PostCard;
