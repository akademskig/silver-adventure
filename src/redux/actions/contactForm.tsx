import { User } from "../../types/user";

export const ADD_PHONE_NUMBER = "ADD_PHONE_NUMBER"
export const ADD_INITIAL_VALUES = "ADD_INITIAL_VALUES"

export const addPhoneNumber = (numbers:Array<string>) => {
    return ({
        type: ADD_PHONE_NUMBER,
        payload: { numbers: numbers }
    })
}

export const addInitialValues = (user:User) => {
    return ({
        type: ADD_INITIAL_VALUES,
        payload: {userToEdit: user}
    })
}