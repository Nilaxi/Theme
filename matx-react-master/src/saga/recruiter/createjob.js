
import {  call, put, takeEvery} from "redux-saga/effects"
import createJobAPI, {  getJobData, getJobDataSearch } from "service/recruiter/recruiterjob";
import { createJobSuc, createJobFail, createJobrequest, SucgetJobRequest, failgetJobRequest, getJobrequest, searchsucGetJobRequest, searchFailGetJobRequest, searchgetJobRequest, } from "slice/recruiter/createjobSlice";

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