import React, { Component } from 'react';
import {InfoConsumer} from '../context';

export default class ReviewCard extends Component {
     render() {
          const {
               id, 
               name, 
               avatar,
               commend,
          } = this.props.person
          return (
              <InfoConsumer>
                   {value =>(
                    
                    <div className='media mt-4'>
                         <img src={avatar} style={{width:"40px"}} className='mr-3'/>
                         <div className='media-body'>
                              <h4>{name}</h4>
                              <p>{commend}</p>
                         </div>
                    </div>

                    )
                   }
              </InfoConsumer>
          )
     }
}
