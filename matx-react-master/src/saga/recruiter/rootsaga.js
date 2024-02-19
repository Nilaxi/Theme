import {all} from 'redux-saga/effects'
import watchcreatejob, { watchgetJob } from './createjob';
import watchUserjob, { watchgetUserData } from './UserSaga';
import watchupdatejob, { watchDeleteJob, watchgetupdateJob } from './UpdateSaga';





function* rootSaga(){
    return yield all([watchcreatejob(),watchUserjob(),watchgetUserData(),watchgetJob(),watchupdatejob(), watchgetupdateJob(),watchDeleteJob()])
}
export default  rootSaga;