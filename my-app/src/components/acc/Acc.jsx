import React from "react";
import { connect } from "react-redux";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { updateUser  } from "../../store/actions/userActions";
import './Acc.scss';

class Account extends React.Component {
    state= {
        showPass: false,
        isClick: false,
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email,
        password: this.props.user.password
    }
    handleClick = () => {
         this.setState((prev)=>({
            isClick: !prev.isClick
        }))
    }
    handleChangeShowPass = () => {
         this.setState((prev)=>({
            showPass: !prev.showPass
        }))
    }
    handleInputChange = (event)=>{
         this.setState({ 
            [event.target.name]: event.target.value 
        });
    }
    handleUpdateSubmit = (event) => {
        event.preventDefault();
        const userData = {
            avatar: this.props.user.avatar,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };
        console.log('check update: ', userData);
        // const id = this.props.match.params.id;
        const id = this.props.user.id;
        this.props.updateUser(id, userData );
        this.setState({ 
            isClick: false 
        });
    }
    render () {
        let { user }=this.props;
        let { showPass, isClick, first_name, last_name, email, password}=this.state;
        return (
            <>
                <section className="User">
                    <div className="wrapper">
                        <div className="container">
                            <div className="user-info">
                                <img className="user-avatar" src={user.avatar} alt="" />
                                <h1 className="user-name">{user.first_name} {user.last_name}</h1>
                                {isClick ? 
                                    <form action="" onSubmit={this.handleUpdateSubmit} className="user-detail">
                                        <input className="user-edit" name="first_name" type="text" value={first_name}
                                        onChange={(event)=>this.handleInputChange(event)}
                                        />
                                        <input className="user-edit" name="last_name" type="text" value={last_name} 
                                        onChange={(event)=>this.handleInputChange(event)}
                                        />
                                        <input className="user-edit" name="email" type="email" value={email} 
                                        onChange={(event)=>this.handleInputChange(event)} 
                                        />
                                        <div className="wrap-input" >
                                            <input className="user-edit" name="password"  type={!showPass ? "password" : "text"}  value={password} onChange={(event)=>this.handleInputChange(event)} />
                                            <span className="show-pass" onClick={this.handleChangeShowPass}>
                                                {showPass ? <FaEye/> : <FaEyeSlash/>}
                                            </span> 
                                        </div>
                                         <button 
                                            className="user-btn btn btn--active"
                                            type="submit"
                                            >Save</button>
                                    </form>

                                : <div className="user-detail">
                                    <span className="user-show">First name: {user.first_name} </span>
                                    <span className="user-show">Last name: {user.last_name}</span>
                                    <span className="user-show">Email: {user.email}</span>
                                    <button 
                                        className="user-btn btn btn--gray" 
                                        type="button"
                                        onClick={()=>this.handleClick()}
                                    >Edit</button>
                                </div>
                                
                                }
                              
                            </div>
                           
                        </div>
                    </div>
                </section>  
            </>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.user.isLogin,
        user: state.user.user,
        
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateUser: (id, data) => dispatch(updateUser(id, data)),
   
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);