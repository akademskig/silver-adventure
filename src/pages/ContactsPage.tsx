import React, { Fragment } from "react"
import { ContactRoutes, ContactSubroutes } from '../routes';
import { connect } from "react-redux";
import { fetchUsers } from "../services/usersService";

class ContactsPage extends React.Component<any> {
    componentDidMount() {
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
        users: state.users.users,
        filtered_users: state.users.filtered_users,
        loading: state.users.loading,
        error: state.users.error
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)