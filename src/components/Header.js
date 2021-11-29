import React from 'react';
import $ from'jquery';
import './header.css';
import logo from '../assest/logo.png';


export default function Header (){
    $(document).ready(function() {
        $( ".mr-auto .nav-item" ).bind( "click", function(event) {
            event.preventDefault();
            var clickedItem = $( this );
            $( ".mr-auto .nav-item" ).each( function() {
                $( this ).removeClass( "active" );
            });
            clickedItem.addClass( "active" );
        });
    });
    return(
        <>
             <div className="shadow">
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <a className="navbar-brand d-flex" href="#"><img src={logo} width="200px" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarMenu">
                        <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active underline-from-left">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item underline-from-left">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item underline-from-left">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item underline-from-left">
                            <a className="nav-link" href="#">Work</a>
                        </li>
                        <li className="nav-item underline-from-left">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        </ul>
                        <div className="d-flex justify-content-lg-end">
                        <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-danger my-2 my-sm-0 px-4 btn_color_pink hvr-pop" type="submit">Login</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );

}