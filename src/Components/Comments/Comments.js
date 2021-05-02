import React, { useEffect, useState, useRef } from 'react'
import '../../assets/css/Comment.css';
import girl_1 from '../../assets/images/girl-1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { GetPostComments, PostComment } from '../../Store/Actions/PostAction';
import { useHistory, useParams } from 'react-router';
import RootComment from './RootComment';
import { UserCommentReplyAction } from '../../Store/Actions/PostAction';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';



export default function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { PostId } = useParams();
    
    // snakbar state
    const [open, setopen] = useState(false)

    const { PostComments, } = useSelector((state) => {
        return state.PostReducer
    })

    const { token, } = useSelector((state) => {
        return state.AuthReducer
    })

    // state
    const [content, setcontent] = useState(" ")
    const [CommentID, setCommentID] = useState("")
    const [replybtn, setreplybtn] = useState(false)

    const HandelChange = (e) => {
        const CommentContent = e.target.value;
        setcontent(CommentContent)
    }

    const [ReplyTo, setReplyTo] = useState({
        content: "",
        responseTo: CommentID
    })

    const RefreshComment = () => {
        setcontent(" ") // Input field is not clear Error
        dispatch(GetPostComments(PostId))
    }

    //  Back to Home
    const handelBack = () => {
        history.push('/')
    }

    const SubmitCommentHandel = () => {
        dispatch(PostComment(PostId, content, RefreshComment))
    }
    useEffect(() => {
        dispatch(GetPostComments(PostId))

    }, [])


    // GET Reply Handel
    const getRepyHandel = (comentid) => {
        setCommentID(comentid)
        setreplybtn(!replybtn)
    }

    const ReplyHandel = (e) => {
        const inputValue = e.target.value;
        setReplyTo({
            ...ReplyTo,
            content: inputValue,
            responseTo: CommentID
        })
    }

    const submitRepyToHandel = (e) => {
        e.preventDefault()
        console.log('cliked')
        dispatch(UserCommentReplyAction(PostId, ReplyTo))
    }

    // open snakbar 
    const ShowLoginMsg = () => {
        setopen(true)
    }
    // close snackbar
    const handleClose = () => {
        setopen(false)
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <SnackbarContent style={{
                    color: "#fff",
                    fontSize: "1.6rem"
                }}
                    message={<span id="client-snackbar">Please Login first</span>}
                />
            </Snackbar>


            {/* Cooment Nav bar start */}
            <div className="Comment-NavBar">
                {/* Comment Back Arrow start */}
                <div className="Comment_Back_Arrow" onClick={handelBack}>
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



             <div className="Comment_mainContainer">
            <div className="Comment_Container">

                <div className="Dekstop_image">
                    <div className="DekstopIMageBox">
                        <img src={girl_1} />
                    </div>

                </div>

                <div className="Dekstop_Comment_List">

                    <div className="Dekstop_backBtn">
                        <span onClick={handelBack}>x</span>
                    </div>
                    <div className="DekstopList-container">
                        {PostComments && PostComments.map((elements, index) => {
                            return (
                                <>
                                    {(!elements.responseTo &&
                                        <RootComment getRepyHandel={getRepyHandel} key={index} elements={elements} />
                                    )}

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
                            <div className={replybtn ? "Hide_Cooment_To_Post" : "Cooment_To_Post"}>
                                <form>
                                    <input type="text" name="content" onChange={HandelChange} placeholder="Add a Comment..." />
                                </form>
                            </div>

                            <div className={replybtn ? "Reply_To_reply" : "Hide_Reply_To_reply"}>
                                <input type="text" placeholder="Reply on this comment" onChange={ReplyHandel} />
                            </div>

                        </div>

                        <div className="CoomentPost_btnBox">
                            <div className={replybtn ? "Hide_Commnetbtn" : "Comment_btn"}>
                                <button onClick={token ? SubmitCommentHandel : ShowLoginMsg} >Post</button>
                            </div>

                            <div className={replybtn ? "Comment_btn" : "Hide_Commnetbtn"}>
                                <button onClick={token ? submitRepyToHandel : ShowLoginMsg} >Reply To</button>
                            </div>

                        </div>
                    </div>
                    {/* comment Input End */}


                </div>


            </div>
            </div>


        </>
    )
}
