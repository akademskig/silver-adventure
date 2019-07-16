import { User } from "../types/user";

export const capitalize = (string: string) => {
    return string.split("").map((c: string, i: number) =>
        i == 0 ? c.toLocaleUpperCase() : c
    ).join("")
}
export const filterUsers = (users: Array<User>, value: any) => {
    if (value.match(/[!#$%^&*(),?":{}|<>+]/g)) {
        return users
    }
    const filteredUsers = users.filter((u: User) => {
        for (let key of Object.keys(u)) {
            switch (key) {
                case ("phones"): {
                    for (let phone of Object.values(u[key])) {
                        for (let phoneItemValue of Object.values(phone)) {
                            if (phoneItemValue.toLocaleLowerCase().match(value.toLocaleLowerCase()))
                                return true
                        }
                    }
                    break
                }
                case ("profile_photo"): {
                    break
                }
                default: {
                    //@ts-ignore
                    if (typeof u[key] === "string" && u[key].toLocaleLowerCase().match(value.toLocaleLowerCase()))
                        return true
                }
            }
        }
        return false
    })
    return filteredUsers
}