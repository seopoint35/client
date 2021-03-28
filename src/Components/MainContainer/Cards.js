import React from 'react'
import '../../assets/css/Cards.css';
import CardImage from '../../assets/images/modern-login-page-desig.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { LikesAction , UnLikeAction} from '../../Store/Actions/PostAction';
import { NavLink } from 'react-router-dom';


export default function Cards(props) {
   const dispatch = useDispatch();
   const { userDetails } = useSelector((state) => {
      return state.AuthReducer
   })
   const { loading } = useSelector((state) => {
      return state.PostReducer
   })
   const { AllPost } = props;
   const { VocabName, VocabImage, _id, Likes } = AllPost;


   const IconLike = () => {
      if (Likes.includes(userDetails.UserId)) {
         return (
            <>
               <i class="fas fa-heart Fill_Heart"  onClick={() => dispatch(UnLikeAction(_id))}></i>
             
            </>
         )
      } else {

         return (
            <>
               <i className="far fa-heart  Unfill_Heart" onClick={() => dispatch(LikesAction(_id))}></i>
            </>
         )
      }
   }



   return (
      <>
         <div className="Card-Container">
            <div className="card-header">
               <div className="card_header_avtar">  S</div>
               <div className="card_header_name">{VocabName}</div>
            </div>
            <div className="Card_image">
               <img src={require(`../../assets/Uplodes/${VocabImage}`)} />
            </div>
            <div className="Card-Actions">
               <div className="card-like action ">

                  {IconLike()}
               </div>

               <div className="card-Comment action">
                  <i className="far fa-comment"></i>
               </div>
               <div className="card-share action">
                  <i className="fas fa-share-square"></i>
               </div>
            </div>
            <div className="LikesCount">
               <span>{Likes.length > 0 ? Likes.length : "0"} </span> likes
               </div>
            <div className="viewAllComments">
               <p>view all <span>59</span> comments</p>
            </div>
            <div className="addComent">
               <div className="userPic">
                  <img src={CardImage} />
               </div>
               <div>
                  <NavLink to={`/post-comments/${_id}`}>  Add a Comment... </NavLink>
                 </div>
            </div>
         </div>
      </>
   )
}
