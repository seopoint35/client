import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import '../../assets/css/AdminCss/CreatePost.css';
import CardImage from '../../assets/images/modern-login-page-desig.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePost } from '../../Store/Actions/PostAction';
import { GET_SINGLE_POST_SUCCES, RESET_SINGLE_POST_SUCCES } from '../../Store/Types/PostType';



export default function MyPostEdit() {
    const { PostId } = useParams();
    const dispatch = useDispatch();
    //get the token from state
    const { singlePost, singlePostSucces } = useSelector((state) => {
        return state.PostReducer;
    });
    const [VocabName, setVocabName] = useState("")

    const handelChangeInput = (e) => {
        setVocabName(e.target.value)
    }

    useEffect(() => {
        if (singlePostSucces) {
            setVocabName(singlePost.VocabName)
            dispatch({ type: RESET_SINGLE_POST_SUCCES })
        } else {
            dispatch(SinglePost(PostId))
        }

    }, [singlePost])

    return (
        <>
            {/* create post Container Start */}
            <div className="CraetePost-Container">

                <form encType="multipart/form-data">
                    <div className="InputBox">
                        <input type="text" placeholder="write vocab name" onChange={handelChangeInput} value={VocabName} name="VocabName" />
                    </div>

                    <div className="Meme-upload-Actions">
                        <div className="custome-UplodBtn">
                            <input type="file"
                                filename="VocabImage"
                            />
                            <button><i className="fas fa-camera"></i></button>
                        </div>
                        <div className="Create-Meme">
                            <button type="submit">Create</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* create post Container End */}

            <div className="Show-PostContainer">
                <div className="Card-Container">
                    <div className="card-header">
                        <div className="card_header_avtar"> s </div>
                        <div className="card_header_name">{VocabName}</div>
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
            </div>

        </>
    )
}
