import React from 'react'
import '../../assets/css/Cards.css';
import CardImage from '../../assets/images/modern-login-page-desig.jpg'
export default function Cards() {
    return (
        <>
            <div className="Card-Container">
               <div className="card-header">
                  <div className="card_header_avtar">  S</div>
                  <div className="card_header_name">Sandeep</div>
               </div>
               <div className="Card_image">
                 <img src={CardImage} />
               </div>
               <div className="Card-Actions">
                  <div className="card-like action ">
                  <i class="fas fa-heart"></i>
                  </div>

                  <div className="card-Comment action">
                  <i class="far fa-comment"></i>
                  </div>
                  <div className="card-share action">
                  <i class="fas fa-share-square"></i>
                  </div>
               </div>
            </div>
        </>
    )
}
