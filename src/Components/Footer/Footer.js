import React from 'react'
import '../../assets/css/footer.css';
import Logo from '../../assets/images/logo.png';
import { NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footerContainer">
                    {/* Copywright part start */}
                    <div className="copyright">
                        <div className="imageCenter">
                            <div className="footerLogo">
                                <img src={Logo} />
                            </div>
                            <div className="CopyWrightName">
                                <p>  <span>&copy; 2021 Sanjay Design</span></p>
                            </div>
                        </div>
                    </div>
                    {/* Copywright part End */}
                    {/* Abouts us part Start */}
                    <div className="Footer-Section">
                        <div className="Footer-section-Title">
                            <h2>About us</h2>
                        </div>
                        <div className="List-of-section">
                            <p>WHO WE ARE</p>
                            <p>CONTACT US</p>
                            <p>FAQs</p>
                            <p>MISSIONS</p>
                            <p>OTHER COMPANIES</p>
                        </div>

                    </div>
                    {/* Abouts us part End */}

                    {/* footer second part start */}
                    <div className="Footer-Section">
                        <div className="Footer-section-Title">
                            <h2>Company</h2>
                        </div>

                        <div className="List-of-section">
                            <p></p>
                            <p>CAREERS</p>
                            <p>LEGAL</p>
                            <p>POLICY</p>
                            <p>PRESS</p>
                            <p>BLOG</p>
                        </div>

                    </div>
                    {/* footer second part End */}

                    {/* Social media part start */}
                    <div className="Footer-Section">
                    <div className="Footer-section-Title">
                            <h2>socials</h2>
                        </div>
                        <div className="Footer-SocialsIcons">
                            {/* icons box start */}
                           <div className="Footer-IconBox">
                           <i className="fab fa-facebook-square"></i>
                           </div>
                           {/* icons box End */}

                           {/* icons box start */}
                           <div className="Footer-IconBox">
                           <i className="fab fa-twitter-square"></i>
                           </div>
                           {/* icons box End */}


                           {/* icons box start */}
                           <div className="Footer-IconBox">
                           <i className="fab fa-youtube"></i>
                           </div>
                           {/* icons box End */}

                           {/* icons box start */}
                           <div className="Footer-IconBox">
                           <i className="fab fa-instagram"></i>
                           </div>
                           {/* icons box End */}

                           
                        </div>

                    </div>
                    {/* Social media part End */}
                </div>



            </footer>

            <div className="Mobile-Footer">
                 
                 <div className="MobileFooterIconBox">
                 <i className="fas fa-home"></i>
                 </div>

                 <div className="MobileFooterIconBox">
                 <i className="fas fa-search"></i>
                 </div>

                 <div className="MobileFooterIconBox plus">
                 <i className="fas fa-plus"></i>
                 </div>

                 <div className="MobileFooterIconBox">
                 <i className="fas fa-bell"></i>
                 </div>

                 <div className="MobileFooterIconBox">
                 <i className="fas fa-user-circle"></i>
                 </div>
            </div>
        </>
    )
}
