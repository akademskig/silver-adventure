import React from "react"
import { UserListState } from "../redux/types";
import { connect } from "react-redux";
import UserCard from "../components/UserCard"
import EmptyUserCard from "../components/EmptyUserCard";
import MobileCard from "../components/mobileCard";
import Pagination from "../components/Pagination";
import { User } from "../types/user";

class UsersList extends React.Component<any, UserListState, any> {
    filterMyFavorites = (users: User[]) => {
        const newUsers =  users.filter((u: User) => u.favorite)
        return newUsers
    }
 
    render() {
        const { loading, page_users, page, currentPage, filtered_users } = this.props;
        if (loading) {
            return <div>Loading...</div>;
        }
       
        return (
            <React.Fragment>
                <div className="card-list">
                    {currentPage === 1 && <EmptyUserCard mode="desktop"></EmptyUserCard>}
                    {page === "myFavorites" && page_users && page_users.map((user: any) =>
                        user.favorite &&
                        <UserCard key={user.id} user={user}></UserCard>
                    )}
                    {page === "allContacts" && page_users && page_users.map((user: any) =>
                        <UserCard key={user.id} user={user}></UserCard>
                    )}
                </div>
                <div className="mobile-list">
                    {currentPage === 1 && <EmptyUserCard mode="mobile"></EmptyUserCard>}
                    {page === "myFavorites" && page_users && page_users.map((user: any) =>
                        user.favorite &&
                        <MobileCard key={user.id} user={user}></MobileCard>
                    )}
                    {page === "allContacts" && page_users && page_users.map((user: any) =>
                        <MobileCard key={user.id} user={user}></MobileCard>
                    )}
                </div>
                { <Pagination filtered_users={filtered_users} ></Pagination>}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        page_users: state.users.page_users,
        currentPage: state.pagination.currentPage,
        filtered_users: state.users.filtered_users
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)