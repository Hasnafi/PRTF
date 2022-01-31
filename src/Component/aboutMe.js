import React, { Component } from "react"
import { Route, Link } from 'react-router-dom';
import img from '../image.png'

class aboutMe extends Component {
    
    render() {
        return(
            <div className="aboutMe">
                <div className="space"></div>
                <h1>About me</h1>
                <div className="dividerabout"></div>
                <h3>Who i am ?</h3>
                <h4 className="dp">Merely a young, enthusiastic woman who's keen on drawing and anything that is 
                    related to computer science. I can be also described as a motivated,
                    creative and determined student at ESI alger named Filali Hasna.
                    My passion for both art and the computer science field has led me to the exciting
                    world of web developpement and design (UI design). 
                    Therefore, I now have some plenty of projects on which 
                    I worked, you can find some of them in this portflio.</h4>
                <div className="space"></div>
            </div>
        )
    }
}
      
export default aboutMe;