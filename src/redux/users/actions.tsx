import { Dispatch } from "react";
import { FetchUsersAction } from "./types";
export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCSESS"
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
const USERS_API = "https://randomuser.me/api/?results=22"
export const fetchUsers = () => {
    return (dispatch: Dispatch<FetchUsersAction>) => {
        dispatch(fetchUsersBegin())
        return fetch(USERS_API)
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                let editedData = data.results.map((r: any) => Object.assign({}, r, {
                    phone_numbers: [{ home: r.phone }, { cell: r.cell }]
                }))
                dispatch(fetchUsersSuccess(editedData))
                return data
            })
            .catch(error => dispatch(fetchUsersError(error)))
    }
}

export const fetchUsersBegin = () => {
    return { type: FETCH_USERS_BEGIN }
}

export const fetchUsersSuccess = (users: any) =>
    ({
        type: FETCH_USERS_SUCCESS,
        payload: { users }
    })


export const fetchUsersError = (error: any) =>
    ({
        type: FETCH_USERS_ERROR,
        payload: { error }
    })

const handleErrors = (response: Response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}