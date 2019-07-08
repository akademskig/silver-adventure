import React from "react"
import { connect } from "react-redux"
import { fetchUser } from "../redux/users/actions";
import { User } from "../redux/users/types";
import { withRouter } from "react-router";
import ContactDetails from "../components/ContactDetails";


class ContactDetailsPage extends React.Component<any> {
    componentWillReceiveProps(props: any) {
        const { users, dispatch, match } = props
        if (props.users.length > 0) {
            const user = users.find((u: User) => u.id == match.params.id)
            dispatch(fetchUser(user))
        }
    }

    render() {
        const { user } = this.props

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
