import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"



export default function Navbar() {
     return (
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand text-light" href="#"><i class="fab fa-react"></i></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a className="nav-link text-light text-uppercase ml-5" href="#">
                     Home&nbsp;<i class="fas fa-home"></i> 
                <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link text-light text-uppercase ml-5" href="#">News <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link text-light text-uppercase ml-5" href="#">Contact Us <span className="sr-only">(current)</span></a>
              </li>
              
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
         
     )
}
