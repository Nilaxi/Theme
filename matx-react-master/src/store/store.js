import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import rootsaga from "saga/recruiter/rootsaga";
import ProfileupdateSlice from "slice/Applicant/ProfileupdateSlice";
import UpdateJobSlice from "slice/recruiter/UpdateJobSlice";

import UserJobSlice from "slice/recruiter/UserJobSlice";
import ViewApplicationSlice from "slice/recruiter/ViewApplicationSlice";
import createjobSlice from "slice/recruiter/createjobSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    jobs : createjobSlice,
    User : UserJobSlice,
    update : UpdateJobSlice,
    applicantuser :ProfileupdateSlice,
    Viewapplication: ViewApplicationSlice
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootsaga);
export default store;