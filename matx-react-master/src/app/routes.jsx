import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import CreateJob from './views/Recruiter/CreateJob';
import RecruiterRoutes from './views/Recruiter/RecruiterRoutes';
import Profile from './views/Recruiter/profile';
import ListJob from './views/Recruiter/ListJob';
import JwtLoginForApplicant from './views/sessions/JwtLoginForApplicant';
import JwtRegistrationForApplicant from './views/sessions/JwtRegistrationForApplicant';
import ApplicantRoutes from './views/Applicant/ApplicantRoutes';
import ViewApplicaton from './views/Recruiter/ViewApplication';


// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));


// echart page
const AppEchart = Loadable(lazy(() => import('app/views/charts/echarts/AppEchart')));

// dashboard page
const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      ...RecruiterRoutes,
      ...ApplicantRoutes,
      // dashboard route
      {
        path: '/dashboard/default',
        element: <Analytics />,
        auth: authRoles.admin
      },
      {
        path: '/createJob/default',
        element: <Analytics />,
        auth: authRoles.admin
      },

      // e-chart rooute
      {
        path: '/charts/echarts',
        element: <AppEchart />,
        auth: authRoles.editor
      }
    ]
  },

  // session pages route
  { path: '/session/404', element: <NotFound /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/signinForApplicant', element: <JwtLoginForApplicant /> },
  { path: '/session/signupForApplicant', element: <JwtRegistrationForApplicant /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },
  { path: '/Recruiter/CreateJob', element: <CreateJob /> },
  { path: '/Recruiter/profile', element: <Profile /> },
  { path: '/Recruiter/ListJob', element: <ListJob /> },
  { path: '/Recruiter/ViewApplication', element: <ViewApplicaton /> },
 
 
  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> },

];

export default routes;
