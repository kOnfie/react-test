import { createBrowserRouter } from 'react-router-dom';
import { Layout, UserEdit, UserList } from 'src/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h1>Error, page not found!</h1>,
    children: [
      {
        path: '/edit-user',
        element: <UserEdit />,
      },
      {
        path: '/users',
        element: <UserList />,
      },
    ],
  },
]);
