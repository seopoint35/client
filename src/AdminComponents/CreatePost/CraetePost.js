import React, { useEffect, useRef, useState } from 'react';
import '../../assets/css/AdminCss/CreatePost.css';
import CardImage from '../../assets/images/modern-login-page-desig.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { CreatePost } from '../../Store/Actions/PostAction';
import { RESET_POST_SUCESS } from '../../Store/Types/PostType';
import { Backdrop, CircularProgress, IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));



export default function CraetePost() {
    const classes = useStyles();
    const dispatch = useDispatch();
    //get the token from state
    const { token } = useSelector((state) => {
        return state.AuthReducer;
    });

    const { loading ,postMsg } = useSelector((state) => {
        return state.PostReducer;
    })
    const [open, setopen] = useState(false)

    const [postData, setpostData] = useState({
        VocabName: "",
        VocabImage: "",
        Alphabet: ""
    })

    const FileInputref = useRef(null)
    const [CurrentImage, setCurrentImage] = useState("")
    const [ImagePreview, setImagePreview] = useState(CardImage);


    // input vocab
    const handelChangeVocab = (e) => {
        let vacbeInput = e.target.value;

        let SpaceArray = vacbeInput.split(" ");
        let joinArray = SpaceArray.join("")
        let FirstLatter = joinArray.charAt(0).toUpperCase();

        setpostData({
            ...postData,
            VocabName: joinArray,
            Alphabet: FirstLatter
        })
    };



    // for targert file input
    const handelClick = (e) => {
        e.preventDefault();
        FileInputref.current.click();


    }

    const handelChange = (e) => {
        setpostData({
            ...postData,
            VocabImage: e.target.files[0]
        })
        console.log(e.target.files[0].name)
        // image Preview
        const reander = new FileReader();
        reander.onloadend = () => {
            setImagePreview(reander.result);
        }
        reander.readAsDataURL(e.target.files[0])
    }



    // create submit handel for post
    const PostSubmitHandel = (e) => {
        e.preventDefault();
        const { VocabName, VocabImage } = postData;
        
        const formData = new FormData();
        formData.append('VocabName', VocabName)
        formData.append('VocabImage', VocabImage)
        formData.append('Alphabet', Alphabet)

        console.log(formData)

        dispatch(CreatePost(formData, token))
    }

    //useEfect for error or succesMessage
    useEffect(() => {
        if (postMsg) {
            setopen(true)
            setpostData({
                VocabName: " "
            })
        }
      
    }, [postMsg , loading])

    // close snackbar
    const handleClose = () => {
        setopen(false)
    }


    const { VocabName, Alphabet } = postData;

    return (
        <>

            {/* error scalton start */}
            <Backdrop className={classes.backdrop} open={loading} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={6000}
                message={postMsg}

                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }

            />
            {/* Error scalton end */}

            {/* create post Container Start */}
            <div className="CraetePost-Container">

                <form encType="multipart/form-data">
                    <div className="InputBox">
                        <input type="text" placeholder="write vocab name" name="VocabName" value={VocabName} onChange={handelChangeVocab} />
                    </div>

                    <div className="Meme-upload-Actions">
                        <div className="custome-UplodBtn">
                            <input type="file"
                                filename="VocabImage"
                                ref={FileInputref}
                                onChange={handelChange}
                            />
                            <button onClick={handelClick}><i className="fas fa-camera"></i></button>
                        </div>
                        <div className="Create-Meme">
                            {loading ? "Loading..." :  <button  onClick={PostSubmitHandel} type="submit">Create</button>  }
                           
                        </div>
                    </div>
                </form>
            </div>
            {/* create post Container End */}

            <div className="Show-PostContainer">
                <div className="Card-Container">
                    <div className="card-header">
                        <div className="card_header_avtar"> {Alphabet} </div>
                        <div className="card_header_name">{VocabName}</div>
                    </div>
                    <div className="Card_image">
                        <img src={ImagePreview} />
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
