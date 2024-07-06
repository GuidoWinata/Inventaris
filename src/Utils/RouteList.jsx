import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/Login';
import DashboardPage from '../pages/Dashboard';
import MainDash from '../components/categories/MainDash';
import Kategori from '../pages/Kategori';
import Barang from '../pages/Barang';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/admin',
    element: <DashboardPage />,
    children: [
      { path: '', element: <MainDash /> },
      { path: '/admin/kategori', element: <Kategori /> },
      { path: '/admin/barang', element: <Barang /> },
    ],
  },
]);

export default routes;
