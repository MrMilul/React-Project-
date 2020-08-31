import React, { Component } from 'react'

import {InfoConsumer} from '../context'

export default class Home extends Component {
     render() {
          return (
               <>
                    <InfoConsumer>
                         {value =>{
                             console.log(value.news);
                         }}
                    </InfoConsumer>   
               </>
          )
     }
}
