
import React from "react"
import { Link } from "react-router-dom";
const Navigation: React.FC = () => {

    return (
        <nav>
            <ul>
                <Link to="all_contacts">
                    <li>
                        All contacts
                    </li>
                </Link>
                <Link to="my_favourites">
                    <li>
                        My favorites
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation