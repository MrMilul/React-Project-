import React, { Component } from 'react'
import NewsCard from './newscard';
import { InfoConsumer } from '../context';

export default class News extends Component {
     render() {
          return (
              <InfoConsumer>
                   {value => {
                        return value.news.map(items => {
                             return <NewsCard key={items.id} items={items}/>
                        })
                   }}
              </InfoConsumer>
          )
     }
}
