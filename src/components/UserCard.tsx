import React from "react";
import { UserListState } from "../redux/types";
import { capitalize } from "../utils"
import icoHearthEmpty from "../assets/icons/icon-hearth-empty.svg"
import icoEdit from "../assets/icons/icon-edit.svg"
import icoDelete from "../assets/icons/icon-delete.svg"
import { Link } from "react-router-dom";

class UserCard extends React.Component<any, UserListState, any>{

    render() {
        const { user } = this.props
        return (
            <Link to={`/contacts/${user.id}`}>
                <div className="card">
                    <div className="card__icons">
                        <span>
                            <img src={icoHearthEmpty}></img>
                        </span>
                        <span className="icons__right">
                            <Link to={`/contacts/${user.id}/edit`}>
                                <img src={icoEdit}></img>
                            </Link>
                            <img src={icoDelete}></img>
                        </span>
                    </div>
                    <div className="card__img">
                        <img src={user.profile_photo} alt="profile photo"></img>
                    </div>
                    <div className="card__name">
                        <p>{capitalize(user.first_name)} {capitalize(user.last_name)}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default UserCard