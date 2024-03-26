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
	Radio,
	FormHelperText
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AuthService from '../../../services/auth.service';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
	email: yup.string().email('Enter a valid email').required('Email is required'),
	password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
	firstName: yup.string().required('First name is required'),
	lastName: yup.string().required('Last name is required'),
	phone: yup.string().required('Phone number is required').min(10, 'Phone number should be of minimum 10 characters length').max(10, 'Phone number should be of maximum 10 characters length').matches(/^[0-9]+$/, 'Must be only digits'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.required('Confirm password is required')
});

function Register() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			phone: '',
			confirmPassword: '',
			gender: 'male'
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
			.createUser(formik.values)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

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
									value={formik.values.firstName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={formik.touched.firstName && formik.errors.firstName}
									error={formik.touched.firstName && Boolean(formik.errors.firstName)}
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
									value={formik.values.lastName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.lastName && Boolean(formik.errors.lastName)}
									helperText={formik.touched.lastName && formik.errors.lastName}
									id="lastName"
									label="Last Name"
									placeholder="Last name"
								/>
							</Box>
							<Box component={'div'}>
								<TextField
									fullWidth
									value={formik.values.email}
									helperText={formik.touched.email && formik.errors.email}
									name="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.email && Boolean(formik.errors.email)}
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
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.password && Boolean(formik.errors.password)}
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
												<FormHelperText error>{formik.touched.password && formik.errors.password}</FormHelperText>
							</FormControl>
							<FormControl>
								<InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
								<OutlinedInput
									fullWidth
									type={showPassword ? 'text' : 'password'}
									value={formik.values.confirmPassword}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
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
												<FormHelperText error>{formik.touched.confirmPassword && formik.errors.confirmPassword}</FormHelperText>
							</FormControl>
							<Box component={'div'}>
								<TextField
									fullWidth
									type="text"
									id="mobile"
									name="phone"
									value={formik.values.phone}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={formik.touched.phone && formik.errors.phone}
									error={formik.touched.phone && Boolean(formik.errors.phone)}
									label="Mobile Number"
									placeholder="7529842449"
								/>
							</Box>
							<Box component={'div'}>
								<FormControl>
									<FormLabel id="row-radio-buttons-group-label">Gender</FormLabel>
									<RadioGroup
										row
										aria-labelledby="row-radio-buttons-group-label"
										name="gender"
										value={formik.values.gender}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									>
										<FormControlLabel value="male" control={<Radio />} label="Male" />
										<FormControlLabel value="female" control={<Radio />} label="Female" />
										<FormControlLabel value="other" control={<Radio />} label="Other" />
									</RadioGroup>
								</FormControl>
							</Box>
							<Box component={'div'}>
								<Button
									variant="contained"
									onClick={handleSubmit}
									size="large"
									fullWidth
									sx={{ borderRadius: 8, textTransform: 'none' }}
								>
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
