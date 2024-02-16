import { lazy } from 'react';
import Loadable from 'app/components/Loadable';
import CreateJob from './CreateJob';
import Profile from './profile';
import ListJob from './ListJob';
import MyJobs from './MyJobs';





const RecruiterRoutes = [
  { path: '/Recruiter/CreateJob', element: <CreateJob /> },
  { path: '/Recruiter/profile', element: <Profile/> },
  { path: '/Recruiter/ListJob', element: <ListJob/> },
  { path: '/Recruiter/MyJobs', element: <MyJobs/> },

  
];

export default RecruiterRoutes;
