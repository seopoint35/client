import React, { useEffect, useState } from 'react'
import '../../assets/css/Comment.css';
import girl_1 from '../../assets/images/girl-1.jpg'
import girl_2 from '../../assets/images/girl-2.jpg'
import girl_3 from '../../assets/images/girl-3.jpeg'
import girl_4 from '../../assets/images/girl-4.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { GetPostComments ,PostComment } from '../../Store/Actions/PostAction';
import { useParams } from 'react-router';

export default function Comments() {
    const dispatch = useDispatch();
    const { PostId } = useParams();
    const { PostComments } = useSelector((state) => {
        return state.PostReducer
    })

    // state

    const [content, setcontent] = useState(" ")


    const HandelChange = (e) => {
        const CommentContent = e.target.value;
        setcontent(CommentContent)
    }



    const SubmitCommentHandel =()=>{
        dispatch(PostComment(PostId ,content ))
    }

    useEffect(() => {
        dispatch(GetPostComments(PostId))
    }, [])

    return (
        <>
            {/* Cooment Nav bar start */}
            <div className="Comment-NavBar">
                {/* Comment Back Arrow start */}
                <div className="Comment_Back_Arrow">
                    <span><i className="fas fa-arrow-left"></i></span>
                </div>
                {/* Comment Back Arrow End */}
                {/* Comments Nav Title start */}
                <div className="Cooment_NavTitle">
                    <h2>Comments</h2>
                </div>
                {/* Comments Nav Title End */}

                <div className="comment_Share_icon">
                    <span><i className="fas fa-location-arrow"></i></span>
                </div>
            </div>
            {/* Cooment Nav bar End */}




            <div className="Comment_Container">

                {PostComments.map((elements) => {
                    return (
                        <>
                            {/* comment List Box Start */}
                            <div key={elements._id} className="Comment_List_Box">
                                {/* user Comments pic start */}
                                <div className="Comment_user_Image">
                                    <img src={girl_1} alt="girl-1" />
                                </div>
                                {/* user Comments pic End */}

                                <div className="Comment_Contents">
                                    <h2>{elements.writer.firstName}</h2>
                                    <p>{elements.content}</p>
                                </div>

                                <div className="User_Cooment_Like">
                                    <i className="fas fa-heart"></i>
                                </div>
                            </div>
                            {/* user Comments pic End */}
                        </>
                    )
                })}

            </div>

            {/* Cooment Input start */}
            <div className="Comment_Post_Input">

                {/* commannt post user pic start */}
                <div className="Comment_PostInput_user">
                    <i className="fas fa-user-circle"></i>
                </div>
                {/* commannt post user pic End */}

                <div className="Comment_postFormBox">
                    <form>
                        <input type="text" name="content" onChange={HandelChange} placeholder="Add a Comment..." />
                    </form>
                </div>

                <div className="CoomentPost_btnBox">
                    <button onClick={SubmitCommentHandel}>Post</button>
                </div>
            </div>

            {/* comment Input End */}

        </>
    )
}
