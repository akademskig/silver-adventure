import React, { RefObject } from "react"
import searchIcon from "../assets/icons/search.svg"
import { connect } from "react-redux"
import { UserListState } from "../redux/types";
import { filterUsers } from "../utils";
import { searchUsers } from "../redux/actions/users";
class SearchBar extends React.Component<any, UserListState, any>{
    searchValue = ""
    inputRef: RefObject<any>
    constructor(props: any) {
        super(props)
        this.inputRef = React.createRef()
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.searchValue = e.target.value
        const users = filterUsers(this.props.users, this.searchValue)
        this.props.dispatch(searchUsers(users))
    }

    initSearch = () => {
        if (this.inputRef.current) {
            const users = filterUsers(this.props.users, this.inputRef.current.value)
            this.props.dispatch(searchUsers(users))
        }
    }

    render() {
        this.initSearch()
        return (
            <div className="search-container">
                <div className="search">
                    <img alt="Search icon" className="search__icon" src={searchIcon}></img>
                    <input
                        ref={this.inputRef}
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
        users: state.users.filtered_by_favorite,
    }
}



export default connect(mapStateToProps)(SearchBar)