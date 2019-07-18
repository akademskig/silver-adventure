import React from "react"
import searchIcon from "../assets/icons/search.svg"
import { connect } from "react-redux"
import { UserListState } from "../redux/types";
import { filterUsers } from "../utils";
import { searchUsers } from "../redux/actions/users";
class SearchBar extends React.Component<any, UserListState, any>{
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const users = filterUsers(this.props.users, e.target.value)
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
        users: state.users.users,
    }
}



export default connect(mapStateToProps)(SearchBar)