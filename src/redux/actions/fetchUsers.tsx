import { Dispatch } from "react";
import { FetchUsersAction } from "../types";
import { User } from "../../types/user";
export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCSESS"
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
export const FETCH_USER = "FETCH_USER"

const USERS_API = "https://randomuser.me/api/?results=22&nat=gb&inc=name,gender,picture,phone,cell,email&noinfo"
export const fetchUsers = () => {
    return (dispatch: Dispatch<FetchUsersAction>) => {
        dispatch(fetchUsersBegin())
        return fetch(USERS_API)
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                let editedData: User = editData(data)
                dispatch(fetchUsersSuccess(editedData))
                return editedData
            })
            .catch(error => dispatch(fetchUsersError(error)))
    }
}

const editData = (data: any) => {
    let editedData = data.results.map((r: any, i: number) => {
        let obj = {}
        let phones = []
        let profilePhoto
        for (let key of Object.keys(r)) {
            switch (key) {
                case ("cell"): {
                    phones.push({ name: "cell", label: "cell", number: r[key] })
                    break;
                }
                case ("phone"): {
                    phones.push({ name: "home", label: "home", number: r[key] })
                    break;
                }
                case ("name"): {
                    obj = Object.assign({}, obj, { full_name: `${r[key].first} ${r[key].last}` })
                    break;
                }
                case ("picture"): {
                    profilePhoto = r[key].large
                }
            }
            obj = Object.assign({}, obj, { id: i, phones: phones, favorite: false, profile_photo: profilePhoto, email: r.email })
        }
        return obj
    })
    return editedData
}

export const fetchUsersBegin = () => {
    return { type: FETCH_USERS_BEGIN }
}

export const fetchUsersSuccess = (users: any) =>
    ({
        type: FETCH_USERS_SUCCESS,
        payload: { users, filtered_users: users }
    })

export const fetchUsersError = (error: any) =>
    ({
        type: FETCH_USERS_ERROR,
        payload: { error }
    })

export const fetchUser = (user: any) => {
    return ({
        type: FETCH_USER,
        payload: { user: user }
    })
}

const handleErrors = (response: Response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}