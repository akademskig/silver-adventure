import { User } from "../../redux/users/types";
import React from "react"
import removeIcon from "../../assets/icons/remove.svg"

const ProfilePhoto = (props: any) => {
    const { user, imgType }: { user: User, imgType: ImgType } = props
    return (
        <div className="contact-details__img">
            {imgType !== "edit" && <span className="img__mobile">
                <img src={user.profile_photo}></img>
            </span>}

            <span className="img__desktop">
                <img src={user.profile_photo}></img>
            </span>
            {imgType == "edit" && <span className="img__mobile--edit">
                <img src={user.profile_photo}></img>
            </span>}

            {
                ((imgType: ImgType) => {
                    switch (imgType) {
                        case (ImgType.ADD_NEW): {
                            return (<div className="img-cover img-add-new"></div>)
                        }
                        case (ImgType.EDIT): {
                            return (<div className="img-cover img-edit">
                                <img src={removeIcon}></img>
                            </div>)
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