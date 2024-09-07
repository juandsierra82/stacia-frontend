import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../HomePage';
import App from '../App';
import ErrorPage from '../Error';
import ProjectPage from '../ProjectPage';
import TasksPage from '../TasksPage';
import BudgetPage from '../BudgetPage';
import VendorsPage from '../VendorsPage';
import TaskCard from '../TaskCard';
import VendorCard from '../VendorCard';
import ProjectCard from '../ProjectCard';
import Owners from '../OwnersPage';
import Owner from '../OwnersPage/OwnerCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/owners',
        element: <Owners />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/owners/:id',
            element: <Owner />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: '/projects',
        element: <ProjectCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/project/:projectId',
        element: <ProjectPage />,
        children: [
          {
            path: 'tasks',
            element: <TasksPage />,
            children: [
              {
                path: ':taskId',
                element: <TaskCard />,
              },
            ],
          },
          {
            path: 'vendors',
            element: <VendorsPage />,
            children: [
              {
                path: ':vendorId',
                element: <VendorCard />,
              },
            ],
          },
          {
            path: 'budget',
            element: <BudgetPage />,
          },
        ],
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
