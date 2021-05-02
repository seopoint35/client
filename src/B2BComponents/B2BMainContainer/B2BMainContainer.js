import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import '../../assets/css/mainContainer.css';
import B2BFillter from '../../utlis/B2BFillter/B2BFillter';
import B2BCard from './B2BCard';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router';
import MobileFillter from '../../utlis/B2BFillter/MobileFillter';
import { useDispatch, useSelector } from 'react-redux';
import {B2B_DRAWER } from '../../Store/Types/UtilesType'

export default function B2BMainContainer() {
    const dispatch = useDispatch();
    const { B2BDrawer  } = useSelector((state) => {
       return state.UtilesReducer
    })


    const history = useHistory();
    const [loading, setloading] = useState(false)
    const [B2BPosts, setB2BPosts] = useState([])
    const location = useLocation();

    let params = location.search ? location.search : "?";

    const CheckBoxhandel = (SateName) => {
        let statsParams = SateName.join("&");
        params = `/b2b/B2B-all-Posts?${statsParams}`;
        history.push(params)
    }

    const sliderHandler = (e, newValue) => {
        params = `/b2b/B2B-all-Posts?Review.Avrage[gte]=${newValue[0]}&Review.Avrage[lte]=${newValue[1]}`;
        history.push(params)
    }



    useEffect(() => {
        let cancle;
        setloading(true)

        const fectchB2BPosts = async () => {
            try {

                const { data } = await axios({
                    method: "GET",
                    url: `/b2b/B2B-all-Posts${params}`,
                    cancelToken: new axios.CancelToken((c) => {
                        return cancle = c;
                    })
                })
                setB2BPosts(data.fillterPost)
                setloading(false)
            } catch (error) {
                console.log(error)
                setloading(false)
            }

        }

        fectchB2BPosts()

        return () => cancle();

    }, [params])


    const TogalB2BDrawer=()=>{
        dispatch({type: B2B_DRAWER})
    }

    return (
        <>
            <div className="Main-Conatiner"  >

                <div className="Left-part">
                    <B2BFillter CheckBoxhandel={CheckBoxhandel} sliderHandler={sliderHandler} />
                </div>

                <div className="center-part" >
                    <div className="MobileFillterDrawer">
                        <MobileFillter CheckBoxhandel={CheckBoxhandel} sliderHandler={sliderHandler} />
                    
                    </div>

                    {loading ? (<div className="Loading_Conatiner"> <CircularProgress size="5rem" thickness={3} />
                    </div>) : (

                        B2BPosts.map((element, index) => {
                            return (
                                <B2BCard key={index} element={element} />
                            )
                        })

                    )}

                    {/* Mobile fillter btn start */}
                    <div className="B2BFillterBtn" onClick={TogalB2BDrawer}>
                        <h3>Filter</h3>
                    </div>
                    {/* Mobile fillter btn end */}
                </div>

                <div className="Right-part">
                    <h1>Right</h1>
                </div>
            </div>

        </>
    )
}
