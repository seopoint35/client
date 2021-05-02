
import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import '../../assets/css/AdminCss/AdminMainContainer.css'
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
                    <h1>This design of the website is in the form of a dummy design only. First I will complete all
                        the features of the website because it is not yet decided how to present  and for what purpose the user .</h1>
                </div>

                <div className="Admin-RightPart">
                    <AdminRightPart />
                </div>


            </div>

        </>
    )
}
