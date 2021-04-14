import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import '../../assets/css/Login.css';
import image1 from '../../assets/images/cycle.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../Store/Actions/AuthActions';
import GoogleAuth from '../SocalAuths/GoogleAuth';

export default function Login() {

    const dispatch = useDispatch();
    const { loading, LoginError ,userDetails } = useSelector((state) => {
        return state.AuthReducer
    })
    const [UserLogin, setUserLogin] = useState({

        email: "",
        password: ""
    })

    const handelChange = (e) => {
        setUserLogin({
            ...UserLogin,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        dispatch(LoginUser(UserLogin))
    }



    useEffect(() => {
        if (LoginError !== null) {
            toast.error(LoginError);
        }

        

    }, [LoginError , userDetails])

    return (
        <>

             {LoginError &&  <Toaster /> }

            <div className="Login-main-Container">
                <div className="innerContainer">
                    <div className="ImageBox">
                        <img src={image1} />
                    </div>

                    <div className="formBox">

                        <div className="innerFormBox">
                            <div className="formHeading">
                                <h1>Welcome Back Alexa</h1>
                                <p>you can use any mode </p>
                            </div>

                            <div className="mobileFormHeading">
                                <h1>Welcome Back Alexa</h1>
                                <p>Sing in to Continue</p>
                            </div>

                            <div className="formPart">

                                <form onSubmit={handelSubmit}>
                                    <div className="inputDiv">
                                        <input name="email" onChange={handelChange} type="text" required />
                                        <label>Email</label>
                                    </div>

                                    <div className="inputDiv">
                                        <input name="password" type="text" onChange={handelChange} required />
                                        <label>password</label>
                                    </div>


                                    <div>
                                        <button type="submit">{loading ? "...." : "LOGIN"}</button>
                                    </div>
                                </form>
                                 
                                 <div className="Dekstop_SocalAuth">
                                     <div className="SocalAuth_Title">
                                         <p>Login With</p>
                                     </div>

                                     <div className="SocalAuth_Type">
                                         <div className="SocalAuthBox">
                                              <GoogleAuth />
                                         </div>
                                      
                                     </div>
                                 </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
