import React, { Component } from 'react'
import {placeInfo,news,detailInfo,reviews} from './Data'

const InfoContext = React.createContext()

class InfoProvider extends Component {
     constructor(){
          super();
          this.state = {
               info: placeInfo, 
               news: news,
               details: detailInfo,
               review: reviews,
          }
     }
     render() {
          return (
               <InfoContext.Provider value={{
                    info: this.state.info, 
                    news: this.state.news,
                    details: this.state.details,
                    review: this.state.review
                    }}>
                    {this.props.children}
               </InfoContext.Provider>
          )
     }
}

const InfoConsumer = InfoContext.Consumer; 


export {InfoProvider, InfoConsumer}