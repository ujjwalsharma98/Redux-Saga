
import {takeEvery, put } from 'redux-saga/effects';

function* ageUpAsync(){
    yield put ({ type: 'AGE_UP_ASYNC', value: 1 });
}

export function* watchAge(){
    yield takeEvery ("AGE_UP", ageUpAsync);
}