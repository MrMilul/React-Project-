import React, { Component } from 'react';

import {InfoConsumer} from '../context'

export default class Details extends Component {
     render() {
          const mystyle = {
               backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) , white)',
          };
         
          return (
               <InfoConsumer>
                    {value => {
                         const{
                              id,
                              headertilte,
                              headersubtilte, 
                              headetext,
                              title, 
                              description,
                              img,
                              maps
                         } = value.details
                         return(
                              <>
                                   <div style={mystyle}>
                                   <div className='container d-flex justify-content-center'>
                                        <div className='header mt-5 '>
                                             <h1>{headertilte}</h1>
                                             <h4>{ headersubtilte}</h4>
                                             <p>{description}</p>
                                        </div>
                                   </div>
                                   </div>
                                   <div className='row justify-content-center'>
                                   <a href='#'>
                                        <i className="fab fa-linkedin-in my-3 mx-5 btn btn-outline-dark "></i></a>
                                   <a href='#'>
                                        <i className="fab fa-facebook-f btn btn-outline-dark my-3 mx-5 px-3"></i></a>
                                   <a href='#'>
                                        <i className="fab fa-twitter btn btn-outline-dark my-3 mx-5 "></i></a>
                                   <a href='#'>
                                        <i className="fab fa-instagram btn btn-outline-dark my-3 mx-5 "></i></a>                                   
                                   </div>
                                   <div className='container'>
                                   <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                             <a className="nav-link text-dark font-weight-bold" data-toggle="collapse" href="#des">
                                                  Description</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link text-dark font-weight-bold" href="#review" data-toggle="collapse">
                                                  Reviw
                                             </a>
                                        </li>
                                        <li className="nav-item ">
                                              <a className="nav-link text-dark font-weight-bold" href="#map-container-google-1" data-toggle="collapse">
                                                   Map
                                             </a>
                                        </li>
                                   </ul>
                                   <div className="collapse" id="des">
                                        <div className="card card-body mt-3">
                                       <img src={img}/>
                                        <h4 className='text-center mt-2'> {title}</h4>
                                        <h4 className=' mt-1'> {description}</h4>
                                        </div>
                                   </div>
                                   <div className='collapse' id='review'>
                                       
                                   </div>
                                 
                                   <div id="map-container-google-1" class="z-depth-1-half map-container collapse justify-content-center">
                                        <iframe src={maps} style={{width:"100%",
                                         height:"30rem", 
                                         border:"0", 
                                         }}></iframe>
                                   </div>

                                   </div>
                              </>
                         )
                    }}
          
               </InfoConsumer>
          )
     }
}
