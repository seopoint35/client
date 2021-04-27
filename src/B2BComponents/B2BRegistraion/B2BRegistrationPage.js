import React, { useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import '../../assets/css/AdminCss/AdminMainContainer.css';
import B2BRegistration from './B2BRegistration';
import UserLeftPart from '../../UserDashBoard/DashBoardContainer/UserLeftPart';
import { useDispatch, useSelector } from 'react-redux';
import {GetAllB2BCatogery , GetAllB2BSubCatogery} from '../../Store/B2BActions/B2BAction';



export default function B2BRegistrationPage() {
    const dispatch = useDispatch();

    // Fecth all B2B Catogery
    useEffect(() => {
        console.log('get all catogery')

        dispatch(GetAllB2BCatogery())
        dispatch(GetAllB2BSubCatogery())
 
    },[])

    return (
        <>
            <NavBar />

            <div className="Admin-MainContainer">

                <div className="Admin-LeftPart">
                    <UserLeftPart />
                </div>

                <div className="Admin-CenterPart">
                    <B2BRegistration />
                </div>

                <div className="Admin-RightPart">

                </div>


            </div>

        </>
    )
}
