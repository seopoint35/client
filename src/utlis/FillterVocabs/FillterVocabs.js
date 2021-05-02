import React, { useState } from 'react'
import '../../assets/css/LeftPart.css';
import { CHECKED_LIST } from '../../Store/Types/FillterType';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import { Paper } from '@material-ui/core';



export default function FillterVocabs() {
    // fillter Alphabat List Data
    const Data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "o", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const dispatch = useDispatch();
    // const { checkedList } = useSelector((state) => {
    //     return state.fillterReducer
    // })
    const [Search, setSearch] = useState("")
    const [Checked, setChecked] = useState([])

    // Search Input Value
    const handelSearchInput = (e) => {
        setSearch(e.target.value)
    }
    // Fillter List  
    const fillterList = Data.filter((list) => {
        return list.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
    })

    // Chekbox fillter
    const handelTogelCheck = (value, i) => {
        console.log("i", i)
        const currentIndex = Checked.indexOf(value); // Result come -1 or true
        let newChecked = [...Checked]
        if (currentIndex === -1) {
            newChecked.push(value)
            console.log('add', newChecked)
        } else {
            newChecked = newChecked.filter((element) => {
                return element !== value
            })
            console.log('remove', newChecked)
        }

        setChecked(newChecked);
        console.log(newChecked)
        dispatch({ type: CHECKED_LIST, payload: newChecked })

    }
    return (
        <>
            {/* Dekstop fillter container start */}
            <Paper className="RightFillter_Container">
                {/* Fiilter Heading Start */}
                <div className="RightFillter_HeadingBox">
                    <h2>Fillter</h2>
                </div>
                {/* Fiilter Heading End */}

                {/* Right fillter serach start */}
                <div className="RightFillter_searchBox">
                    <h5>Vocab </h5>
                    <div className="SearchInputBox">
                        <input type="text" maxLength="1" onChange={handelSearchInput} />
                        <div className="SerachIcon">
                            <span><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>
                {/* Right fillter serach End */}

                <div className="RightVocab_ListBox">

                    {fillterList.map((element, index) => {

                        return (
                            <>
                                {/* Vocab List Item start */}
                                <div key={index.toFixed()}  className="Vocab_Item">
                                    <div className="check_Box">
                                        <Checkbox
                                            size="medium"
                                            checked={Checked.indexOf(element) === -1 ? false : true}
                                            onChange={() => handelTogelCheck(element, index)}
                                        />
                                        
                                    </div>
                                    <div  className="Vocab_name">
                                        <p>{element}</p>
                                    </div>
                                </div>
                                {/* Vocab List Item End */}

                            </>
                        )
                    })}


                </div>


            </Paper>
            {/* Dekstop fillter container End */}
        </>
    )
}
