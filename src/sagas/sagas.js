import  {takeEvery} from 'redux-saga/effects';

import Api from "../servis/servis";
import {GET_DETAILS_LOADING, putData, putError} from "../store/users/actions";
import { call, put } from "redux-saga/effects";

function featchData(data) {
    return Api.getDetail(data.server, data.name, data.login)
        .then(data => data)
        .catch(err => err)
}

function* workerLoadData(action){
    try {
        const data = yield call(featchData,action.payload);
        yield put(putData(data) )
    }
    catch(error) {
        yield put(putError(error))
    }

}

export function* watchLoadData( ) {
   yield takeEvery( GET_DETAILS_LOADING, workerLoadData)
}