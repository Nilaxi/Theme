// Example import in UserSaga.js
import { put, call, takeEvery } from "redux-saga/effects";
import { UserAPI } from "service/recruiter/recruiterjob";
import { SucgetUserRequest, UserJobFail, UserJobSuc, UserRequest, failUserRequest, getUserRequest, getUserrequest } from "slice/recruiter/UserJobSlice";




function* getUser (action)
{
 try{
  let mydat =  yield call(UserAPI, action.payload);
  yield put( UserJobSuc(mydat));
}
catch(error){
     yield put(UserJobFail(error));
 }
}  
export default function* watchgetUser()
{
  return yield takeEvery(UserRequest, getUser);
}



function* getUserData (action)
{
 try{
  let mydat =  yield call(getUser, action.payload);
  yield put( SucgetUserRequest(mydat));
}
catch(error){
    return  yield put ( failUserRequest(error));
 }
}
   export function* watchgetUserData()
{
  return yield takeEvery(getUserRequest, getUserData);
}