import React from 'react'
import girl_4 from '../../assets/images/girl-4.jpg';
import { useDispatch, useSelector } from 'react-redux';

export default function UserCommentReply(props) {
    const { ViewsReplyTogel,  CommentID } = props;
    
    const { PostComments } = useSelector((state) => {
        return state.PostReducer
    })



    return (
        <>
            {PostComments && PostComments.map((replyComment, index) => {

                return (
                    <>
                        {(replyComment.responseTo === CommentID &&
                            <div key={index} className={ViewsReplyTogel ? "User_Comment_ReplyBoxList" : "hide_User_Comment_ReplyBoxList"}>
                                {/* user Comment Relpy List start */}
                                <div className="InnerUser_Comment_ReplyBoxList" >
                                    <div className="Comment_userImage">
                                        <img src={girl_4} alt="girl-1" />
                                    </div>

                                    <div className="Reply_content">
                                        <h2>{replyComment.writer.firstName}</h2>
                                        <p>{replyComment.content}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )
            })}


         


        </>
    )
}
