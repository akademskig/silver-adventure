import React from "react";
import { UserListState } from "../redux/types";
import { capitalize } from "../utils"
import icoHearthEmpty from "../assets/icons/icon-hearth-empty.svg"
import icoEdit from "../assets/icons/icon-edit.svg"
import icoDelete from "../assets/icons/icon-delete.svg"
import noUserImg from "../assets/imgs/empty-user.jpeg"
import Img from "react-image"
import { Link } from "react-router-dom";

class UserCard extends React.Component<any, UserListState, any>{

    render() {
        const { user } = this.props
        return (
            <Link to={`/contacts/view/${user.id}`}>
                <div className="card">
                    <div className="card__icons">
                        <span>
                            <img src={icoHearthEmpty}></img>
                        </span>
                        <span className="icons__right">
                            <Link to={`/contacts/edit/${user.id}`}>
                                <img src={icoEdit}></img>
                            </Link>
                            <img src={icoDelete}></img>
                        </span>
                    </div>
                    <div className="card__img">
                        <Img src={[user.profile_photo, noUserImg]} alt="profile photo"></Img>
                    </div>
                    <div className="card__name">
                        <p>{capitalize(user.full_name)} </p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default UserCard