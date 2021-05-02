import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Paper, Slider, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import StateData from '../../State';


export default function SateFillterPart(props) {

    const { CheckBoxhandel } = props;
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

    return (
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
    )
}
