import React from "react"
import searchIcon from "../assets/search.svg"

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="search">
                <img alt="Search icon" className="search__icon" src={searchIcon}></img>
                <input
                    className="search__input"
                    type="text"
                ></input>
            </div>
        </div>
    )
}

export default SearchBar