import React, { useEffect, useState } from 'react';
import '../../assets/css/B2B/MobileFillter.css';
import { Paper, SwipeableDrawer, Tabs, Tab, Button } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import SliderPart from './FilterParts/SliderPart';
import AvrageRatingFillter from './MobileFillterTemplate/AvrageRatingFillter';
import MobileStateFillter from './MobileFillterTemplate/MobileStateFillter';
import { useDispatch, useSelector } from 'react-redux';
import {  WINDOW_DRAWER } from '../../Store/Types/UtilesType'


export default function MobileFillter(props) {
    const dispatch = useDispatch();
    const { B2BDrawer } = useSelector((state) => {
        return state.UtilesReducer
    })

    const { CheckBoxhandel, sliderHandler } = props;
    const [value, setValue] = React.useState(0);

    const HandelTabValue = (e, value) => {

        setValue(value)
    }

    // Change the state on window size

    useEffect(() => {

        const UpdateWidth = () => {

            if (window.innerWidth > 360) {
                dispatch({ type: WINDOW_DRAWER })
            }
        }

        window.addEventListener('resize', UpdateWidth)
        console.log('run useEffect 1')
        return () => window.removeEventListener("resize", UpdateWidth);
    })

const ToggleB2BDrawer =()=>{
    dispatch({type: WINDOW_DRAWER})
}


    return (
        <>

            <div className="B2BMobileDrawer" >
                <SwipeableDrawer
                    anchor="top"
                    open={B2BDrawer}
                >
                    <div className="FillterTab_MainContainer">
                        <div className="B2BFillter_OptionsBox">
                            <Tabs
                                orientation="vertical"
                                value={value}
                                onChange={HandelTabValue}
                            >
                                <Tab label="Rating" style={{ fontSize: "1.6rem" }} />
                                <Tab label="State" style={{ fontSize: "1.6rem" }} />
                                <Tab label="Sort" style={{ fontSize: "1.6rem" }} />

                            </Tabs>
                        </div>

                        <div className="B2BMobileFillter_fetures">

                            {value == 0 && <AvrageRatingFillter sliderHandler={sliderHandler} />}
                            {value == 1 && <MobileStateFillter CheckBoxhandel={CheckBoxhandel} />}

                            <div className="B2B_Mobile_ExitFillter">
                               <Button 
                               color="primary"
                               variant="contained"
                               onClick={ToggleB2BDrawer}
                               >
                                   Exit
                               </Button>
                            </div>

                        </div>


                    </div>


                </SwipeableDrawer>


            </div>
        </>
    )
}





