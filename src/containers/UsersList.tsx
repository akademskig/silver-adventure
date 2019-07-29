import React from "react"
import { UserListState } from "../redux/types";
import { connect } from "react-redux";
import UserCard from "../components/UserCard"
import EmptyUserCard from "../components/EmptyUserCard";
import MobileCard from "../components/mobileCard";
import Pagination from "../components/Pagination";
import { EmptyUserCardMode } from "./types";

class UsersList extends React.Component<any, UserListState, any> {

    render() {
        const { loading, page_users, currentPage, users } = this.props;
        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <React.Fragment>
                <div className="card-list">
                    {currentPage === 1 && <EmptyUserCard mode={EmptyUserCardMode.DESKTOP}></EmptyUserCard>}
                    {page_users && page_users.map((user: any) =>
                        <UserCard key={user.id} user={user}></UserCard>
                    )}
                </div>
                <div className="mobile-list">
                    {currentPage === 1 && <EmptyUserCard mode={EmptyUserCardMode.MOBILE}></EmptyUserCard>}
                    {page_users && page_users.map((user: any) =>
                        <MobileCard key={user.id} user={user}></MobileCard>
                    )}
                </div>
                {users && <Pagination users={users} ></Pagination>}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        page_users: state.users.page_users,
        currentPage: state.pagination.currentPage,
        users: state.users.filtered_users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)