import React, { Component } from 'react'
import {InfoConsumer} from '../context';
import ReviewCard from './reviewcard'

export default class Review extends Component {
     render() {
          return (
              <InfoConsumer>
                   {value => {
                        return value.reviews.map(person =>{
                             return <ReviewCard key={person.id} person={person}/>
                        })
                   }}
                   

              </InfoConsumer>
          )
     }
}
