
import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import  '../../assets/css/AdminCss/AdminMainContainer.css'
import AdminLeftPart from './AdminLeftPart';
import AdminRightPart from './AdminRightPart';
export default function MainConatiner() {
    return (
        <>
            <NavBar />

            <div className="Admin-MainContainer">
                  
                  <div className="Admin-LeftPart">
                     <AdminLeftPart />
                  </div>

                       
                  <div className="Admin-CenterPart">
                      <h1>Center Part</h1>
                  </div>

                  <div className="Admin-RightPart">
                       <AdminRightPart />
                  </div>


            </div>

        </>
    )
}
