import React from 'react'
import  '../../assets/css/mainContainer.css';
import CenterPart from './CenterPart';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

export default function MainContainer() {
    return (
        <>
            <div className="Main-Conatiner">
               
               <div className="Left-part">
                 <LeftPart />
               </div>

               <div className="center-part">
                 <CenterPart />
               </div>

               <div className="Right-part">
                  <RightPart />
               </div>
            </div>

        </>
    )
}
