import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Paper, Slider, Typography } from '@material-ui/core';
import '../../assets/css/B2B/B2BFillter.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import StateData from '../State';
import SliderPart from './FilterParts/SliderPart';
import SateFillterPart from './FilterParts/SateFillterPart';


export default function B2BFillter(props) {

    const { CheckBoxhandel, sliderHandler } = props;

  
    return (
        <>
            <Paper className="B2B_FillterContainer">

                <div className="B2B_fillterHeading">
                    <h1>Fillter</h1>
                </div>

                <div className="B2B_RangeFillter">
                    <div className="B2BSliderBox">
                       <SliderPart sliderHandler={sliderHandler}/>
                    </div>

                </div>
                {/* State fillter Start  */}
                <div className="B2B_StateFillter">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography> State List </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <SateFillterPart CheckBoxhandel={CheckBoxhandel} />

                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* State fillter End  */}
            </Paper>
        </>
    )
}
