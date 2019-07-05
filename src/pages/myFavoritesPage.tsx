import React from "react"
import UsersList from "../containers/UsersList";

export default class myFavoritesPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <UsersList></UsersList>
            </React.Fragment>
        )
    }
}