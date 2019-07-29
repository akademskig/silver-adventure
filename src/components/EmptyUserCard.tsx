import React from "react";
import { UserListState } from "../redux/types";
import { Link, withRouter } from "react-router-dom";
import addIcon from "../assets/icons/add-opaque.svg"
import { EmptyUserCardMode } from "../containers/types";
class EmptyUserCard extends React.Component<any, UserListState, any>{

    render() {
        const { mode } = this.props
        const cardClass = mode === EmptyUserCardMode.MOBILE ? "empty-card-mobile card mobile-card" : "empty-card card"
        return (
            <Link to={`/contacts/new`} >
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

export default withRouter(EmptyUserCard)