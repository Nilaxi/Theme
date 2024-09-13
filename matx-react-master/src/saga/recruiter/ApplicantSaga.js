
import { call, put, takeEvery } from "redux-saga/effects"
import { Getapplicant, applicantuserputData, getJobUpdateData } from "service/recruiter/recruiterjob"
import { applicantgetuserfaile, applicantgetuserrequest, applicantgetusersuccess, putapplicantuserfaile, putapplicantuserrequest, putapplicantusersuccess } from "slice/Applicant/ProfileupdateSlice"
import { viewfailgetJobrequest, viewgetJobrequest, viewsucgetJobrequest } from "slice/recruiter/createjobSlice"




function* getapplicantuser (action)

{
  try{
    let mydat = yield call(getJobUpdateData, action.payload)
  yield  put(applicantgetusersuccess(mydat))
}
catch(error){
     yield  put(applicantgetuserfaile(error))
 }
}
export function* watchgetapplicantuser ()
{
  return yield takeEvery(applicantgetuserrequest, getapplicantuser)
}
function* putapplicantuser (action)

{
  try{
    let mydat = yield call(applicantuserputData, action.payload)
  yield  put(putapplicantusersuccess(mydat))
}
catch(error){
     yield  put(putapplicantuserfaile(error))
 }
}
export function* watchputapplicantuser ()
{
  return yield takeEvery(putapplicantuserrequest, putapplicantuser)
}
// view Application start =---==------->
function* viewgetJobs (action)

{
  try{
    let mydat = yield call(Getapplicant, action.payload)
  yield put(viewsucgetJobrequest(mydat))
}
catch(error){
     yield put(viewfailgetJobrequest(error))
 }
}
export function* watchgetviwjobs ()
{
  return yield takeEvery(viewgetJobrequest, viewgetJobs )
}

// view Application end =---==------->