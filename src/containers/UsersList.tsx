import React from "react"
import { UserListState } from "../redux/types";
import { connect } from "react-redux";
import UserCard from "../components/UserCard"
import EmptyUserCard from "../components/EmptyUserCard";

class UsersList extends React.Component<any, UserListState, any> {

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
                <EmptyUserCard></EmptyUserCard>
                {filtered_users && filtered_users.map((user: any) =>
                    <UserCard key={user.id} user={user}></UserCard>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        filtered_users:state.users.filtered_users,
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)