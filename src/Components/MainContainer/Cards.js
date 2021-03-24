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
                  <i className="fas  fa-heart"></i>
                  </div>

                  <div className="card-Comment action">
                  <i className="far fa-comment"></i>
                  </div>
                  <div className="card-share action">
                  <i className="fas fa-share-square"></i>
                  </div>
               </div>
               <div className="LikesCount">
                  <span>4324 </span> likes
               </div>
               <div className="viewAllComments">
                 <p>view all <span>59</span> comments</p>
               </div>
               <div className="addComent">
                 <div className="userPic">
                    <img src={CardImage} />
                 </div>
                 <div>
                     Add a Comment...
                 </div>
               </div>
            </div>
        </>
    )
}
