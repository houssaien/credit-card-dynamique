import React from 'react';

import master from './master.png';

import puce from './puce3.png';
import './card.css'

const Card=({news, news2, news3})=>{

    

        return (

            <div className='carte'>

              <div className="credit__bank">

                    <h1>Company Name</h1>
                   
                </div>

                <img  src={puce} className="visa-puce" />

                <div className="credit-card-number">

                    <h3>{news}</h3>

                </div>

             

                <div class="flex-container">
 

                <div className="credit__name"> {news2}</div>

                <div className="credit__date">  {news3}</div>
                  <div> <img  src={master} className="visa-page" /></div>
                   </div>

                

            </div> 

         );

    }

 

export default Card;