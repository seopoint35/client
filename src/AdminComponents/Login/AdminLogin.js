import React, { useEffect, useState } from 'react';
import image1 from '../../assets/images/cycle.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAdmin } from '../../Store/AdminAction/AdminAuthActions';



export default function AdminLogin() {
    const dispatch = useDispatch();

    const [adminLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    const handelChange = (e) => {
        setUserLogin({
            ...adminLogin,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = async (e) => {
        console.log('submit')
        e.preventDefault();
        dispatch(LoginAdmin(adminLogin))
    }

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
                                <h1>Admin Login</h1>
                                <p>you can use any mode </p>
                            </div>

                            <div className="mobileFormHeading">
                                <h1>Welcome Back Alexa</h1>
                                <p>Sing in to Continue</p>
                            </div>

                            <div className="formPart">

                                <form onSubmit={handelSubmit}>
                                    <div className="inputDiv">
                                        <input name="email"  onChange={handelChange}type="text" required />
                                        <label>Email</label>
                                    </div>

                                    <div className="inputDiv">
                                        <input name="password" type="text" onChange={handelChange} required />
                                        <label>password</label>
                                    </div>


                                    <div>
                                        <button type="submit">LOGIN</button>
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
