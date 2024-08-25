import { createBrowserRouter, Navigate  } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/HomePage/HomePage';
import PersonalizedPage from '../pages/PersonalizedPage/PersonalizedPage';
import { NotRouteFound } from '../components';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
		children: [
			{
				path: "/",
				element: <Navigate to="/home" replace={true} />,
			},
			{
				path: "/home",
				element: <HomePage />
			},
			{
				path: "/personalized",
				element: <PersonalizedPage />
			},
			{
				path: "*",
				element: <NotRouteFound />
			}
		]
	}
]);

export default appRouter;