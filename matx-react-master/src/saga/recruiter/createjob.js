
import {  call, put, takeEvery} from "redux-saga/effects"
import createJobAPI, {  Getapplicant, getJobData, getJobDataSearch, getJobDataSearchAdvanced } from "service/recruiter/recruiterjob";
import { SucgetUserRequest } from "slice/recruiter/UserJobSlice";
import { createJobSuc, createJobFail, createJobrequest, SucgetJobRequest, failgetJobRequest, getJobrequest, searchsucGetJobRequest, searchFailGetJobRequest, searchgetJobRequest, searchFailGetJobRequestAdvanced, searchgetJobRequestAdvanced, searchsucGetJobRequestAdvanced, viewfailgetJobrequest, viewgetJobrequest,} from "slice/recruiter/createjobSlice";

function* createjob (action)
{
 try{
  let mydat =  yield call(createJobAPI, action.payload);
  yield put(createJobSuc(mydat));

}
catch(error){
     yield put(createJobFail(error));
 }
}
export default function* watchcreatejob ()
{
  return yield takeEvery(createJobrequest, createjob);
}



function* getJob (action)
{
 try{
  let mydat =  yield call(getJobData, action.payload);
  yield put( SucgetJobRequest(mydat));
}
catch(error){
     yield put(failgetJobRequest(error));
 }
} 
export  function* watchgetJob()
{
  return yield takeEvery(getJobrequest, getJob);
}

function* searchgetjob(action) {
  try {
    let mydata = yield call(getJobDataSearch, action.payload);
    yield put(searchsucGetJobRequest(mydata));
   
  } catch (error) {
    yield put(searchFailGetJobRequest(error));
  }
}

export function* watchsearchgetjob() {
  return yield takeEvery(searchgetJobRequest, searchgetjob);
}


// Advance Search Job
function* searchgetjobAdvanced(action) {
  try {
    let mydata = yield call(getJobDataSearchAdvanced, action.payload);
    yield put(searchsucGetJobRequestAdvanced(mydata));
   
  } catch (error) {
    yield put(searchFailGetJobRequestAdvanced(error));
  }
}

export function* watchsearchgetjobAdvanced() {
  return yield takeEvery(searchgetJobRequestAdvanced, searchgetjobAdvanced);
}


//ViewApplicant

function* viewgetJobs (action)

{
  try{
    let mydat = yield call(Getapplicant, action.payload)
  yield put(SucgetUserRequest(mydat))
}
catch(error){
     yield put(viewfailgetJobrequest(error))
 }
}
export function* watchgetviewjobs ()
{
  return yield takeEvery(viewgetJobrequest, viewgetJobs )
}
// view Application end =---==------->
