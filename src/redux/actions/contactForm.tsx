import { User } from "../../types/user";

export const ADD_PHONE_NUMBER = "ADD_PHONE_NUMBER"
export const ADD_INITIAL_VALUES = "ADD_INITIAL_VALUES"
export const UPDATE_USERS = "UPDATE_USERS"

export const addInitialValues = (user: User) => {
    return ({
        type: ADD_INITIAL_VALUES,
        payload: { userToEdit: user }
    })
}

export const updateUsers = (newValues: User[]) => {
    return ({
        type: UPDATE_USERS,
        payload: { users: newValues }
    })

}