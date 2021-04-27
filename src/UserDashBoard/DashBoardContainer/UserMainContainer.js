import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import '../../assets/css/AdminCss/AdminMainContainer.css'
import UserLeftPart from './UserLeftPart';


export default function UserMainContainer() {
    return (
        <>
            <NavBar />

            <div className="Admin-MainContainer">

                <div className="Admin-LeftPart">
                   <UserLeftPart />
                </div>

                <div className="Admin-CenterPart">
                    <h1>Center Part</h1>
                </div>

                <div className="Admin-RightPart">
                 
                </div>


            </div>

        </>
    )
}
