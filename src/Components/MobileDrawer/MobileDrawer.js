import React from 'react'
import '../../assets/css/MobileDrawer.css';
import { useDispatch, useSelector } from 'react-redux';
import pic from '../../assets/images/girl-1.jpg'
import { NavLink } from 'react-router-dom';

export default function MobileDrawer() {

    // Drawer Reducer
    const { drawer } = useSelector((state) => {
        return state.UtilesReducer
    })
    return (
        <>
            <div className={drawer ? "Mobile_Drawer_InnerContainer" : "Hide_Mobile_Drawer_InnerContainer"} >
                {/* user pic and name details start */}
                <div className="Drawer_user_Det">
                    <div className="Drawer_UserImage">
                        <div className="DrawerPic_box">
                            <img src={pic} />
                        </div>
                    </div>
                    <div className="Drawer_userName">
                        <h4> sakshi</h4>
                    </div>
                </div>
                {/* user pic and name details End */}

                {/* Drawer Feature List container Start */}
                <div className="Drawer_FeatureList_Container">

                    {/* Drawer features box start */}
                    <div className="Drawer_featureBox">
                        <div className="Feature_iconBox">
                      <span><i className="fas fa-braille"></i></span>
                       </div>
                        <div className="Feature_TitleBox">
                            <p>Vocab</p>
                        </div>
                    </div>
                    {/* Drawer features box End */}

                   {/* Drawer features box start */}
                   <div className="Drawer_featureBox">
                        <div className="Feature_iconBox">
                      <span><i className="fas fa-braille"></i></span>
                       </div>
                        <div className="Feature_TitleBox">
                            <NavLink to="/user-dashboard/B2B-Registration">
                            <p>B2B Registration</p>
                            </NavLink>
                            
                        </div>
                    </div>
                    {/* Drawer features box End */}

                      {/* Drawer features box start */}
                   <div className="Drawer_featureBox">
                        <div className="Feature_iconBox">
                      <span><i className="fas fa-braille"></i></span>
                       </div>
                        <div className="Feature_TitleBox">
                            <NavLink to="/b2b/B2B-all-Posts">
                            <p>B2B HOME</p>
                            </NavLink>
                           
                        </div>
                    </div>
                    {/* Drawer features box End */}

                </div>
                {/* Drawer Feature List conatiner End */}

                {/* Privacy Policy container start */}
                 <div className="Drawe_PolicyContiner">
                     {/* pravcey box start */}
                   <div className="Pravcy_optionBox">
                    <p>Notification Prefrence</p>
                   </div>
                   {/* pravcey box end */}
                    {/* pravcey box start */}
                    <div className="Pravcy_optionBox">
                    <p>Help Center</p>
                   </div>
                   {/* pravcey box end */}
                   {/* pravcey box start */}
                   <div className="Pravcy_optionBox">
                    <p>Privacy Police</p>
                   </div>
                   {/* pravcey box end */}
                    {/* pravcey box start */}
                    <div className="Pravcy_optionBox">
                    <p>Log Out</p>
                   </div>
                   {/* pravcey box end */}
                 </div>
                {/* Privacy Policy container End */}
            </div>

        </>
    )
}
