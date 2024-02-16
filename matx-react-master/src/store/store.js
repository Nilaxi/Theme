import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootsaga from "saga/rootsaga";

import UserJobSlice from "slice/recruiter/UserJobSlice";
import createjobSlice from "slice/recruiter/createjobSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    jobs : createjobSlice,
    User : UserJobSlice
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootsaga);
export default store;