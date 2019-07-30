import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router";
import ContactEdit from "../containers/ContactEdit";
import { User } from "../types/user";
import { fetchUser } from "../redux/actions/users";

class ContactEditPage extends React.Component<any>{
    render() {
        const { users, dispatch, match, user, history } = this.props
        const id = parseInt(match.params.id)
        if (users.length > 0) {
            const user = users.find((u: User) => u.id === id)
            if (!user)
                history.goBack()
            dispatch(fetchUser(user))
        }
        return (
            user ? <ContactEdit {...this.props}></ContactEdit> : <div></div>)
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.users.users,
        user: state.users.user,
    }
}

export default connect(mapStateToProps)(withRouter(ContactEditPage))