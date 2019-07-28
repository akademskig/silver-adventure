import React from "react";
import { UserListState } from "../redux/types";
import { capitalize } from "../utils"
import noUserImg from "../assets/imgs/empty-user.jpeg"
import Img from "react-image"
import { Link } from "react-router-dom";
import IconDelete from "./IconDelete";
import IconHearth from "./IconHearth";
import IconEdit from "./IconEdit";

class UserCard extends React.Component<any, UserListState, any>{

    render() {
        const { user } = this.props
        return (
            <div className="card">
                <div className="card__icons">
                    <span>
                        <IconHearth user={user}></IconHearth>
                    </span>
                    <span className="icons__right">
                        <IconEdit user={user}/>
                        <IconDelete user={user}/>
                    </span>
                </div>
                <Link to={`/contacts/view/${user.id}`}>
                    <div className="card__img">
                        <Img src={[user.profile_photo, noUserImg]} alt="profile photo"></Img>
                    </div>
                    <div className="card__name">
                        <p>{capitalize(user.full_name)} </p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default UserCard