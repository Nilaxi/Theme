import {all} from 'redux-saga/effects'
import watchcreatejob, { watchgetJob, watchsearchgetjob } from './createjob';
import watchUserjob, { watchgetUserData } from './UserSaga';
import { watchDeleteJob, watchgetUpdate, watchputUpdate } from './UpdateSaga';





function* rootSaga(){
    return yield all([watchcreatejob(),watchUserjob(),watchgetUserData(),watchgetJob(),watchDeleteJob(),watchgetUpdate(),watchputUpdate(),watchsearchgetjob()])
}
export default  rootSaga;