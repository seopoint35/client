import React from 'react'
import '../../assets/css/Login.css';
import image1 from '../../assets/images/cycle.jpg'

export default function Login() {
    return (
        <>
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

                                <form>
                                    <div className="inputDiv">
                                        <input type="text" required />
                                        <label>Email</label>
                                    </div>

                                    <div className="inputDiv">
                                        <input type="text" required />
                                        <label>password</label>
                                    </div>


                                    <div>
                                        <button>Login</button>
                                    </div>
                                </form>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
