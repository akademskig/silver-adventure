import React from "react";
import { UserListState } from "../redux/types";
import { Link } from "react-router-dom";
import addIcon from "../assets/icons/add-opaque.svg"
class EmptyUserCard extends React.Component<any, UserListState, any>{

    render() {
        const cardClass = this.props.mode === "mobile" ? "empty-card-mobile card mobile-card" : "empty-card card"
        return (
            <Link to={`/contacts/new`}>
                <div className={cardClass}>
                    <div className="empty-card__content">
                        <img src={addIcon} alt="Add icon"></img>
                      <p>Add new</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default EmptyUserCard