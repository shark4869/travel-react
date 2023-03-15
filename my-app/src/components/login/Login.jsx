import React from "react";
import { toast } from 'react-toastify';
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/userActions";
import { FaWindowClose } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './login.scss';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        showPass: false
    }
    componentDidMount() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
    handleInputChange = (event)=>{
         this.setState({ 
            [event.target.name]: event.target.value 
        });
    }
    handleLogin = (event) => {
        event.preventDefault();
        if(!this.state.email || !this.state.password ){
            toast.error("Email and password cannot be empty!");
            return;
        }
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData)
    }
    handleChangeShowPass = () => {
        this.setState((prev)=>({
            showPass: !prev.showPass
        }))
    }
    render () {
        // console.log('check props: ', this.props);
        
        const {email, password, showPass} =this.state;
        return (
           <>
              <div className="modal" onClick={this.props.onOverlayClick} >
                    <div className="modal-content">
                        <span className="close" 
                        onClick={this.props.onClose}
                        >
                            <FaWindowClose/>
                        </span>
                        <div className="form-header">
                            <h2>Login</h2>
                            <h2>Register</h2>
                        </div>
                        
                        <form action="" onSubmit={this.handleLogin} className="form" >
                            <div className="form-group">
                                    <input 
                                    type="email" 
                                    value={email}
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    placeholder="Email"
                                    onChange={(event)=>this.handleInputChange(event)} className="input-content"
                                    autoFocus
                                    />
                            </div>
                            <div className="form-group">
                                    <input type={!showPass ? "password" : "text"} 
                                    name="password"
                                    id="password"
                                    value={password} 
                                    autoComplete="off"
                                    placeholder="Password"
                                    onChange={(event)=>this.handleInputChange(event)} className="input-content"
                                    />
                                    <span className="show-pass" onClick={this.handleChangeShowPass}>
                                        {showPass ? <FaEye/> : <FaEyeSlash/>}
                                    </span>
                            </div>
                            <button type="submit" className="btn btn-auth" >Đăng nhập</button>
                        </form>
                       
                    </div>
             
            </div>
            
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // isLoading: state.user.isLoading,
        isLogin: state.user.isLogin,
        error: state.user.error,
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        loginUser: (userData) => dispatch(loginUser(userData)),
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Login);