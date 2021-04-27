import React, { useRef } from 'react'
import '../../assets/css/Cards.css';
import CardImage from '../../assets/images/modern-login-page-desig.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { LikesAction, UnLikeAction } from '../../Store/Actions/PostAction';
import { NavLink } from 'react-router-dom';
import { CLOSE_DRAWER } from '../../Store/Types/UtilesType'
import { Paper } from '@material-ui/core';

export default function Cards(props) {
   const dispatch = useDispatch();
   const { userDetails } = useSelector((state) => {
      return state.AuthReducer
   })
   const { allComments, loading } = useSelector((state) => {
      return state.PostReducer
   })
   const { AllPost } = props;
   const { VocabName, VocabImage, _id, Likes, Alphabet } = AllPost;


   const IconLike = () => {
      if (Likes.includes(userDetails.UserId)) {
         return (
            <>
               <i className="fas fa-heart Fill_Heart" onClick={() => dispatch(UnLikeAction(_id))}></i>
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


   // views all Comments
   const ViewsAllComment = (postid) => {
      let viewAllComents = Array.from(allComments).filter((elem) => {
         return elem.postId == postid
      })
      if (viewAllComents.length > 0) {
         return (
            <>
               <p>View all <span>{viewAllComents.length} Comments</span></p>
            </>
         )
      } else {
         return (
            <>
               <p>No comments on post</p>
            </>
         )
      }
   }

   return (
      <>
         <Paper className="Card-Container"  >
            <div className="card-header">
               <div className="card_header_avtar">{Alphabet}</div>
               <div className="card_header_name">{VocabName}</div>
            </div>
            <div className="Card_image">
               <img src={`/Uplodes/${VocabImage}`} />
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
               <NavLink to={`/post-comments/${_id}`}><p>{ViewsAllComment(_id)}</p></NavLink>
            </div>
            <div className="addComent">
               <div className="userPic">
                  <img src={CardImage} />
               </div>
               <div>
                  <NavLink to={`/post-comments/${_id}`}>  Add a Comment... </NavLink>
               </div>
            </div>
         </Paper>
      </>
   )
}
