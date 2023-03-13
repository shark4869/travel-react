import React from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Question.scss';
class Question extends React.Component {
    state ={
        email: ''
    }
    handleChangeInput=(event)=>{
        this.setState({
            email: event.target.value
        })
    }
    handleEmailSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/questions', {
            email: this.state.email
        })
            .then((response) => {
                toast.success("Submit Done!")
            })
            .catch((error) => {
            console.log(error);
            });
        this.setState({
            email: ''
        });
  }
    render () {
        let { email } =this.state;
        return (
            <section className="question">
                <div className="wrapper">
                    <div className="container">
                        <div className="question-left">
                            <h3 className="heading-left">Do you have any question for TRav</h3>
                            <p className="heading-sub">If there are question you want to ask. We will answer all your question</p>
                            <form action="" onSubmit={this.handleEmailSubmit} className="questin-form">
                                <div className="question-input">
                                    <MdOutlineMail className="email-icon"/>
                                    <input type="email" value={email} placeholder="Enter your email" required
                                    onChange={(event)=> this.handleChangeInput(event)}
                                    />
                                </div>
                                <button type="submit" className="btn btn--primary">Submit</button>

                            </form>
                        </div>
                        <div className="question-right">
                            <h2 className="heading-right">Frequently Asked Question</h2>
                            <div className="question-list">
                                <Link to="/" className="question-item">What is TRav?</Link>
                                <Link to="/" className="question-item">Can I refound my ticket?</Link>
                                <Link to="/" className="question-item">Can I change route if i make mistake order?</Link>
                                <Link to="/" className="question-item">Is there are money-back guarantee for miss flight?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}
export default Question;