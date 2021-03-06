import React from "react"
import removeIcon from "../assets/icons/remove.svg"
import uploadIcon from "../assets/icons/upload.svg"
import noUserImg from "../assets/imgs/empty-user.jpeg"
import { User } from "../types/user";
import { ViewMode } from "./types";
import Img from "react-image"

const ProfilePhoto = (props: any) => {
    const { user, imgType }: { user: User, imgType: ViewMode } = props
    return (
        <div className="contact-details__img">
            {
                ((imgType: ViewMode) => {
                    switch (imgType) {
                        case (ViewMode.NEW): {
                            return (<div className="img-cover img-add-new">
                                <img src={uploadIcon} alt="Upload icon"></img>
                            </div>)
                        }
                        case (ViewMode.EDIT): {
                            return (
                                <React.Fragment>
                                    <span className="img__mobile--edit">
                                        <Img src={[user.profile_photo, noUserImg]} alt="profile photo"></Img>
                                    </span>
                                    <span className="img__desktop">
                                        <Img src={[user.profile_photo, noUserImg]} alt="profile photo"></Img>
                                    </span>

                                    <div className="img-cover img-edit">
                                        <img src={removeIcon} alt="Remove icon"></img>
                                    </div>
                                </React.Fragment>
                            )
                        }
                        case (ViewMode.VIEW): {
                            return (
                                <React.Fragment>
                                    <span className="img__mobile">
                                        <Img src={[user.profile_photo, noUserImg]} alt="profile photo"></Img>
                                    </span>
                                    <span className="img__desktop">
                                        <Img src={[user.profile_photo, noUserImg]} alt="profile photo"></Img>
                                    </span>
                                </React.Fragment>
                            )
                        }
                        default: return null
                    }
                })(imgType)
            }
        </div>)
}


export default ProfilePhoto