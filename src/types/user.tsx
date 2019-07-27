
import lodash from "lodash"
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
    favorite = false
    private _genders = ['men', 'women', 'lego']
    constructor(user?: any) {
        if (!user)
            return
        if (user.id)
            this.id = user.id
        if (user.full_name)
            this.full_name = user.full_name
        if (user.email)
            this.email = user.email
        if (user.phones)
            this.phones = user.phones
        if (user.profile_photo)
            this.profile_photo = user.profile_photo
        if (user.favorite)
            this.favorite = user.favorite
        else
            this.profile_photo = `https://randomuser.me/api/portraits/${lodash.sample(this._genders)}/${this.id}.jpg`
    }
}
