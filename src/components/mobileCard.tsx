import React from "react";
import { UserListState } from "../redux/types";
import { capitalize } from "../utils"
import icoEdit from "../assets/icons/icon-edit.svg"
import noUserImg from "../assets/imgs/empty-user.jpeg"
import Img from "react-image"
import { Link } from "react-router-dom";
import IconDelete from "./IconDelete";
import IconHearth from "./IconHearth";

class MobileCard extends React.Component<any, UserListState, any>{

    render() {
        const { user } = this.props
        return (
            <div className="mobile-card card">
                <Link className="mobile-card__left"to={`/contacts/view/${user.id}`}>
                    <div className="card__img">
                        <Img src={[user.profile_photo, noUserImg]} alt="profile photo"></Img>
                    </div>
                    <div className="card__name">
                        <p>{capitalize(user.full_name)} </p>
                    </div>
                </Link>

                <span className="icons__right">
                    <span>
                        <IconHearth user={user}></IconHearth>
                    </span>
                    <Link to={`/contacts/edit/${user.id}`}>
                        <img src={icoEdit}></img>
                    </Link>
                    <IconDelete id={user.id}></IconDelete>
                </span>

            </div>
        )
    }
}

export default MobileCard