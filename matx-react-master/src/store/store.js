import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import rootsaga from "saga/recruiter/rootsaga";
import UpdateJobSlice from "slice/recruiter/UpdateJobSlice";

import UserJobSlice from "slice/recruiter/UserJobSlice";
import createjobSlice from "slice/recruiter/createjobSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    jobs : createjobSlice,
    User : UserJobSlice,
    Update : UpdateJobSlice
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootsaga);
export default store;