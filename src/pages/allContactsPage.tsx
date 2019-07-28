import React from "react"
import UsersList from "../containers/UsersList";
import SearchBar from "../components/SearchBar";
import Navigation from '../components/navigation';
import { filterByFavorite } from "../redux/actions/users";
import { connect } from "react-redux";

class allContactsPage extends React.Component<any> {

    render() {
        const { users, dispatch } = this.props
        if (users.length > 0) {
            dispatch(filterByFavorite(users))
        }
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <SearchBar></SearchBar>
                <UsersList></UsersList>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        users: state.users.users,
    }
}

export default connect(mapStateToProps)(allContactsPage)