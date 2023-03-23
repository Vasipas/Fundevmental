import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

const getPersonsStore = (state: RootState) => state.persons;

export const getPersonsState = createSelector([getPersonsStore], (persons) => persons);

export const getPersons = createSelector([getPersonsStore], (persons) => persons.persons);

export const getOnePerson = createSelector([getPersonsStore], (persons) => persons.person);

export const getNewRowMode = createSelector([getPersonsStore], (persons) => persons.addNewRow);
