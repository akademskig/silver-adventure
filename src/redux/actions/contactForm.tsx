import { User } from "../../types/user";

export const ADD_PHONE_NUMBER = "ADD_PHONE_NUMBER"
export const ADD_INITIAL_VALUES = "ADD_INITIAL_VALUES"

export const addInitialValues = (user: User | null) => {
    return ({
        type: ADD_INITIAL_VALUES,
        payload: { userToEdit: user }
    })
}

