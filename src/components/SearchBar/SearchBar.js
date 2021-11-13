import React from "react";
import "./SearchBar.css";
// import BusinessList from "../BusinessList/BusinessList";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            location: "",
            sortBy: "best_match",
        };
        this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count",
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption,
        });
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return "active";
        } else {
            return "";
        }
    }

    handleTermChange(event) {
        this.setState(
            {
                term: event.target.value
            }
        )
    }

    handleLocationChange(event) {
        this.setState(
            {
                location: event.target.value
            }
        )
    }

    handleSearch(event) {
        let term = this.state.term;
        let location = this.state.location;
        let sortBy = this.state.sortBy;
        this.props.searchYelp(term, location, sortBy);
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map((sortByOption) => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (
                <li
                    key={sortByOptionValue}
                    className={this.getSortByClass(sortByOptionValue)}
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                >
                    {sortByOption}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>{this.renderSortByOptions()}</ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;
