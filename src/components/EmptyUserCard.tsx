import React from "react";
import { UserListState } from "../redux/types";
import { capitalize } from "../utils"
import icoHearthEmpty from "../assets/icons/icon-hearth-empty.svg"
import icoEdit from "../assets/icons/icon-edit.svg"
import { Link } from "react-router-dom";
import addIcon from "../assets/icons/add-opaque.svg"
class EmptyUserCard extends React.Component<any, UserListState, any>{

    render() {
        return (
            <Link to={`/contacts/new`}>
                <div className="empty-card card">
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