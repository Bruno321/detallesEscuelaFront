import React from "react"
import "./Searcher.css"

const SearchInput = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Ingresa el nombre de un maestro o salón" className="search-input"/>
        </div>
    )
}

export default SearchInput