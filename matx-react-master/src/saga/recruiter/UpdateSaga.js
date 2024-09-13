import { toast } from "react-toastify";
import {  call, put, takeEvery} from "redux-saga/effects"
import {  deleteJobData, getJobUpdateData, putJobUpdateData } from "service/recruiter/recruiterjob";

import { FailGetUpdateRequest, FailPutUpdateRequest, GetUpdateRequest, PutUpdateRequest, SucGetUpdateRequest, SucPutUpdateRequest, SucgetUpdateRequest, UpdateJobFail, UpdateJobSuc, UpdateRequest, deleteJobFailure, deleteJobRequest, deleteJobSuccess, failgetupdateRequest, getupdateRequest } from "slice/recruiter/UpdateJobSlice";
import { getJobrequest } from "slice/recruiter/createjobSlice";

function* getUpdate(action) {
  try {
    let mydata = yield call(getJobUpdateData, action.payload);
    yield put(SucGetUpdateRequest(mydata));
  } catch (error) {
    yield put(FailGetUpdateRequest(error));
  }
}

export function* watchgetUpdate() {
  return yield takeEvery(GetUpdateRequest, getUpdate);
}


function* putUpdate(action) {
  try {
    let mydata = yield call(putJobUpdateData, action.payload);
    yield put(SucPutUpdateRequest(mydata));
    toast.success("Job Updated Successfully.");

    yield put(getJobrequest());
  } catch (error) {
    yield put(FailPutUpdateRequest(error));
  }
}

export function* watchputUpdate() {
 return yield takeEvery(PutUpdateRequest, putUpdate);
}
// Delete Job
function* deleteJob(action) {
  try {
 
  let mydataa =  yield call(deleteJobData, action.payload);  


    yield put(deleteJobSuccess(mydataa));

 toast.success("Job Delete")

     yield put(getJobrequest());
  } catch (error) {  
    yield put(deleteJobFailure(error));
  }
}
export function* watchDeleteJob() {
 return yield takeEvery(deleteJobRequest, deleteJob);
}
