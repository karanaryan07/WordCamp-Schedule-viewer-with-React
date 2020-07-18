import React from 'react'
import {hot} from 'react-hot-loader/root'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'


class NavBar extends React.Component
{

    render()
    {
        return(
                 <nav className = "nav">
                        <div className = "logo">
                                <h4 className = "logo-title">WORDCAMP SCHEDULE VIEWER</h4>
                        </div>
                        <ul className="nav-links">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://central.wordcamp.org/" target="_blank">WordCamp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://wordpress.org/" target="_blank">WordPress</a>
                            </li>
                        </ul>
                        <div className = "repo">   
                        <a href="https://github.com/karanaryan07/React-App-with--WordPress-as-Backend" target="_blank" class="btn btn-primary" role="button">Source Code</a>    
                        </div>
                    </nav>
        )
    }
}

export default hot(NavBar)