export interface IPersonsState {
    persons: null | Array<IPerson>,
    person: null | IPerson | Omit<IPerson, "id">,
    addNewRow: boolean;
}

export interface IPerson {
    id: number,
    name: string,
    age: number,
    about: string,
}

export interface IPayloadId {
	id: string
}