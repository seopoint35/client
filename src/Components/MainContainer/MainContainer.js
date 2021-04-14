import React, { useRef } from 'react'
import  '../../assets/css/mainContainer.css';
import CenterPart from './CenterPart';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import { useDispatch, useSelector } from 'react-redux';
import {CLOSE_DRAWER} from '../../Store/Types/UtilesType';


export default function MainContainer() {
  const dispatch = useDispatch();



    const habndelCloseDrawer =()=>{
      dispatch({type: CLOSE_DRAWER})
   }
  

    return (
        <>
            <div className="Main-Conatiner"  >
               
               <div className="Left-part">
                 <LeftPart  />
               </div>

               <div className="center-part" onClick={habndelCloseDrawer}>
                 <CenterPart />
               </div>

               <div className="Right-part">
                  <RightPart />
               </div>
            </div>

        </>
    )
}
