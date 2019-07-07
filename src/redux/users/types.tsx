import { string } from "prop-types";

export type User = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phones: Array<PhoneItem>,
    profile_photo: string
}

interface PhoneItem {
    label: string,
    name: string,
    number: string
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
