import { User } from "../../types/user";
export const UPDATE_USERS = "UPDATE_USERS"
export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCSESS"
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
export const FETCH_USER = "FETCH_USER"
export const SEARCH_USERS = "SEARCH_USERS"
export const DELETE_USER = "DELETE_USER"
export const FILTER_BY_FAVORITE = "FILTER_BY_FAVORITE"


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

export const deleteUser = (user: any) => {
    return ({
        type: DELETE_USER,
        payload: { user: user }
    })
}

export const searchUsers = (users: any) => {
    return ({
        type: SEARCH_USERS,
        payload: { filtered_users: users }
    })
}

export const updateUsers = (newValues: User[]) => {
    return ({
        type: UPDATE_USERS,
        payload: { users: newValues }
    })
}

export const filterByFavorite = (newValues: User[]) => {
    return ({
        type: FILTER_BY_FAVORITE,
        payload: { filtered_by_favorite: newValues }
    })
}
