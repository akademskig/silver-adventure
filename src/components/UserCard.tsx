import React from "react";
import { UserListState } from "../redux/users/types";
import { capitalize } from "../utils"
import icoHearthEmpty from "../assets/icons/icon-hearth-empty.svg"
import icoEdit from "../assets/icons/icon-edit.svg"
import icoDelete from "../assets/icons/icon-delete.svg"
class UserCard extends React.Component<any, UserListState, any>{

    render() {
        const { user } = this.props
        return (

            <div className="card">
                <div className="card__icons">
                    <span>
                    <img src={icoHearthEmpty}></img>

                    </span>
                    <span className="icons__right">
                        <img src={icoEdit}></img>
                        <img src={icoDelete}></img>
                    </span>
                </div>
                <div className="card__img">
                    <img src={user.picture.thumbnail} alt="profile photo"></img>
                </div>
                <div className="card__name">
                    <p>{capitalize(user.name.first)} {capitalize(user.name.last)}</p>
                </div>

            </div>
        )
    }
}

export default UserCard