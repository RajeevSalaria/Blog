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
	Divider,
	FormHelperText
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AuthService from '../../../services/auth.service';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
	email: yup.string().email('Enter a valid email').required('Email is required'),
	password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required')
});

function Login() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	const [showPassword, setShowPassword] = React.useState(false);
	const authService = new AuthService();

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const handleSubmit = async () => {
		await authService
			.handleLogin(formik.values.email, formik.values.password)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<Box component={'section'}>
			<Container
				maxWidth="sm"
				sx={{ height: 'calc(100dvh - 112px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			>
				<Box component={'form'} sx={{ width: '100%' }} onSubmit={(e) => e.preventDefault()}>
					<Card elevation={3} sx={{ mb: 3 }}>
						<CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', p: 3 }}>
							<Box component={'div'}>
								<Typography variant="h4" className="mb-5">
									Sign In
								</Typography>
								<Typography>Stay updated on your professional world</Typography>
							</Box>
							<Box component={'div'}>
								<TextField
									fullWidth
									type="email"
									name="email"
									id="email"
									label="Email"
									placeholder="Email"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}
								/>
							</Box>
							<FormControl>
								<InputLabel htmlFor="password">Password</InputLabel>
								<OutlinedInput
									fullWidth
									type={showPassword ? 'text' : 'password'}
									id="password"
									name="password"
									label="Password"
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.password && Boolean(formik.errors.password)}
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
								></OutlinedInput>
									<FormHelperText error >{formik.touched.password && formik.errors.password}</FormHelperText>
								<Link
									to="/forgot-password"
									component={RouterLink}
									sx={{ textDecoration: 'none', mt: 1, display: 'inline-block' }}
								>
									Forgot password?
								</Link>
							</FormControl>
							<Box component={'div'}>
								<Button
									variant="contained"
									onClick={handleSubmit}
									size="large"
									fullWidth
									sx={{ borderRadius: 8, textTransform: 'none' }}
								>
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
					<Box component={'div'} textAlign="center">
						{' '}
						New to blog{' '}
						<Link component={RouterLink} sx={{ textDecoration: 'none' }} to="/register">
							Join now
						</Link>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Login;
