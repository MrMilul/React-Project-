import React from 'react'

export default function Footer() {
     return (
          <div>
               <div className="main-footer">
               <div className="container">
               <div className="row">
                    {/* Column1 */}
                    <div className="col-sm-6 col-md-3">
                         <h4>First Column</h4>
                         <ul className='list-unstyled'>
                              <li>Add +</li>
                              <li>Add +</li>
                              <li>Add +</li>
                              <li>Add +</li>
                         </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 col-md-3">
                         <h4>Second Column</h4>
                         <ul className='list-unstyled'>
                              <li>Add +</li>
                              <li>Add +</li>
                              <li>Add +</li>
                              <li>Add +</li>
                         </ul>
                         
                    </div>
                     {/* Column 2 */}
                     <div className="col-sm-6 col-md-3">
                         <h4>Third Column</h4>
                         <ul className='list-unstyled'>
                              <li>Add +</li>
                              <li>Add +</li>
                              <li>Add +</li>
                              <li>Add +</li>
                         </ul>
                         
                    </div>
               </div>
               <div className="text-xs-center">
               &copy;{new Date().getFullYear()} "Add here you copy right"
             </div>
               </div>
            
               </div>

          </div>
     )
}
