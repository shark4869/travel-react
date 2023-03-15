import React from "react";
import './Search.scss';
class Search extends React.Component {
    render () {
        return (
                <aside className="search">
                    <h1 className="search-heading">Search</h1>
                        <input type="text" placeholder="Location" />
                        <input type="text" placeholder="Budget" />
                        <button type="button" className="btn btn--active">Search</button>
                </aside>  
        )
    }
}
export default Search;