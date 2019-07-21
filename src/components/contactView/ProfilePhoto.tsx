import React from "react"
import removeIcon from "../../assets/icons/remove.svg"
import uploadIcon from "../../assets/icons/upload.svg"
import { User } from "../../types/user";
import { ViewMode } from "./types";

const ProfilePhoto = (props: any) => {
    const { user, imgType }: { user: User, imgType: ViewMode } = props
    return (
        <div className="contact-details__img">
            {
                ((imgType: ViewMode) => {
                    switch (imgType) {
                        case (ViewMode.NEW): {
                            return (<div className="img-cover img-add-new">
                                <img src={uploadIcon}></img>
                            </div>)
                        }
                        case (ViewMode.EDIT): {
                            return (
                                <React.Fragment>
                                <span className="img__mobile--edit">
                                    <img src={user.profile_photo}></img>
                                </span>
                                <span className="img__desktop">
                                    <img src={user.profile_photo}></img>
                                </span>
                            
                                <div className="img-cover img-edit">
                                    <img src={removeIcon}></img>
                                </div>
                                </React.Fragment>
                            )
                        }
                        case (ViewMode.VIEW): {
                            return (
                                <React.Fragment>
                                <span className="img__mobile">
                                    <img src={user.profile_photo}></img>
                                </span>
                                 <span className="img__desktop">
                                    <img src={user.profile_photo}></img>
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