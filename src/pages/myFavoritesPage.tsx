import React from "react"
import UsersList from "../containers/UsersList";
import SearchBar from "../components/SearchBar";
import Navigation from '../components/navigation';
export default class myFavoritesPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <SearchBar></SearchBar>
                <UsersList page="myFavorites"></UsersList>
            </React.Fragment>
        )
    }
}