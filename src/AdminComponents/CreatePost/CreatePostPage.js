import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import AdminLeftPart from '../AdminContainer/AdminLeftPart';
import AdminRightPart from '../AdminContainer/AdminRightPart';
import CraetePost from './CraetePost';

export default function CreatePostPage() {
    return (
        <>

            <NavBar />
            <div className="Admin-MainContainer">

                <div className="Admin-LeftPart">
                    <AdminLeftPart />
                </div>


                <div className="Admin-CenterPart">
                    <CraetePost />
                </div>

                <div className="Admin-RightPart">
                    <AdminRightPart />
                </div>


            </div>

        </>
    )
}
