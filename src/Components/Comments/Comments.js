import React from 'react'
import '../../assets/css/Comment.css';
import girl_1 from '../../assets/images/girl-1.jpg'
import girl_2 from '../../assets/images/girl-2.jpg'
import girl_3 from '../../assets/images/girl-3.jpeg'
import girl_4 from '../../assets/images/girl-4.jpg'


export default function Comments() {
    return (
        <>
            {/* Cooment Nav bar start */}
            <div className="Comment-NavBar">
                {/* Comment Back Arrow start */}
                <div className="Comment_Back_Arrow">
                    <span><i className="fas fa-arrow-left"></i></span>
                </div>
                {/* Comment Back Arrow End */}
                {/* Comments Nav Title start */}
                <div className="Cooment_NavTitle">
                    <h2>Comments</h2>
                </div>
                {/* Comments Nav Title End */}

                <div className="comment_Share_icon">
                    <span><i className="fas fa-location-arrow"></i></span>
                </div>
            </div>
            {/* Cooment Nav bar End */}

            <div className="Comment_Container">
                {/* comment List Box Start */}
                <div className="Comment_List_Box">
                    {/* user Comments pic start */}
                    <div className="Comment_user_Image">
                        <img src={girl_1} alt="girl-1" />
                    </div>
                    {/* user Comments pic End */}

                    <div className="Comment_Contents">
                        <h2>Rohani</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
                             unde facilis eum velit mollitia temporibus harum maiores facere ut.</p>
                    </div>

                    <div className="User_Cooment_Like">
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
                {/* user Comments pic End */}

                <div className="Comment_List_Box">
                    {/* user Comments pic start */}
                    <div className="Comment_user_Image">
                        <img src={girl_2} alt="girl-1" />
                    </div>
                    {/* user Comments pic End */}

                    <div className="Comment_Contents">
                        <h2>shrya</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
                             unde facilis eum velit mollitia temporibus harum maiores facere ut.</p>
                    </div>

                    <div className="User_Cooment_Like">
                        <i className="far fa-heart"></i>
                    </div>
                </div>
                {/* comment List Box End */}

                <div className="Comment_List_Box">
                    {/* user Comments pic start */}
                    <div className="Comment_user_Image">
                        <img src={girl_3} alt="girl-1" />
                    </div>
                    {/* user Comments pic End */}

                    <div className="Comment_Contents">
                        <h2>Pryanka</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
                             unde facilis eum velit mollitia temporibus harum maiores facere ut.</p>
                    </div>

                    <div className="User_Cooment_Like">
                        <i className="far fa-heart"></i>
                    </div>
                </div>


                <div className="Comment_List_Box">
                    {/* user Comments pic start */}
                    <div className="Comment_user_Image">
                        <img src={girl_4} alt="girl-1" />
                    </div>
                    {/* user Comments pic End */}

                    <div className="Comment_Contents">
                        <h2>Nisha</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
                             unde facilis eum velit mollitia temporibus harum maiores facere ut.</p>
                    </div>

                    <div className="User_Cooment_Like">
                        <i className="far fa-heart"></i>
                    </div>
                </div>


                <div className="Comment_List_Box">
                    {/* user Comments pic start */}
                    <div className="Comment_user_Image">
                        <img src={girl_2} alt="girl-1" />
                    </div>
                    {/* user Comments pic End */}

                    <div className="Comment_Contents">
                        <h2>Kajal</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
                             unde facilis eum velit mollitia temporibus harum maiores facere ut.</p>
                    </div>

                    <div className="User_Cooment_Like">
                        <i className="far fa-heart"></i>
                    </div>
                </div>


                <div className="Comment_List_Box">
                    {/* user Comments pic start */}
                    <div className="Comment_user_Image">
                        <img src={girl_1} alt="girl-1" />
                    </div>
                    {/* user Comments pic End */}

                    <div className="Comment_Contents">
                        <h2>Vaani</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
                             unde facilis eum velit mollitia temporibus harum maiores facere ut.</p>
                    </div>

                    <div className="User_Cooment_Like">
                        <i className="far fa-heart"></i>
                    </div>
                </div>

                <div className="Comment_List_Box">
                    {/* user Comments pic start */}
                    <div className="Comment_user_Image">
                        <img src={girl_1} alt="girl-1" />
                    </div>
                    {/* user Comments pic End */}

                    <div className="Comment_Contents">
                        <h2>mimi</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
                             unde facilis eum velit mollitia temporibus harum maiores facere ut.</p>
                    </div>

                    <div className="User_Cooment_Like">
                        <i className="far fa-heart"></i>
                    </div>
                </div>

                <div className="Comment_List_Box">
                    {/* user Comments pic start */}
                    <div className="Comment_user_Image">
                        <img src={girl_1} alt="girl-1" />
                    </div>
                    {/* user Comments pic End */}

                    <div className="Comment_Contents">
                        <h2>Rohani</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
                             unde facilis eum velit mollitia temporibus harum maiores facere ut.</p>
                    </div>

                    <div className="User_Cooment_Like">
                        <i className="far fa-heart"></i>
                    </div>
                </div>
                <div className="Comment_List_Box">
                    {/* user Comments pic start */}
                    <div className="Comment_user_Image">
                        <img src={girl_1} alt="girl-1" />
                    </div>
                    {/* user Comments pic End */}

                    <div className="Comment_Contents">
                        <h2>Rohani</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
                             unde facilis eum velit mollitia temporibus harum maiores facere ut.</p>
                    </div>

                    <div className="User_Cooment_Like">
                        <i className="far fa-heart"></i>
                    </div>
                </div>


            </div>
       
          {/* Cooment Input start */}
            <div className="Comment_Post_Input">
                
                {/* commannt post user pic start */}
                <div className="Comment_PostInput_user">
                <i className="fas fa-user-circle"></i>
                </div>
                 {/* commannt post user pic End */}

                 <div className="Comment_postFormBox">
                   <form>
                       <input type="text" placeholder="Add a Comment..."  />
                   </form>
                 </div>

                 <div className="CoomentPost_btnBox">
                     <button>Post</button>
                 </div>
            </div>

          {/* comment Input End */}
       
        </>
    )
}
