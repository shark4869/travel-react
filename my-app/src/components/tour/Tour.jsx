import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/global.scss';
import './Tour.scss';
import ListTour from './ListTour';


import { FaChevronDown } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";


class Tour extends React.Component {
    render () {
        return (
            <section className="tour">
            <div className="wrapper">
            <div className="container">
                <div className="tour-header">
                    <p className='heading-sub'>explore your dream place</p>
                    <h1 className='heading'>find your dream destination</h1>
                    <p className='heading-text'>find your perfect destination - the ultimale guide to your dream destination </p>
                </div>
                <div className="tour-search">
                    <div className='search-list'>
                    <Search 
                        searchIcon={<FaMapMarkerAlt />}
                        searchText='Location'
                        searchDropdow={<FaChevronDown />}
                    />
                     <Search 
                        searchIcon={<FaWallet />}
                        searchText='Budget'
                        searchDropdow={<FaChevronDown />}
                    />
                     <Search 
                        searchIcon={<FaCalendar />}
                        searchText='Date'
                        searchDropdow={<FaChevronDown />}
                    />
                    </div>
                    <button className='btn btn--primary'>Search</button>
                </div>
                <ListTour/>
                <div className='tour-more'>
                         <NavLink to="destination" className="btn btn--primary">See all</NavLink>
                </div>
            </div>
            </div>
        </section>
            
        )
    }
}
class Search extends React.Component {
    render () {
        return (
             <div className='search-item'>  
                <span className='search-icon'>{this.props.searchIcon}</span>
                <span className='search-text'>{this.props.searchText}</span>
                <span className='search-icon'>{this.props.searchDropdow}</span>
            </div>
        )
    }
}





export default Tour;