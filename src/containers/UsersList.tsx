import React from "react"
import { UserListState } from "../redux/types";
import { connect } from "react-redux";
import UserCard from "../components/UserCard"
import EmptyUserCard from "../components/EmptyUserCard";
import MobileCard from "../components/mobileCard";

class UsersList extends React.Component<any, UserListState, any> {

    render() {
        const { error, loading, filtered_users, page } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <React.Fragment>
                <div className="card-list">
                    <EmptyUserCard mode="desktop"></EmptyUserCard>
                    {page === "myFavorites" && filtered_users && filtered_users.map((user: any) =>
                        user.favorite &&
                        <UserCard key={user.id} user={user}></UserCard>
                    )}
                    {page === "allContacts" && filtered_users && filtered_users.map((user: any) =>
                        <UserCard key={user.id} user={user}></UserCard>
                    )}
                </div>
                <div className="mobile-list">
                    <EmptyUserCard mode="mobile"></EmptyUserCard>
                    {page === "myFavorites" && filtered_users && filtered_users.map((user: any) =>
                        user.favorite &&
                        <MobileCard key={user.id} user={user}></MobileCard>
                    )}
                    {page === "allContacts" && filtered_users && filtered_users.map((user: any) =>
                        <MobileCard key={user.id} user={user}></MobileCard>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        filtered_users: state.users.filtered_users,
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)