import React from "react"
import searchIcon from "../assets/search.svg"

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="search-bar-container">
                <img className="search-icon" src={searchIcon}></img>
                <input
                    className="search-bar"
                    type="text"
                ></input>
            </div>
        </div>
    )
}

export default SearchBar