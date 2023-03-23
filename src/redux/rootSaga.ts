import { spawn } from "@redux-saga/core/effects";
// eslint-disable-next-line import/no-cycle
import { personsSaga } from "./reducers/persons/saga";

export default function* rootSaga() {
	yield spawn(personsSaga);
}