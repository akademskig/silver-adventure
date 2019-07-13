import { User } from "../../redux/users/types";
import React from "react"
const ProfilePhoto = (props: any) => {
    const { user, imgType }: { user: User, imgType: ImgType } = props
    return (
        <div className="contact-details__img">
            <img src={user.profile_photo}></img>
            {
                ((imgType: ImgType) => {
                    switch (imgType) {
                        case (ImgType.ADD_NEW): {
                            return (<div className="img-cover img-add-new"></div>)
                        }
                        case (ImgType.EDIT): {
                            return (<div className="img-cover img-edit"></div>)
                        }
                        default: return null
                    }
                })(imgType)

            }
        </div>)

}

enum ImgType {
    WIEW = "wiew",
    EDIT = "edit",
    ADD_NEW = "addNew"
}

export default ProfilePhoto