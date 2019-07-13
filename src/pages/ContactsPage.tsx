import React, { Fragment } from "react"
import { ContactRoutes, ContactSubroutes } from '../routes';
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/actions";

class ContactsPage extends React.Component<any> {
    componentDidMount() {
        if (this.props.users.length == 0)
            this.props.dispatch(fetchUsers())
    }
    render() {
        return (
            <React.Fragment>
                <ContactRoutes></ContactRoutes>
                <ContactSubroutes {...this.props}></ContactSubroutes>
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