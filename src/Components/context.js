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
               reviews: reviews,
          }
     }
     getItem = (id) =>{
          const item = this.state.info.find(item => item.id === id)
          return item
     }
     handleDetail = (id) =>{
          const item = this.getItem(id)
          this.setState( () => {
               return{
                    details: item
               }
           
          })
     }
     render() {
          return (
               <InfoContext.Provider value={{
                    info: this.state.info, 
                    news: this.state.news,
                    details: this.state.details,
                    reviews: this.state.reviews, 
                    handleDetail: this.handleDetail
                    }}>
                    {this.props.children}
               </InfoContext.Provider>
          )
     }
}

const InfoConsumer = InfoContext.Consumer; 


export {InfoProvider, InfoConsumer}