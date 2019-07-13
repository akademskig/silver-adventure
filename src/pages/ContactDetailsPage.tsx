import React from "react"
import { connect } from "react-redux"
import { fetchUser } from "../redux/users/actions";
import { User } from "../redux/users/types";
import { withRouter } from "react-router";
import ContactDetails from "../components/contactView/ContactDetails";


class ContactDetailsPage extends React.Component<any> {
    render() {
        const { users, dispatch, match,user } = this.props
        if (users.length > 0) {
            const user = users.find((u: User) => u.id == match.params.id)
            dispatch(fetchUser(user))
        }

        return (
            user ? <ContactDetails {...this.props}></ContactDetails> : <div></div>)
    }
}


const mapStateToProps = (state: any) => {
    return {
        users: state.usersReducer.users,
        loading: state.usersReducer.loading,
        error: state.usersReducer.error,
        user: state.usersReducer.user
    }
}

export default connect(mapStateToProps)(withRouter(ContactDetailsPage))
