import {all} from 'redux-saga/effects'
import watchcreatejob, { watchgetJob } from './recruiter/createjob';
import watchUserjob, { watchgetUserData } from './recruiter/UserSaga';




function* rootSaga(){
    return yield all([watchcreatejob(),watchUserjob(),watchgetUserData(),watchgetJob()])
}
export default  rootSaga;