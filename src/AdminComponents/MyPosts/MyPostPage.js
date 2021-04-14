import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import AdminLeftPart from '../AdminContainer/AdminLeftPart';
import AdminRightPart from '../AdminContainer/AdminRightPart';
import MyPosts from './MyPosts';


export default function MyPostPage() {
    return (
        <>
            <NavBar />
            <div className="Admin-MainContainer">

                <div className="Admin-LeftPart">
                    <AdminLeftPart />
                </div>


                <div className="Admin-CenterPart">
                  <MyPosts />
                </div>

                <div className="Admin-RightPart">
                    <AdminRightPart />
                </div>


            </div>
 
        </>
    )
}
