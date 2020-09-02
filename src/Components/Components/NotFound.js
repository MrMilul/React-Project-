import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
     constructor(){
          super()
     }
     Home = () =>{
          this.props.history.push('/')
     }
     render() {
          return (
              
               <div className='container mt-5'>
                   <div class="card">
                         <div class="card-header text-danger"><h1>Page Not Found</h1></div>
                         <div class="card-body">
                         <h5 class="card-title ">Sorry, There is no such page</h5>
                         <button onClick={this.Home}class="btn btn-primary ">Home</button>
                         </div>
                    </div>
               </div>
              
          )
     }
}
