import React from 'react'
import Flower from '../assest/flower.png'
import Circles from '../assest/circals.png'
import Star from '../assest/star.png'
import Person from '../assest/persone.png'
import squareDots from '../assest/squareDotes.png'

import './content.css';



export default function Content(){
    return(
        <>
            <div className="container-fluid mt-5 px-5">
                <div className="row justify-content-between"> 
                    <div className=" col-auto Circles">            
                        <img src={Circles} alt="" width="60px" />
                    </div>
                    <div className="col text-center text">           
                        <h1>Online <span className="color_pink">Business</span>  Workshop</h1>
                    </div>
                    <div className="col-auto text-end flower">           
                        <img src={Flower} alt="" width="110px" />
                    </div>
                </div>
            </div>

            <div className="row w-100 mt-4 p-0 m-0"> 
                    <div className="col-12 col-lg-6 bg_white">   
                        <div className="content">       
                            <img src={Star} alt="" width="40px" className="float-end d-block me-5 start"/>      
                            <p className="d-block mx-auto">Lorem ipsum dolor sit amet, consectetur adi pisc ing elit, sed do eiusmod tempor incidid unt ut rila  veniam,</p>
                            <div className="d-block buttons mx-auto">
                                <button className="btn btn-danger btn_color_pink me-4 hvr-pop">Read More</button>
                                <button className="btn btn-dark btn_color_black hvr-pop">Our Client</button> 
                            </div>
                            <div className="square"></div>
                        </div> 
                    </div>
                    <div className="col-12 col-lg-6 bg_pink">     
                    <div className="content">
                        <div className="half_circle d-none d-lg-block"></div>
                        <img src={squareDots} alt="" width="90px" className="d-none d-lg-block"/>
                        <div className="icon">
                            <p className="font_small">More Info:</p>  
                            <div> 
                                <span className="instagram me-1"><i className="fa fa-instagram" aria-hidden="true"></i></span>
                                <span className="facebook me-1"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                                <span className="twitter me-1"><i className="fa fa-twitter" aria-hidden="true"></i></span>
                                <p className="d-inline-block">@haloocorps</p>
                            </div> 
                        </div>
                    </div>      
                        
                    </div>
                    <div className="person">
                        <img src={Person} alt="" width="410" className=" d-block mx-auto"/>
                        <div className="call_us shadow w-auto mx-auto">
                            <p>Call Us:</p>
                            <p className="last">+62 1234 567 89</p>
                        </div>
                        <div className="our_address shadow w-auto mx-auto">
                            <p>Our Address:</p>
                            <p className="last">3062 Kildeer Drive</p>
                        </div>
                    </div>
                    
            </div>

           

        </>
    );

}