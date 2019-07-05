
import React from "react"
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';
const Navigation: React.FC = (props: any) => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <NavLink to="all_contacts"  >
                    <li className={props.history.location.pathname === "/all_contacts" ? "nav-item item-1 active" : "nav-item item-1"}>
                        All contacts
                        </li>
                </NavLink>
                <NavLink to="my_favorites">
                    <li className={props.history.location.pathname === "/my_favorites" ? "nav-item item-2 active" : "nav-item item-2"}>
                        My favorites
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default withRouter(Navigation)

