import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router";
import ContactEdit from "../components/contactView/ContactEdit";
import { User } from "../redux/users/types";
import { fetchUser } from "../redux/users/actions";

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
        users: state.usersReducer.users,
        loading: state.usersReducer.loading,
        error: state.usersReducer.error,
        user: state.usersReducer.user
    }
}

export default connect(mapStateToProps)(withRouter(ContactEditPage))