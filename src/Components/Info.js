import React, { Component } from 'react';
import {InfoConsumer} from './context';
import {Link} from 'react-router-dom';

export default class Info extends Component { 
     render() {
          const {
               id,
               headertilte,
               headersubtilte,
               headetext,
               img
          } = this.props.item;

          return (
             
               <InfoConsumer>
                    {value => {
                      return(<div className="col-10 col-lg-4 col-sm-6 mx-auto mb-5"> 
                      <div className="card" style={{width: '18rem'}}>
                                <img src={img} className="card-img-top" alt={headertilte} />
                           <div className="card-body">
                                <h3 className="card-title text-uppercase">{headertilte}</h3>
                                <h5 className="card-title text-uppercase">{headersubtilte}</h5>
                                <p className="card-text">
                                   {headetext}
                                </p>
                              <Link 
                                   onClick = {()=>value.handleDetail(id)}
                                   to ='/details' 
                                   className="btn btn-outline-primary">
                                   More Detail
                              </Link>
                           </div>
                      </div>
                      </div>
                      )                 
            }}
               </InfoConsumer>
          )
     }
}
