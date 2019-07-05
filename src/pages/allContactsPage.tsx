import React from "react"
import UsersList from "../containers/UsersList";

export default class allContactsPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <UsersList></UsersList>
            </React.Fragment>
        )
    }
}