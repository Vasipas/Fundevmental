export const endpoints = {
    PERSONS: {
        GET_ALL_PERSONS: '/users',
        ADD_PERSON: '/users',
        UPDATE_PERSON: (id: string) => `/users/${id}`,
        DELETE_PERSON: (id: string) => `/users/${id}`,
    }
}