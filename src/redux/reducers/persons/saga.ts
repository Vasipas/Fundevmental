/* eslint-disable import/no-cycle */
import { getPersons } from '@/redux/reducers/persons/selectors';
/* eslint-disable @typescript-eslint/no-explicit-any */
import {call, debounce, put, select, takeEvery } from 'redux-saga/effects'
import { isAxiosError } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { PersonsApi } from '../../../services/api/persons';
import { addNewRow, addPersonRequest, 
    addPersonSuccess, 
    deletePersonRequest, 
    deletePersonSuccess, 
    getAllPersonsRequest, 
    getPersonsSuccess, 
    updatePersonRequest, 
    updatePersonSuccess } from "./reducer";
import { IPerson } from './types';

function* getAllPersonsWorker () {
    try {
        const response: Array<IPerson> = yield call(PersonsApi.getAllPersons); 
        yield put(getPersonsSuccess(response));
    }
    catch(error) {
        if (isAxiosError(error)) {
            console.error(error)
            }
    }
}

function* addPersonWorker ({ payload }: PayloadAction<IPerson>) {
    const {id, ...newItem} = payload;
    try {
        const persons: Array<IPerson> = yield select(getPersons);
        const response: IPerson = yield call(PersonsApi.addPerson, newItem); 
        yield put(addPersonSuccess([...persons, response]));
        yield put(addNewRow())
    }
    catch(error) {
        if (isAxiosError(error)) {
            console.error(error)
            }
    }
}

function* updatePersonWorker ({payload}: PayloadAction<IPerson>) {
    try {
        const response: IPerson = yield call(PersonsApi.updatePerson, payload); 
        yield put(updatePersonSuccess(response));
        yield put(getAllPersonsRequest());
    }
    catch(error) {
        if (isAxiosError(error)) {
            console.error(error)
            }
    }
}

function* deletePersonWorker ({payload}: PayloadAction<string>) {
    try {
        const response: IPerson = yield call(PersonsApi.deletePerson, {id: payload}); 
        yield put(deletePersonSuccess(response));
        yield put(getAllPersonsRequest());
    }
    catch(error) {
        if (isAxiosError(error)) {
            console.error(error)
            }
    }
}

export function* personsSaga() {
    yield takeEvery(getAllPersonsRequest.type, getAllPersonsWorker);
    yield takeEvery(addPersonRequest.type, addPersonWorker);
    yield debounce(2000, deletePersonRequest.type, deletePersonWorker);
    yield takeEvery(updatePersonRequest.type, updatePersonWorker);
}