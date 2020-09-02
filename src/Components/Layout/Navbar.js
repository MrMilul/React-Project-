import React from "react"
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"




export default function Navbar() {
     return (
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          {/* <Link className="navbar-brand text-light" to="#"><i className="fab fa-react"></i></Link> */}
            <a className="navbar-brand text-light" href="https://reactjs.org/" target="_blank">
              <img src='favicon.ico'/>
            </a>
          <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link to='/' className="nav-link text-light text-uppercase ml-5">
                     Home&nbsp;<i className="fas fa-home"></i> 
                <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link to='/news' className="nav-link text-light text-uppercase ml-5">News <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link to='/contact' className="nav-link text-light text-uppercase ml-5" >Contact Us <span className="sr-only">(current)</span></Link>
              </li>
              
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
         
     )
}
