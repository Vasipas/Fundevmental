import { IPerson } from '@/redux/reducers/persons/types';
/* eslint-disable import/extensions */
import { endpoints } from "../endpoints";
import { http } from "../http";

export const PersonsApi = {
    getAllPersons: () => http.get(endpoints.PERSONS.GET_ALL_PERSONS).then(response => response.data),
    addPerson: (payload: Omit<IPerson, 'id'>) => http.post(endpoints.PERSONS.ADD_PERSON, payload).then(response => response.data),
    updatePerson: (payload: IPerson) => http.put(endpoints.PERSONS.UPDATE_PERSON(String(payload.id)), payload).then(response => response.data),
    deletePerson: (payload: {id: string}) => http.delete(endpoints.PERSONS.DELETE_PERSON(payload.id)).then(response => response.data),

}