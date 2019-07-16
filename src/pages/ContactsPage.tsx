import React, { Fragment } from "react"
import { ContactRoutes, ContactSubroutes } from '../routes';
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/fetchUsers";

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
        users: state.fetchUsers.users,
        filtered_users: state.fetchUsers.filtered_users,
        loading: state.fetchUsers.loading,
        error: state.fetchUsers.error
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)