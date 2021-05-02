import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SuperAdminLeftPart from './SuperAdminLeftPart'


export default function SuperDashBoard() {
    return (
        <>
            <NavBar />

            <div className="Admin-MainContainer">

                <div className="Admin-LeftPart">
                   <SuperAdminLeftPart />
                </div>

                <div className="Admin-CenterPart">
                    <h1>Only Super Admin exis This </h1>
                </div>

                <div className="Admin-RightPart">
                    <h1>Right</h1>  
                </div>


            </div>
        </>
    )
}
