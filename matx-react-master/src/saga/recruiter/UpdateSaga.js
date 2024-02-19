import { toast } from "react-toastify";
import {  call, put, takeEvery} from "redux-saga/effects"
import { UpdateAPI, deleteJobData } from "service/recruiter/recruiterjob";

import { SucgetUpdateRequest, UpdateJobFail, UpdateJobSuc, UpdateRequest, deleteJobFailure, deleteJobRequest, deleteJobSuccess, failgetupdateRequest, getupdateRequest } from "slice/recruiter/UpdateJobSlice";
import { getJobrequest } from "slice/recruiter/createjobSlice";


function* updatejob (action)
{
 try{
  let mydat =  yield call(UpdateAPI, action.payload);
  yield put(UpdateJobSuc(mydat));
}
catch(error){
     yield put(UpdateJobFail(error));
 }
}
export default function* watchupdatejob()
{
  return yield takeEvery(UpdateRequest, updatejob);
}

function* getupdateData (action)
{
 try{
  let mydat =  yield call(updatejob, action.payload);
  yield put( SucgetUpdateRequest(mydat));
}
catch(error){
     yield put(failgetupdateRequest(error));
 }
} 
export  function* watchgetupdateJob()
{
  return yield takeEvery(getupdateRequest, getupdateData);
}

// Delete Job
function* deleteJob(action) {
  try {
 
  let mydata3 =  yield call(deleteJobData, action.payload);  


    yield put(deleteJobSuccess(mydata3));

 toast.success("Job Delete")

     yield put(getJobrequest());
  } catch (error) {  
    yield put(deleteJobFailure(error));
  }
}
export function* watchDeleteJob() {
 return yield takeEvery(deleteJobRequest, deleteJob);
}
