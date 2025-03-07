import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';
import MainLayout from '../layout/MainLayout';
import AuthLogin from '../views/pages/auth-forms/AuthLogin';

import FilesPage from '../views/pages/files-pages';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('./../views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('./../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('./../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('./../views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('./../views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'files',
      children: [
        {
          path: 'search-files',
          element: <FilesPage />
        }
      ]
    },
    {
      path: 'auth',
      element: <AuthLogin />
    },
    {
      path: 'color',
      element: <UtilsColor />
    },
    {
      path: 'shadow',
      element: <UtilsShadow />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
