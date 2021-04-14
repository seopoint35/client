import React from 'react';
import '../../../assets/css/AdminCss/LeftDrawer.css';
import girl_1 from '../../../assets/images/girl-1.jpg'
import { NavLink, withRouter } from 'react-router-dom'


 function LeftDrawer() {


    return (
        <>
            <div className="Left_DrawerContainer">  
            <div className="Left_Drawer">
                {/* user details top Box start */}
                <div className="Drawer_user_detContainer">
                    <div className="Top_CenterContainer">
                        {/* image part start */}
                            <div className="Drawer_InnerImage_Box">
                                <div className="Top_ImageBox">
                                <img src={girl_1} alt="girl_1" />
                                </div>
                            </div>
                            {/* image part End */}
                            {/* User Name part start */}
                            <div className="Draer_top_UserName">
                                <h1>Arushi</h1>
                            </div>
                            {/* User Name part start */}
                    </div>
                </div>

                {/* user details top Box End */}

                <div className="DrawerList_Options">
                     
                      {/* opetins list start */}
                      <NavLink exact   to='/admin-dashboard'  activeStyle={{color: "red"}} >
                      <div className="Drawer_Options">
                           <h2>Dash Board</h2>
                       </div>
                       </NavLink>
                       <NavLink exact  to='/admin-dashboard/create-post'  activeStyle={{color: "red"}} > 
                       <div className="Drawer_Options">
                           <h2>Craete Post</h2>
                       </div>
                       </NavLink>

                       <NavLink exact  to='/admin-dashboard/my-posts'  activeStyle={{color: "red"}} > 
                       <div className="Drawer_Options">
                           <h2>My posts</h2>
                       </div>
                       </NavLink>
                      {/* opetins list End */}

                </div>


            </div>
            </div>

        </>
    )
}


export default withRouter(LeftDrawer)



{/* <NavLink to={'/admin-dashboard/create-post'} >
                Create post
               </NavLink>

               <NavLink to={'/admin-dashboard'}>DashBoard</NavLink> */}


            //   