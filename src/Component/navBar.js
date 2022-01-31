import React, { Component } from "react"
import { Menu } from "./Menu"
import { Link} from "react-router-dom"

class navBar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    render() {
        return(
            <nav className="navBar">
                <div className="menuicon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName}>
                                     {item.title} 
                                </a>
                            </li>
                        )
                    })}
                </ul>   
            </nav>
        )
    }
}
      
       

export default navBar;