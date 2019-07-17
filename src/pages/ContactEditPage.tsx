import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router";
import ContactEdit from "../components/contactView/ContactEdit";
import { User } from "../types/user";
import { fetchUser } from "../redux/actions/fetchUsers";

class ContactEditPage extends React.Component<any>{
    render() {
        const { users, dispatch, match,user } = this.props
        if (users.length > 0) {
            const user = users.find((u: User) => u.id == match.params.id)
            dispatch(fetchUser(user))
        }
        return (
            user ? <ContactEdit {...this.props}></ContactEdit> : <div></div>)
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.fetchUsers.users,
        user: state.fetchUsers.user,
        userToEdit: state.fetchUsers.user
    }
}

export default connect(mapStateToProps)(withRouter(ContactEditPage))