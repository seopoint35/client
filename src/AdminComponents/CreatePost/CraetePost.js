import React, { useRef, useState } from 'react'
import '../../assets/css/AdminCss/CreatePost.css';
import CardImage from '../../assets/images/modern-login-page-desig.jpg';


export default function CraetePost() {
    const [vacabName, setvacabName] = useState("")
    const FileInputref = useRef(null)
    const [CurrentImage, setCurrentImage] = useState("")
    const [ImagePreview, setImagePreview] = useState(CardImage);
    const [FiratLatterCapital, setFiratLatterCapital] = useState("")

    const handelChangeVocab = (e) => {
        let vacbeInput = e.target.value;

        let SpaceArray = vacbeInput.split(" ");
        let joinArray = SpaceArray.join("")
        let FirstLatter = joinArray.charAt(0).toUpperCase();
        setFiratLatterCapital(FirstLatter)
        setvacabName(joinArray)
    }


    const handelClick = () => {
        FileInputref.current.click();
    }

    const handelChange = (e) => {
        setCurrentImage(e.target.files[0].name);
        // image Preview
        const reander = new FileReader();
        reander.onloadend = () => {
            setImagePreview(reander.result);
        }
        reander.readAsDataURL(e.target.files[0])
    }

    return (
        <>
            <div className="CraetePost-Container">

                <div className="InputBox">
                    <input type="text" placeholder="write Vocab name" value={vacabName} onChange={handelChangeVocab} />
                </div>

                <div className="Meme-upload-Actions">
                    <div className="custome-UplodBtn">
                        <input type="file"
                            ref={FileInputref}
                            onChange={handelChange}
                        />
                        <button onClick={handelClick}><i className="fas fa-camera"></i></button>
                    </div>
                    <div className="Create-Meme">
                        <button>Create</button>
                    </div>
                </div>

            </div>

            <div className="Show-PostContainer">
                <div className="Card-Container">
                    <div className="card-header">
                        <div className="card_header_avtar"> {FiratLatterCapital} </div>
                        <div className="card_header_name">{vacabName}</div>
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
