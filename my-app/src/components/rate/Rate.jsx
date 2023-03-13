import React from "react";
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Rate.scss';
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

class Rate extends React.Component {
   state = {
        listRates: [],
        listUser: []
   }
   async componentDidMount () {
    let res = await axios.get("http://localhost:3000/api/rates");
    let resUser = await axios.get("http://localhost:3000/api/users");
      //console.log('check rate: ', res.data);
    this.setState({
            listRates: res && res.data ? res.data : [],
            listUser: resUser && resUser.data ? resUser.data : []
    })
   }
    render () {
         const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 2
            }
            };
         let { listRates, listUser }=this.state;
        return (
        <>
        <section className="rate">
            <div className="wrapper">
            <div className="container">
                <div className="rate-header">
                    <p className='heading-sub'>travelers experence</p>
                    <h1 className='heading'>Real Travel Stories from Real People</h1>
                </div>
                <div className="rate-list carousel-wrapper">
                    <Carousel responsive={responsive} autoPlay infinite> 
                        {listRates && listRates.length > 0 && listRates.map((item,index)=>{
                            const user = listUser.find(user => user.id === item.userid);
                            return (
                            <div className='rate-item' key={item.id}>
                                <div className="rate-top">
                                    <span className="rate-icon"><FaQuoteLeft/></span>
                                    <p className="rate-content">
                                        {item.comment}
                                    </p>
                                </div>
                                 <div className="rate-user" >
                                    <img src={user.avatar} alt="avatar" className="user-avatar"/>
                                        <div className="user-info">
                                            <p className="user-name">{user.first_name} {user.last_name}</p>
                                            <p className="rating">
                                                {item.star === 5 ? 
                                                    <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>
                                                 :
                                                    item.star === 4 ?
                                                    <><FaStar/><FaStar/><FaStar/><FaStar/></>  
                                                : 
                                                <><FaStar/><FaStar/><FaStar/></>  
                                            }
                                                </p>
                                        </div>
                                    </div>
                            </div>
                            )
                        })
                        }
                    </Carousel>
                    
                </div>
            </div>
            </div>
        </section>
        </>
            
        )
    }
}
export default Rate;