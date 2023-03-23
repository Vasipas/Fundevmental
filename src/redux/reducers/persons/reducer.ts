import { PayloadAction , createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
import { IPayloadId, IPerson, IPersonsState } from "./types";

const initialState: IPersonsState = {
  persons: null,
  person: null,
  addNewRow: false,
}

const persons = createSlice({
	name: '@@products',
	initialState,
	reducers: {
		getAllPersonsRequest: (state) => {},
		getPersonsSuccess: (state, { payload }: PayloadAction<Array<IPerson>>) => {
			const personsState = state;
			personsState.persons = payload;

		},
		addPersonRequest: (state, action: PayloadAction<IPerson>) => {},
		addPersonSuccess: (state, { payload }: PayloadAction<Array<IPerson>>) => {
			const addPersonState = state;
			addPersonState.persons = payload;
		},
		updatePersonRequest: (state, action: PayloadAction<string>) => {},
		updatePersonSuccess: (state, { payload }: PayloadAction<IPerson>) => {
			const updateState = state;
			updateState.person = null;
		},
		deletePersonRequest: (state, action: PayloadAction<string>) => {},
		deletePersonSuccess: (state, { payload }: PayloadAction<IPerson>) => {
		},
		setEditPerson: (state, { payload }: PayloadAction<IPerson | null>) => {
			const editPersonState = state;
			editPersonState.person = payload;
		},
		addNewRow: (state) => {
			const newRowState = state;
			newRowState.addNewRow = !newRowState.addNewRow;
		}
	}
  })


 export default persons.reducer;
 export const {	
	getAllPersonsRequest, 
	getPersonsSuccess, 
	addPersonRequest, 
	addPersonSuccess, 
	updatePersonRequest, 
	updatePersonSuccess, 
	deletePersonRequest, 
	deletePersonSuccess,
	setEditPerson,
	addNewRow
} = persons.actions;