
import React from "react"
import { capitalize } from "../../utils";
import { User } from "../../redux/users/types";

const NameBarMobile = (user: User) => {
    return (
        <div className="contact-name--mobile">
            <span className="contact-name__img">
                <img src={user.profile_photo}></img>
            </span>
            <span className="contact-name__left">
                <h2>{capitalize(user.first_name)} {capitalize(user.last_name)}</h2>
            </span>

        </div>
    )
}

export default NameBarMobile