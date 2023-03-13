import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './footer.scss';
class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
               <div className="wrapper">
                <div className="container">
                    <div className="footer-list">
                        <div className="footer-item">
                            <h1 className="footer-logo"><Link to="/">TRav</Link></h1>
                            <p className="footer-desc">Wellcom to my page. Let's explore interesting destinations</p>
                        </div>
                        <div className="footer-item">
                            <h3 className="footer-header">Product</h3>
                            <Link className="footer-link" to="/">Recommendation</Link>
                            <Link className="footer-link" to="/">Integration</Link>
                            <Link className="footer-link" to="/">Changing</Link>
                            <Link className="footer-link" to="/">Download</Link>
                        </div>
                         <div className="footer-item">
                            <h3 className="footer-header">Company</h3>
                            <Link className="footer-link" to="/">About us</Link>
                            <Link className="footer-link" to="/">Blog</Link>
                            <Link className="footer-link" to="/">Partner</Link>
                        </div>
                         <div className="footer-item">
                            <h3 className="footer-header">Resources</h3>
                            <Link className="footer-link" to="/">Community</Link>
                            <Link className="footer-link" to="/">Contact</Link>
                            <Link className="footer-link" to="/">DPA</Link>
                            <Link className="footer-link" to="/">Terms of Service</Link>
                        </div>
                        <div className="footer-item">
                            <h3 className="footer-header">Contact Info</h3>
                            <Link className="footer-link" to="/">TRav@gmail.com</Link>
                            <span className="footer-icon">
                                <Link to="/"><FaFacebook/></Link>
                                <Link to="/"><FaTwitter /></Link>
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
            
        )
    }
}
export default Footer;