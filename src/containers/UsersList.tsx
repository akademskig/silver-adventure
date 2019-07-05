import React from "react"
import { User, UserListState } from "../redux/users/types";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/actions";
import UserCard from "../components/UserCard"

class UsersList extends React.Component<any, UserListState, any> {

    componentDidMount() {
        if (this.props.users.length == 0)
            this.props.dispatch(fetchUsers())
    }

    render() {
        const { error, loading,  filtered_users } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="card-list">
                {filtered_users && filtered_users.map((user: any) =>
                    <UserCard key={user.id} user={user}></UserCard>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersReducer.users,
        filtered_users:state.usersReducer.filtered_users,
        loading: state.usersReducer.loading,
        error: state.usersReducer.error
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)