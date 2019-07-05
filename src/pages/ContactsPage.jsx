import React, { Fragment } from "react"
import UsersList from "../containers/UsersList";
import SearchBar from "../components/SearchBar";
import Navigation from '../components/navigation';
import { ContactRoutes } from '../routes';
export default class ContactsPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <SearchBar></SearchBar>
                <ContactRoutes></ContactRoutes>
            </React.Fragment>
        )
    }
}