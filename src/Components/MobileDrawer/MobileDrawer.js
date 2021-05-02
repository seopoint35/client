import React, { useEffect, useState } from 'react';
import '../../assets/css/MobileDrawer.css';
import { useDispatch, useSelector } from 'react-redux';
import pic from '../../assets/images/girl-1.jpg'
import { NavLink } from 'react-router-dom';
import { Paper, SwipeableDrawer } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BusinessIcon from '@material-ui/icons/Business';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import {WINDOW_DRAWER} from '../../Store/Types/UtilesType'

export default function MobileDrawer() {
    // Drawer Reducer
    const { drawer } = useSelector((state) => {
        return state.UtilesReducer
    })
    const dispatch = useDispatch();
   


    useEffect(() => {
        const UpdateWidth = () => {
            if (window.innerWidth > 360) {
                dispatch({ type: WINDOW_DRAWER })
            }
        }

        window.addEventListener('resize', UpdateWidth)
        // console.log('run useEffect 1')
        return () => window.removeEventListener("resize", UpdateWidth);
    })

    return (
        <>

            <SwipeableDrawer
                anchor="left"
                open={drawer || false}
            >
                <div className="MobileDrawer">
                   
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
                   
                </div>
               
                <div className="Drawer_FeatureList_Container">

                 
                    <div className="Drawer_featureBox">
                        <div className="Feature_iconBox">
                         
                            <MenuBookIcon fontSize="large" color="primary" />
                        </div>
                        <div className="Feature_TitleBox">
                            <p>Vocab</p>
                        </div>
                    </div>
                    
                    <div className="Drawer_featureBox">
                        <div className="Feature_iconBox">
                           <BusinessIcon fontSize="large" color="primary" />
                        </div>
                        <div className="Feature_TitleBox">
                            <NavLink to="/user-dashboard/B2B-Registration">
                                <p>B2B Registration</p>
                            </NavLink>

                        </div>
                    </div>
                 
                    <div className="Drawer_featureBox">
                        <div className="Feature_iconBox">
                          <BusinessCenterIcon  fontSize="large" color="primary"/>
                        </div>
                        <div className="Feature_TitleBox">
                            <NavLink to="/b2b/B2B-all-Posts">
                                <p>B2B HOME</p>
                            </NavLink>

                        </div>
                    </div>
                  
                </div>
             
                <div className="Drawe_PolicyContiner">
                   
                    <div className="Pravcy_optionBox">
                        <p>Notification Prefrence</p>
                    </div>
                  
                    <div className="Pravcy_optionBox">
                        <p>Help Center</p>
                    </div>
                    
                    <div className="Pravcy_optionBox">
                        <p>Privacy Police</p>
                    </div>
                   
                    <div className="Pravcy_optionBox">
                        <p>Log Out</p>
                    </div>
                   
                </div>
                

            </SwipeableDrawer>


        </>
    )
}


