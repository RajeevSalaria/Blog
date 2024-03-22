import { Visibility, VisibilityOff } from '@mui/icons-material';
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
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AuthService from '../../../services/auth.service';

function Register() {
	const [user, setUser] = React.useState({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		phone: '',
		confirmPassword: '',
		gender: 'male'
	});
	const [showPassword, setShowPassword] = React.useState(false);
	const authService = new AuthService();

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		await authService.createUser(user).then((res) => console.log(res)).catch(err=>console.log(err));
	}

	return (
		<Box component={'section'}>
			<Container
				maxWidth="sm"
				sx={{ height: 'calc(100dvh - 112px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			>
				<Box component={'form'} sx={{ width: '100%' }}>
					<Card elevation={3} sx={{ mb: 3 }}>
						<CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', p: 3 }}>
							<Box component={'div'}>
								<Typography variant="h4" className="mb-5">
									Register here!
								</Typography>
								<Typography>Stay updated on your professional world</Typography>
							</Box>
							<Box component={'div'}>
								<TextField
									fullWidth
									type="text"
									name="firstName"
									value={user.firstName}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
									id="firstName"
									label="First name"
									placeholder="First name"
								/>
							</Box>
							<Box component={'div'}>
								<TextField
									fullWidth
									type="text"
									name="lastName"
									value={user.lastName}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
									id="lastName"
									label="Last Name"
									placeholder="Last name"
								/>
							</Box>
							<Box component={'div'}>
								<TextField
									fullWidth
									value={user.email}
									name='email'
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
									type="email"
									id="email"
									label="Email"
									placeholder="Email"
								/>
							</Box>
							<FormControl>
								<InputLabel htmlFor="password">Password</InputLabel>
								<OutlinedInput
									fullWidth
									type={showPassword ? 'text' : 'password'}
									value={user.password}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
									name="password"
									id="password"
									label="Password"
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
							</FormControl>
							<FormControl>
								<InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
								<OutlinedInput
									fullWidth
									type={showPassword ? 'text' : 'password'}
									value={user.confirmPassword}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
									id="confirmPassword"
									name="confirmPassword"
									label="Confirm Password"
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
							</FormControl>
							<Box component={'div'}>
								<TextField
									fullWidth
									type="text"
									id="mobile"
									name="phone"
									value={user.phone}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
									label="Mobile Number"
									placeholder="7529842449"
								/>
							</Box>
							<Box component={'div'}>
								<FormControl>
									<FormLabel id="row-radio-buttons-group-label">Gender</FormLabel>
									<RadioGroup row aria-labelledby="row-radio-buttons-group-label" name="gender" value={user.gender} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleOnChange(e)}>
									<FormControlLabel value="male" control={<Radio />} label="Male" />
										<FormControlLabel value="female" control={<Radio />} label="Female" />
										<FormControlLabel value="other" control={<Radio />} label="Other" />
									</RadioGroup>
								</FormControl>
							</Box>
							<Box component={'div'}>
								<Button variant="contained" onClick={handleSubmit} size="large" fullWidth sx={{ borderRadius: 8, textTransform: 'none' }}>
									Register
								</Button>
							</Box>
						</CardContent>
					</Card>
					<Box component={'div'} textAlign="center">
						{' '}
						Already have an account{' '}
						<Link component={RouterLink} sx={{ textDecoration: 'none' }} to="/sign-in">
							Sign in
						</Link>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Register;
