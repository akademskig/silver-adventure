export class User {
    id: string | null = null
    full_name = ""
    email = ""
    phones = [{
        label: "",
        name: "",
        number: ""
    }]
    profile_photo = ""

    constructor(user?: any) {
        if (!user)
            return
        if (user.id)
            this.id = user.id
        else
            this.id = Math.random().toString(36).substr(2, 16);
        if (user.full_name)
            this.full_name = user.full_name
        if (user.email)
            this.email = user.email
        if (user.phones)
            this.phones = user.phones
        if (user.profile_photo)
            this.profile_photo = user.profile_photo
    }
}
