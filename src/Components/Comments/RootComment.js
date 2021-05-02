import React, {  useState } from 'react'
import '../../assets/css/Comment.css';
import girl_1 from '../../assets/images/girl-1.jpg'
import UserCommentReply from './UserCommentReply';
import {  useSelector } from 'react-redux';


export default function RootComment(props) {
    const { elements, getRepyHandel } = props;
    const [ViewsReplyTogel, setViewsReplyTogel] = useState(false)
    const [CommentID, setCommentID] = useState("")

    const { PostComments } = useSelector((state) => {
        return state.PostReducer
    })


    const ReplayHandel = (comentid) => {
        setCommentID(comentid)
        //pass the comment Id
        getRepyHandel(comentid)
    }

    const TogelRelpyList = (comentid) => {
        setViewsReplyTogel(!ViewsReplyTogel);
        setCommentID(comentid)
    }




    const viewshowhandel = (comentid) => {
        let viewsCheck = Array.from(PostComments).filter((el) => {
            return el.responseTo == comentid;
        })
        if(viewsCheck.length > 0){
            return (
                <>
                <span> View {viewsCheck.length} Reply </span>
                </>
            )
        }else{

        }
    }

    return (
        <>
            {/* comment List Box Start */}
            <div className="Comment_List_Box">
                {/* user Comments pic start */}
                <div className="Comment_user_Image">
                    <img src={girl_1} alt="girl-1" />
                </div>
                {/* user Comments pic End */}

                <div className="Comment_Contents">
                    <h2>{elements.writer.firstName}</h2>
                    <p>{elements.content}</p>

                    {/* time likes Count Reply btn start */}
                    <div className="User_Comment_States">
                        <div className="Comment_Time">

                        </div>
                        {/* time likes Count Reply btn End */}
                        {/* <div className="User_CommentLikes">
                            <span>4</span> <span>Likes</span>
                        </div> */}

                        <div className="UserComments_Reply">
                            <p onClick={(e) => ReplayHandel(elements._id)}>Reply</p>
                        </div>

                    </div>
                    <div className="View_user_Reply">
                        <span onClick={() => TogelRelpyList(elements._id)}>{viewshowhandel(elements._id)}  </span>
                    </div>
                    {/* User Comment Reply BoxList Start */}

                    <UserCommentReply ViewsReplyTogel={ViewsReplyTogel} CommentID={CommentID} />

                    {/* User Comment Reply BoxList end */}
                </div>

                {/* <div className="User_Cooment_Like">
                    <i className="fas fa-heart"></i>
                </div> */}
            </div>
        </>
    )
}
