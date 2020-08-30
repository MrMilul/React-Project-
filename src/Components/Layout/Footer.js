import React from 'react'

export default function Footer() {
     return (
          <div>
               <div className="main-footer bg-dark mt-5">
               <div className="container">
               <div className="row" style={FooterStyele}>
                    {/* Column1 */}
                    <div className="col-sm-6 col-md-4" >
                         <h4>Contact Us</h4>
                         <ul className='list-unstyled'>
                             <li> <i class="fas fa-phone-volume"></i>&nbsp;+98745512</li>
                              <li><i class="far fa-envelope"></i>&nbsp;examole@company.com</li>
                              <li><i class="fas fa-street-view"></i>&nbsp;<a href='#'>Address</a></li>
                              <li><i class="fas fa-question"></i>&nbsp;<a href='#'>FQA</a></li>
                              
                         </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col-sm-6 col-md-4">
                         <h4>Frist Column</h4>
                         <ul className='list-unstyled'>
                              <li><a href='#'>Add +</a></li>
                              <li><a href='#'>Add +</a></li>
                              <li><a href='#'>Add +</a></li>
                              <li><a href='#'>Add +</a></li>
                         </ul>
                         
                    </div>
                     {/* Column 3 */}
                     <div className="col-sm-6 col-md-4">
                         <h4>Second</h4>
                         <ul className='list-unstyled'>
                              <li><a href='#'>Add +</a></li>
                              <li><a href='#'>Add +</a></li>
                              <li><a href='#'>Add +</a></li>
                              <li><a href='#'>Add +</a></li>
                         </ul>
                         </div>
                    <div className="text-xs-center col-12 mt-5">
                          &copy;{new Date().getFullYear()} "Add here your copy right"
                    </div>
               </div>
              
               </div>
            
               </div>

          </div>
     )
}

const FooterStyele = {
     padding: '3rem',
     color: 'white',
}