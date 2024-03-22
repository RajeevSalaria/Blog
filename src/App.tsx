import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './shared/routes/Routes';

const materialTheme = createTheme();

function App() {
	return (
		<ThemeProvider theme={materialTheme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
