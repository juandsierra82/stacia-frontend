import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../Error';
import ProjectPage from '../ProjectPage';
import TasksPage from '../TasksPage';
import BudgetPage from '../BudgetPage';
import VendorsPage from '../VendorsPage';
import TaskCard from '../TaskCard';
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
      },
      {
        path: 'budget',
        element: <BudgetPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
