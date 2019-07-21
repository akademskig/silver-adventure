
import React from "react"
import { capitalize } from "../../utils";
import ProfilePhoto from "./ProfilePhoto";

const NameBarMobile = (props: any) => {
    const { user, imgType } = props

    return (
        <div className="contact-name--mobile">
            <ProfilePhoto visible user={user} imgType={imgType} ></ProfilePhoto>
            <span className="contact-name__left">
                <h2>{capitalize(user.full_name)} </h2>
            </span>

        </div>
    )
}

export default NameBarMobile