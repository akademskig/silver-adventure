import { Dispatch } from "react";
import { fetchUsersBegin, fetchUsersSuccess, fetchUsersError, updateUsers } from "../redux/actions/users";
import { User } from "../types/user";
import { UsersAction } from "../redux/types";

const USERS_API = "https://randomuser.me/api/?results=22&nat=gb&inc=name,gender,picture,phone,cell,email&noinfo"

const USERS_LIST = "USERS_LIST"
const fetchUsers = () => {
    return (dispatch: Dispatch<UsersAction>) => {
        if (getUsers().length > 0) {
            return dispatch(fetchUsersSuccess(getUsers()))
        }
        dispatch(fetchUsersBegin())
        return fetch(USERS_API)
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                let editedData: User[] = editData(data)
                dispatch(fetchUsersSuccess(editedData))
                saveUsers(editedData)
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


const handleErrors = (response: Response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
const saveUsers = (users: User[]) => {
    localStorage.setItem(USERS_LIST, JSON.stringify(users))
    return (dispatch: Dispatch<any>) => {
        dispatch(updateUsers(users))
    }
}
const getUsers = () => {
    const usersList = localStorage.getItem(USERS_LIST)
    if (usersList)
        return JSON.parse(usersList)
    return []
}
const deleteUser = (id: string) => {
    const usersList = getUsers()
    const newUsersList = usersList.filter((u: User) => u.id !== id)
    return (dispatch: any) => {
        dispatch(saveUsers(newUsersList))
    }
}

const getUserById = (id: string) => {
    return getUsers().find((u: User) => u.id === id)
}
const toggleFavorite = (id: string) => {
    const user = getUserById(id)
    return (dispatch: any) => {
        dispatch(updateUser(Object.assign({}, user, { favorite: !user.favorite })))
    }
}

const updateUser = (user: User) => {
    return (dispatch: any) => {
        dispatch(saveUsers(getUsers().map((u: User) => user.id === u.id ? user : u)))
    }
}

const addNewUser = (newUser: User, favorite: boolean) => {
    const usersList = getUsers()
    const maxId = usersList.map((u: User) => u.id)
        .reduce((acc: number, curr: number) => Math.max(acc, curr), -Infinity)
    const user = new User(Object.assign({}, newUser, { id: maxId + 1, favorite }))
    const newUsersList = usersList.concat(user)
    return (dispatch: any) => {
        dispatch(saveUsers(newUsersList))
    }
}

export {
    fetchUsers,
    saveUsers,
    getUsers,
    deleteUser,
    addNewUser,
    getUserById,
    toggleFavorite
}