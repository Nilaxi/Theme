import { lazy } from 'react';

import ListJobs from './ListJobs';
import AppicantProfile from './AppicantProfile';



const ApplicantRoutes = [
    { path: '/Applicant/ListJobs', element: <ListJobs/> },
    { path: '/Applicant/Profile', element: <AppicantProfile/> }
]

export default ApplicantRoutes;