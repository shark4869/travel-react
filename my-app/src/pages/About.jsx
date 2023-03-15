import React from "react";
import Footer from "../components/footer/footer";
class About extends React.Component {
    render () {
        return (
            <>
            <section className="About">
                    <div className="wrapper">
                        <div className="container">
                            <div className="about-content" style={{height: "100vh", paddingTop: "50px"}}>
                                <p>This project is an exercise in react and redux</p>
                            </div>

                        </div>
                    </div>
            </section>  
            <Footer />
            </>
        )
    }
}
export default About;