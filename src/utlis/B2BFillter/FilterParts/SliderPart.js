import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Paper, Slider, Typography } from '@material-ui/core';





export default function SliderPart(props) {
    const {  sliderHandler } = props;

    const [value, setValue] = useState([0, 100]);
    // SliderhandleChange
    const SliderhandleChange = (event, newValue) => {
        setValue(newValue);
    }

    const onSliderCommit = (event, newValue) => {

        sliderHandler(event, newValue)
    }

    return (
        <>
            <Slider
                defaultValue={30}
                aria-labelledby="range-slider"
                valueLabelDisplay="auto"
                value={value}
                step={10}
                // min={10}
                // max={100}
                marks
                onChange={SliderhandleChange}
                onChangeCommitted={onSliderCommit}
            />
        </>
    )
}
