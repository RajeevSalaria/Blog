import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	TextField,
	Typography,
	Link,
	InputAdornment,
	IconButton,
	OutlinedInput,
	InputLabel,
	FormControl,
	Divider
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AuthService from '../../../services/auth.service';

function Login() {
	const [user, setUser] = React.useState({email: '', password:''});
	const [showPassword, setShowPassword] = React.useState(false);
	const authService = new AuthService();

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

  const handleSubmit = async ()=>{
    await  authService.handleLogin(user.email, user.password).then(res=>console.log(res))
	}

	return (
		<Box component={'section'}>
			<Container
				maxWidth="sm"
				sx={{ height: 'calc(100dvh - 112px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			>
				<Box component={'form'} sx={{ width: '100%' }} onSubmit={e=>e.preventDefault()}>
					<Card elevation={3} sx={{mb:3}}>
						<CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', p: 3 }}>
							<Box component={'div'}>
								<Typography variant="h4" className="mb-5">
									Sign In
								</Typography>
								<Typography>Stay updated on your professional world</Typography>
							</Box>
							<Box component={'div'}>
								<TextField fullWidth type="email" value={user.email} onChange={(e) => setUser({...user,email:e.target.value})} name="email" id="email" label="Email" placeholder="Email" />
							</Box>
							<FormControl>
								<InputLabel htmlFor="password">Password</InputLabel>
								<OutlinedInput
									fullWidth
									type={showPassword ? 'text' : 'password'}
									id="password"
									name="password"
									label="Password"
									value={user.password}
									onChange={(e) => setUser({...user,password:e.target.value})}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
								/>
								<Link to="/forgot-password" component={RouterLink} sx={{ textDecoration: 'none', mt: 1, display: 'inline-block' }}>
									Forgot password?
								</Link>
							</FormControl>
							<Box component={'div'}>
								<Button variant="contained" onClick={handleSubmit}size="large" fullWidth sx={{ borderRadius: 8, textTransform: 'none' }}>
									Sign in
								</Button>
							</Box>
							<Divider>or</Divider>
							<Box component={'div'}>
								<Button variant="outlined" size="large" fullWidth sx={{ borderRadius: 8, textTransform: 'none' }}>
									<Google sx={{ mr: 1 }} /> Sign in with Google
								</Button>
							</Box>
						</CardContent>
					</Card>
          <Box component={'div'} textAlign="center"> New to blog <Link component={RouterLink} sx={{textDecoration:'none'}} to="/register">Join now</Link></Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Login;
