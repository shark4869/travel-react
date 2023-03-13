import React from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
class ListTour extends React.Component {
    state = {
        listTours: [],
        filterListTours: [],
        isClick: false,
        activeButton: "All"
    }
    async componentDidMount () {
        let res =await axios.get("http://localhost:3000/api/destination");
        // console.log('check listtour: ', res.data);
        this.setState({
            listTours: res && res.data ? res.data : []
        })
    }
    handlerTourRecommend = () => {
        let listToursRecommend = this.state.listTours.filter(item => item.rating > 4.5);
        
        this.setState({
            filterListTours: listToursRecommend,
            isClick: true,
             activeButton: "Recommend"
        })
    }
    handlerFilterListTours = (category) => {
        let filteredTour = [];
        if (category === 'All') {
        filteredTour = this.state.listTours;
        } else {
        filteredTour = this.state.listTours.filter(
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
        let { listTours, filterListTours, isClick, activeButton }=this.state;
        filterListTours.sort((a, b) => b.rating - a.rating);
        listTours.sort((a, b) => b.rating - a.rating);
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
                        )
                        }) }
                </div>
                :
                <div className='tour-list'>
                   {listTours && listTours.length > 0 && listTours.map((item,index)=>{
                        const styles = {
                            backgroundImage: `url(${item.imageURL})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        };
                        return(
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
                        )
                        }) }
                </div>
            }
               
            </>
            
        )
    }
}

export default ListTour;