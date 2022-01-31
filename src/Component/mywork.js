import React, { Component } from "react"
import { Route, Link } from 'react-router-dom';
import img from '../image.png'
import projet from '../3e.jpg'
import draw from '../drawing.jpg'
import logo from '../design.jpg'

class mywork extends Component {
    
    render() {
        return(
            <div className="mywork">
                <div className="dividerWork"></div>
                <div className="spaceWork"></div>
                <h1>Some of my works</h1>
                <div className="dividerabout"></div>
                <div className="spaceWork"></div>
            <div className="body">
                <div className="wrapper2">
                    <div className="card">
                        <img src={projet} alt="" />
                        <div className="infoimg">
                            <h5>Project 2cp</h5>
                        </div>
                    </div>

                    <div className="card">
                       <img src={draw} alt="" />
                        <div className="infoimg">
                            <h5>Manga drawings</h5>
                        </div>
                    </div>

                    <div className="card">
                        <img src={logo} alt="" />
                        <div className="infoimg">
                            <h5>Illustrations</h5>
                        </div>
                    </div>

                </div>
                
            </div>
            <div className="Partiedeux">
            <div className="spaceW"></div>
            <h2>Technologies</h2>
            <p> Those are the technologies i used to work with </p>
            <div className="Tech">
                <ul className="technologies">
                    <li>
                        <h2>Front-End</h2>
                        <p>1) html/css </p>
                        <p>2) JavaScript </p>
                        <p>3) React </p>
                    </li>
                    <li>
                        <h2>Back-End</h2>
                        <p>1) MySQL</p>
                        <p>2) Node js </p>
                    </li>
                    <li>
                        <h2>Design</h2>
                        <p>1) Adobe Illustrator </p>
                        <p>2) Adobe Photoshop </p>
                    </li>
                </ul>
            </div>
            </div>
            <div className="spaceWork"></div>
            </div>

        )
        
    }
    
}
      
export default mywork;