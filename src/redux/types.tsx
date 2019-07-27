import { User } from "../types/user";



export interface UserListState {
    users: Array<User>
    loading: boolean
    error: Error | null
}

export interface UsersAction {
    type: string
    payload?: {
        users?: Array<User>,
        error?: Error
        filtered_users?: Array<User>,
        user?: User,
        page_users?: Array<User>
    }
}
