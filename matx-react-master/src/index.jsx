import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import  {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// third party style
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import Profile from 'app/views/Recruiter/profile';
import CreateJob from 'app/views/Recruiter/CreateJob';
import { Provider } from 'react-redux';
import store from 'store/store';
import MyJobs from 'app/views/Recruiter/MyJobs';
import AppAutoComplete from 'app/views/material-kit/auto-complete/AppAutoComplete';
const root = createRoot(document.getElementById('root'));


root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
   
    <App />
    </BrowserRouter>
    </Provider>
  </StyledEngineProvider>
);

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
