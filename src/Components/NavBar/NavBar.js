import React from 'react';
import '../../assets/css/NavBar.css';
import Logo from '../../assets/images/logo.png';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


export default function NavBar() {
    const { loading, LoginError ,userDetails } = useSelector((state) => {
        return state.AuthReducer
    })



    return (
        <>
            <div className="NavBarContainer">

                <div className="MobileIcon">
                <i className="fas fa-bars"></i>
                </div>

                <div className="LogoBox">
                    <img src={Logo} />
                </div>

                <div className="forSpace">

                </div>

                <div className="Notification">
                    <div className="NotificationIcon">
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className="LoginButton">
                        {userDetails.role ?   <NavLink to="/Login"> Logout</NavLink> :   <NavLink to="/Login"> Login</NavLink>}
                      
                    </div>
                </div>

            </div>


        </>
    )
}
