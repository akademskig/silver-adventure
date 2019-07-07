import React, { Fragment } from "react"
import { ContactRoutes } from '../routes';
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/actions";
import ContactViewPage from "./ContactViewPage";

class ContactsPage extends React.Component<any> {
    componentDidMount() {
        if (this.props.users.length == 0)
            this.props.dispatch(fetchUsers())
    }
    render() {
        return (
            <React.Fragment>
                <ContactRoutes></ContactRoutes>
                <ContactViewPage ></ContactViewPage>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersReducer.users,
        filtered_users: state.usersReducer.filtered_users,
        loading: state.usersReducer.loading,
        error: state.usersReducer.error
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)