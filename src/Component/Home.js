import React, { Component } from "react"
import img from '../image.png'

class Home extends Component {
    
    render() {
        return(
        <div className="Home">
            
            <div className="countainer">
               <img className="photo" src={img} alt="" />
            </div>
            <div className="spaace"></div>
            <h1 className="Bigtitle">Hi, i'm Hasna</h1>
            <div className="wrapper">
                <div className="static-txt">I'm a </div>
                    <ul className="dynamic-txts">
                        <li><span>DESIGNER</span></li>
                        <li><span>DEVELOPER</span></li>
                        <li><span>DESIGNER</span></li>
                        <li><span>DEVELOPER</span></li>
                    </ul>
            </div>
            <p className="desc">Frontend/backend developer and a beginner designer.</p>
            <ul className="socialmedia">
               <li><a href="https://www.facebook.com/sissounafi.filali/" ><i class="fab fa-facebook-square"></i></a></li>
               <li><a href="https://www.instagram.com/hasna__filali/" ><i class="fab fa-instagram"></i></a></li>
               <li><a href="https://www.linkedin.com/in/sara-filali-7788bb220/" ><i class="fab fa-linkedin"></i></a></li>
            </ul>
            <span className="dividerhome"></span>
        </div>  
        
        )
    }
}
      
export default Home;