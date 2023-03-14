import React from "react";
import { Navigate } from "react-router-dom";
import { Link, NavLink  } from 'react-router-dom';
import Login from "../login/Login";
import { connect } from "react-redux";
import { TOGGLE_THEME } from "../../store/actions/actionType";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { logOut } from "../../store/actions/userActions";
import './menu.scss';
// import { toast } from "react-toastify";

class Menu extends React.Component {
    
    state ={
        isOpenLogin: false,
        navigate: false,
    }

    tongleModal=()=>{
        this.setState((prevState) => ({
            isOpenLogin: !prevState.isOpenLogin,
        }));
    }
    handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal')) {
      this.tongleModal();
    }
  };
    
    handleLogOut = () => {
        this.props.logOut();
        this.setState({
             isOpenLogin: false,
             navigate: true
        })
    }
    handleClick = () => {
        this.props.toggleTheme();
    }
    render() {
        let { isOpenLogin, navigate  }=this.state;
        let { isLogin, user, darkMode }=this.props;
        // console.log('check user: ',user);
        if (navigate) {
        return <Navigate to="/" />;
        }

        // console.log("check modal: ", isOpenLogin);
        // console.log("check props: ", isLogin);
      
        return (
            <div className='nav' >
                <div className="logo">
                    <Link to="/">TRav</Link>
                </div>
                <ul className="menu">
                    <li className="menu-item">
                    <NavLink to="/">Home</NavLink> 
                    </li>
                    <li className="menu-item">
                        <NavLink to="destination">Destination</NavLink> 
                    </li>
                    <li className="menu-item">
                        <NavLink to="about">About</NavLink> 
                    </li>
                </ul>
                 <button className={darkMode ? "theme-tongle dark" : "theme-tongle light"} onClick={() => this.handleClick()}> 
                {darkMode ? <BsMoonFill/> : <BsSunFill/>}
                </button>
                {user ? 
                <div className="header-auth">
                        <Link to={`/users/${user.id}`}>
                        <div className="auth-info">
                            <img src={user.avatar} alt="" className="auth-avatar" />
                            <div className="auth-name">{user.first_name} {user.last_name}</div>
                        </div>
                        </Link>
                        <div className="header-icon">
                            <FaShoppingCart />
                        </div>
                        <div className="header-icon" onClick={this.handleLogOut}>
                            <MdLogout />
                        </div>
                </div>
                : 
                     <div className="header-auth">
                        <button type="button" className="header-login btn" 
                        onClick={()=>this.tongleModal()}
                        >Login</button>
                        <a href="/#" className="header-register btn">Register</a>
                    </div>
                }
               
                 {isOpenLogin && !isLogin && <Login onClose={this.tongleModal} onOverlayClick={this.handleOverlayClick}  />}
        </div>
   
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.user.isLogin,
        user: state.user.user,
        darkMode: state.theme.darkMode,
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut()),
        toggleTheme: () => dispatch({ type: TOGGLE_THEME, reducer: 'theme', }),
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Menu);