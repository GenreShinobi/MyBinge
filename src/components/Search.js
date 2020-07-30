import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const resetInputField = () => {
        console.log("Called: resetInputField()")
        setSearchValue("");
    }

    const handleSearchInputChanges = (event) => {
        console.log("Called: handleSearchInputChanges()")
        setSearchValue(event.target.value);
    }

    const handleSearch = (event) => {
        console.log("Called: handleSearch()")
        event.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="form-inline my-2 my-lg-0" id="search" autoComplete="off" onSubmit={handleSearch}>
            <input
                className="form-control mr-sm-2"
                type="text"
                autoComplete="none"
                placeholder="Search"
                aria-label="Search"
                value={searchValue}
                onChange={handleSearchInputChanges}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" value="SEARCH" onClick={handleSearch}>Search</button>
        </form>
    );
};

export default Search;