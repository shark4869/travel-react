import React from "react";

import Header from "../components/header/Header";
import Tour from "../components/tour/Tour";
import Rate from "../components/rate/Rate";
import Question from "../components/question/Question";
import Footer from "../components/footer/footer";
class Home extends React.Component {
    render () {
        return (
            <>
                <Header />
                <Tour />
                <Rate />
                <Question />
                <Footer />
            </>
            
        )
    }
}
export default Home;