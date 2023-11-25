import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
