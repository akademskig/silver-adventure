export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCSESS"
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
export const FETCH_USER = "FETCH_USER"



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

