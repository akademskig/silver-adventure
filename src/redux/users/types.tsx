
export type User = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone_numbers: Array<string>,
    profile_photo: string
}

export interface UserListState {
    users: Array<User>
    loading: boolean
    error: Error | null
}

export interface FetchUsersAction {
    type: string
    payload?: {
        users?: Array<User>,
        error?: Error
        filtered_users?: Array<User>,
        user?: User
    }
}
