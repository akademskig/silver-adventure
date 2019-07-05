import React from "react"
import searchIcon from "../assets/icons/search.svg"
import { connect } from "react-redux"
import { UserListState } from "../redux/users/types";
import { searchUsers } from "../redux/users/actions";
class SearchBar extends React.Component<any, UserListState, any>{
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const users = this.props.users.filter((u: any) => {
            for (let value of Object.values(u)) {
                if (typeof value === "string" && value.match(e.target.value))
                    return true
            }
            return false
        })
        this.props.dispatch(searchUsers(users))
    }
    render() {
        return (
            <div className="search-container">
                <div className="search">
                    <img alt="Search icon" className="search__icon" src={searchIcon}></img>
                    <input
                        onChange={this.handleChange}
                        className="search__input"
                        type="text"
                    ></input>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersReducer.users,
        filtered_users: state.usersReducer.filtered_users,
    }
}
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        dispatch: dispatch,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)