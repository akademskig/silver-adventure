import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router";
import ContactDetails from "../components/contactView/ContactDetails";
import { User } from "../types/user";
import { fetchUser } from "../redux/actions/users";


class ContactDetailsPage extends React.Component<any> {
    render() {
        const { users, dispatch, match, user } = this.props
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
        users: state.users.users,
        user: state.users.user
    }
}

export default connect(mapStateToProps)(withRouter(ContactDetailsPage))
