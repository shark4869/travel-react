import React from 'react';
import Menu from '../menu/menu';
import '../../styles/global.scss';
import './Header.scss'
import { BiCaretRightCircle } from "react-icons/bi";



class Header extends React.Component {
    render() {
        return (
        <header className="header">
            <div className="wrapper">
                <div className="container">
                    <Menu />
                    <Hero />
                    <Intro />
                </div>
            </div>
        </header>  
        )
    }
}
class Hero extends React.Component {
    render() {
        return (
       <div className="hero">
            <h1 className="hero-heading">Uncover Hidden Gems with Us</h1>
            <p className="hero-desc">Discover the Best Travel Destinations and Create Unforgettable Experiences</p>
            <div className="hero-btn">
                <a href="/#" className="btn">Let's Explore</a>
                <a href="/#" className="hero-video">
                    <BiCaretRightCircle className='hero-icon' />
                   <span>Watch video</span> 
                    </a>
            </div>

        </div>
        )
    }
}

class Intro extends React.Component {
    render() {
        return (
        <div className="intro">
            <div className="intro-item">
                <p className="intro-number">10</p>
                <p className="intro-text">Years of Experience</p>
            </div>
            <div className="border"></div>
            <div className="intro-item">
                <p className="intro-number">2K+</p>
                <p className="intro-text">Best Destination</p>
            </div>
            <div className="border"></div>
            <div className="intro-item">
                <p className="intro-number">10K+</p>
                <p className="intro-text">Happy Customer</p>
            </div>
            <div className="border"></div>
             <div className="intro-item">
                <p className="intro-number">4.7</p>
                <p className="intro-text">Overal Rating</p>
            </div>
        </div>
        )
    }
}

export default Header;