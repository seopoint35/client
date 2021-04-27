import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Paper, Slider, Typography } from '@material-ui/core';
import '../../assets/css/B2B/B2BFillter.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import StateData from '../State';


export default function B2BFillter(props) {
    const [value, setValue] = useState([20, 37]);
    const { CheckBoxhandel, sliderHandler } = props;

    const [Checked, setChecked] = useState([]);

    const handelTogelCheck = ({ SateName }, index) => {
        let currentIndex = Checked.indexOf(SateName);
        let checkedList = [...Checked];
        let urllist = [];

        if (currentIndex == -1) {
            checkedList.push(SateName);

        } else {
            checkedList = checkedList.filter((val, i) => {
                return val != SateName;
            })
        }

        checkedList.forEach((el, index) => {
            urllist.push(`state[in]=${el}`)

        })
        setChecked(checkedList)
        CheckBoxhandel(urllist)
    }


    // SliderhandleChange
    const SliderhandleChange = (event, newValue) => {
        setValue(newValue);
    }

    const onSliderCommit = (event, newValue) => {

        sliderHandler(event, newValue)
    }

    return (
        <>
            <Paper className="B2B_FillterContainer">

                <div className="B2B_fillterHeading">
                    <h1>Fillter</h1>
                </div>

                <div className="B2B_RangeFillter">
                    <div className="B2BSliderBox">
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
                            <div className="B2B_State_MainContainer">
                                <div className="B2B_StateList_SearchInput">
                                    <div>
                                        <input type="text" />
                                    </div>
                                    <div className="B2B_SearchIcon">
                                        <SearchIcon fontSize="large" />
                                    </div>

                                </div>
                                <div className="B2B_StateList_Container">

                                    {StateData.map((el, index) => {

                                        return (
                                            <>
                                                {/* check box start */}
                                                <div className="B2B_StateCheckListBox">
                                                    <div className="B2B_StateCheck">
                                                        <Checkbox
                                                            checked={Checked.indexOf(el.SateName) == -1 ? false : true}
                                                            onChange={() => handelTogelCheck(el, index)}

                                                        />
                                                    </div>
                                                    <div className="B2B_SateName">
                                                        <h4>{el.SateName}</h4>
                                                    </div>
                                                </div>
                                                {/* check box End */}
                                            </>
                                        )

                                    })}

                                </div>
                            </div>



                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* State fillter End  */}
            </Paper>
        </>
    )
}
