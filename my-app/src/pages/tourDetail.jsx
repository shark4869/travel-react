import React from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchTours } from "../store/actions/tourAction";
import { fetchTour } from "../store/actions/tourAction";
import Footer from "../components/footer/footer";
const TourDetail = (props) => {
    const { tour } = props;
    const { id } = useParams();
     React.useEffect(() => {
        props.fetchTour(id);
    }, [id]);
    if (!tour) return null; // or fallback UI

    return (
        <>  
            <section className="tour-detail">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="aa">
                            {tour.name}
                        </h1>
                        <div className="tour-info">
                            <img src={tour.imageURL} alt="" className="tour-img" />
                            <div className="tour-des">
                                <p className="tour-name">Name: {tour.name}</p>
                                <p className="tour-location">Location: {tour.location}</p>
                                <p className="tour-price">Price: {tour.price}</p>
                                <p className="tour-rate">Rating: {tour.rating}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>  
            <Footer/>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
          listTour: state.tours.listTour,
          tour: state.tours.tour,
    }
}
const mapDispathToProps = (dispatch) => {
    return {
         fetchTour: (id) => dispatch(fetchTour(id)),
         fetchTours: () => dispatch(fetchTours()),
    }
}
export default connect(mapStateToProps, mapDispathToProps)(TourDetail);