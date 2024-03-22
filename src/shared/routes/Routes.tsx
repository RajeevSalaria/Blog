import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../../pages/home/Home';
import Login from '../../pages/auth/login/Login';
import Register from '../../pages/auth/register/Register';

export const router = createBrowserRouter([
	{
		path: '',
		element: <UserLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: <Home />
			}
		]
	},
	{
		path: '',
		element: <DefaultLayout />,
		children: [
			{
				path: '/sign-in',
				element: <Login />
			},
      {
				path: '/register',
				element: <Register/>
			}
		]
	}
]);
