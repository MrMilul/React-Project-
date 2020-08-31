import React, { Component } from 'react'
import {placeInfo,news} from './Data'

const InfoContext = React.createContext()

class InfoProvider extends Component {
     constructor(){
          super();
          this.state = {
               place: placeInfo, 
               news: news
          }
     }
     render() {
          return (
               <InfoContext.Provider value={{
                    place: this.state.place, 
                    news: this.state.news
                    }}>
                    {this.props.children}
               </InfoContext.Provider>
          )
     }
}

const InfoConsumer = InfoContext.Consumer; 


export {InfoProvider, InfoConsumer}