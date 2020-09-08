import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import { Link } from "react-router-dom"

export default class NewsCard extends Component {
     render() {
          const { id, newsTitle, newsText } = this.props.items
          return (
               <InfoConsumer>
                    {value => (
                         <div className="card container mt-2">

                              <div className="card-body">
                                   <h5 key={id} className="card-title">{newsTitle}</h5>
                                   <p className="card-text">{newsText}</p>
                                   <Link to="/" className="btn btn-primary">See More</Link>
                              </div>
                         </div>
                    )}
               </InfoConsumer>
          )
     }
}
