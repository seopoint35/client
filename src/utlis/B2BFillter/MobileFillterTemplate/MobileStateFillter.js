import { Typography } from '@material-ui/core';
import React from 'react'
import SateFillterPart from '../FilterParts/SateFillterPart';

export default function MobileStateFillter(props) {
    const { CheckBoxhandel } = props;
    return (
        <>
           <div className="B2B_Mobile_StateFillterContainer">

               <div className="Mobile_SateFillter_Heading">
                  <Typography
                  variant="h3"
                  >
                   State Fiilter
                  </Typography>
               </div>
              <div className="B2B_Drawer_SateContainer">
              <SateFillterPart CheckBoxhandel={CheckBoxhandel} />
              </div>
           
           </div>

        </>
    )
}
