import React, { useEffect } from 'react';
import '../../assets/css/NavBar.css';
import Logo from '../../assets/images/logo.png';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT } from '../../Store/Types/AuthTypes';



export default function NavBar() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { loading, LoginError, userDetails } = useSelector((state) => {
        return state.AuthReducer
    })


    const LogOUThandel = () => {
        localStorage.removeItem('userDetails')
        localStorage.removeItem('jwt');
        dispatch({ type: LOG_OUT })
       
    }

    return (
        <>
            <div className="NavBarContainer">
                <div className="MobileIcon">
                    <i className="fas fa-bars"></i>
                </div>

                <div className="LogoBox">
                    <NavLink to={'/'}>
                    <img src={Logo} />
                    </NavLink>
                </div>

                <div className="forSpace">

                </div>

                <div className="Notification">
                    <div className="NotificationIcon">
                        <i className="fas fa-bell"></i>
                    </div>

                    {/* Login Log out Buttton start */}
                    {userDetails.role ? <div className="LogOutButton"
                        onClick={LogOUThandel}
                    >
                        Logout
                    </div> : <div className="LoginButton">
                        <NavLink to="/Login"> Login</NavLink>

                    </div>}
                    {/* Login Log out Buttton End */}

                </div>

            </div>


        </>
    )
}
