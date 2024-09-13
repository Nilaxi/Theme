import {all} from 'redux-saga/effects'
import watchcreatejob, { watchgetJob, watchgetviewjobs, watchsearchgetjob, watchsearchgetjobAdvanced } from './createjob';
import watchUserjob, { watchgetUserData } from './UserSaga';
import { watchDeleteJob, watchgetUpdate, watchputUpdate } from './UpdateSaga';
import { watchgetapplicantuser, watchputapplicantuser } from './ApplicantSaga';





function* rootSaga(){
    return yield all([watchcreatejob(),watchUserjob(),watchgetUserData(),watchgetJob(),watchDeleteJob(),watchgetUpdate(),watchputUpdate(),watchsearchgetjob(),watchsearchgetjobAdvanced(),watchgetapplicantuser(),watchputapplicantuser(),watchgetviewjobs()])
}
export default  rootSaga;