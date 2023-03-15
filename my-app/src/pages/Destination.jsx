import React from "react";
import Footer from "../components/footer/footer";
import ListTour from "../components/tour/ListTour";
import Search from "../components/search/Search";
import '../components/tour/Tour.scss';
import  '../styles/Destination.scss';
class Destination extends React.Component {
    render () {
        return (
            <>  
                <section className="destination">
                    <div className="wrapper">
                        <div className="container">
                            <div className="destination-content">
                                <div className="left">
                                    <Search />
                                </div>
                                <div className="right">
                                    <ListTour/>
                                </div>
                                    
                            </div>

                        </div>
                    </div>
                </section>  
        
                <Footer/>
            </>
            
        )
    }
}
export default Destination;