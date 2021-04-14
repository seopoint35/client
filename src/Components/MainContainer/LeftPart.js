import React, { useState } from 'react'
import   '../../assets/css/LeftPart.css';
import {CHECKED_LIST} from '../../Store/Types/FillterType';
import { useDispatch, useSelector } from 'react-redux';
import FillterVocabs from '../../utlis/FillterVocabs/FillterVocabs';


export default function LeftPart() {
    

    return (
        <>
        <div>
        <FillterVocabs />
        </div>
         
            
        </>
    )
}
