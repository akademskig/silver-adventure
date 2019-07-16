export const SEARCH_USERS = "SEARCH_USERS"


export const searchUsers = (users: any) => {
    return ({
        type: SEARCH_USERS,
        payload: { filtered_users: users }
    })
}