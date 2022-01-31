import React, { Component } from "react"
import { Route, Link } from 'react-router-dom';
import img from '../image.png'

class contactMe extends Component {
    render() {
        return(
            <div className="contactMe">    
             <div className="dividerWork"></div>    
             <div className="spaceContact"></div>   
                    <h1>Get in touch !</h1>
            <div className="dividerabout"></div>
            <div className="bodyContact">
            <div class="container">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2>Contact Us</h2>
                    <input type="text" class="field" placeholder="Your Name" />
                    <input type="text" class="field" placeholder="Your Email" />
                    <input type="text" class="field" placeholder="Phone" />
                    <textarea placeholder="Message" class="field"></textarea>
                    <button class="btn">Send</button>
                </div>
            </div>
        </div>
        </div>
        </div>
        )
    }
}
      
export default contactMe;