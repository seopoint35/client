import React, { useEffect, useState } from 'react';
import image1 from '../../assets/images/cycle.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { LoginSuperAdmin } from '../../Store/AdminAction/AdminAuthActions';



export default function SuperAdminLogin() {
    const dispatch = useDispatch();

    const [superadminLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    const handelChange = (e) => {
        setUserLogin({
            ...superadminLogin,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        dispatch(LoginSuperAdmin(superadminLogin))
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
                                <h1>Super Admin Login</h1>
                                <p>you can use any mode </p>
                            </div>

                            <div className="mobileFormHeading">
                                <h1>Super Admin Login</h1>
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
