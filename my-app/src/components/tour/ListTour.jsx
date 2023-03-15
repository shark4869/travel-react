import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { fetchTours } from "../../store/actions/tourAction"
import "./ListTour.scss";

class ListTour extends React.Component {
    state = {
        filterListTours: [],
        isClick: false,
        activeButton: "All"
    }
    componentDidMount () {
        this.props.fetchTours();
    }
    handlerTourRecommend = () => {
        let listToursRecommend = this.props.listTour.filter(item => item.rating > 4.5);
        
        this.setState({
            filterListTours: listToursRecommend,
            isClick: true,
             activeButton: "Recommend"
        })
    }
    handlerFilterListTours = (category) => {
        let filteredTour = [];
        if (category === 'All') {
        filteredTour = this.props.listTour;
        } else {
        filteredTour = this.props.listTour.filter(
            (item) => item.category === category
        );
        }
        this.setState({ 
            filterListTours: filteredTour,
            isClick: true,
            activeButton: category
         });
    }
    render () {
        let {listTour} = this.props;
        // console.log("checkProp:", listTour)
        let { filterListTours, isClick, activeButton }=this.state;
        filterListTours.sort((a, b) => b.rating - a.rating);
        listTour.sort((a, b) => b.rating - a.rating);
        let locationIcon = <FaMapMarkerAlt />;
        let startIcon = <FaStar />;
        
        return (
            <>
                <div className='tour-nav'>
                    <button type='button' className={activeButton === "All" ? "btn btn--active" : "btn btn--gray"}
                     onClick={()=>this.handlerFilterListTours('All')}
                    >All</button>
                     <button type='button' className={activeButton === "Recommend" ? "btn btn--active" : "btn btn--gray"}
                    onClick={()=>this.handlerTourRecommend()}
                    >Recommend</button>

                    <button type='button' className={activeButton === "Beach" ? "btn btn--active" : "btn btn--gray"}
                     onClick={()=>this.handlerFilterListTours('Beach')}
                    >Beach</button>

                    <button type='button' className={activeButton === "Park" ? "btn btn--active" : "btn btn--gray"}
                     onClick={()=>this.handlerFilterListTours('Park')}
                    >Park</button>

                    <button type='button' className={activeButton === "Nature" ? "btn btn--active" : "btn btn--gray"}
                     onClick={()=>this.handlerFilterListTours('Nature')}
                    >Nature</button>

                    <button type='button' className={activeButton === "Mountain" ? "btn btn--active" : "btn btn--gray"}
                     onClick={()=>this.handlerFilterListTours('Mountain')}
                    >Mountain</button>
                </div>
                {isClick ? 
                <div className='tour-list'>
                   {filterListTours && filterListTours.length > 0 && filterListTours.map((item, index) => {
                        const styles = {
                            backgroundImage: `url(${item.imageURL})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        };
                        return(
                                 <Link to={`/destination/${item.id}`}>
                                    <div className='tour-item' style={styles} key={item.id} >
                                    <h3 className='tour-name'>{item.name}</h3>
                                    <div className='tour-desc'>
                                        <p className='tour-location'>
                                            {locationIcon}
                                            {item.location}
                                        </p>
                                        <p className='tour-price'>{item.price}</p>
                                    </div>
                                    <div className='tour-rating'>
                                        <span className='rating-icon'>{startIcon}</span>    
                                        {item.rating}
                                    </div>
                                </div>
                                 </Link>

                                
                        )
                        }) }
                </div>
                :
                <div className='tour-list'>
                   {listTour && listTour.length > 0 && listTour.map((item,index)=>{
                        const styles = {
                            backgroundImage: `url(${item.imageURL})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        };
                        return(
                                 <Link to={`/destination/${item.id}`}  key={item.id} >
                                 <div className='tour-item' style={styles} >
                                    <h3 className='tour-name'>{item.name}</h3>
                                    <div className='tour-desc'>
                                        <p className='tour-location'>
                                            {locationIcon}
                                            {item.location}
                                        </p>
                                        <p className='tour-price'>{item.price}</p>
                                    </div>
                                    <div className='tour-rating'>
                                        <span className='rating-icon'>{startIcon}</span>    
                                        {item.rating}
                                    </div>
                                </div>
                                 </Link>
                        )
                        }) }
                </div>
            }
               
            </>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listTour: state.tours.listTour,
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        fetchTours: () => dispatch(fetchTours()),
    }
}
export default connect(mapStateToProps, mapDispathToProps)(ListTour);