import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import '../../assets/css/mainContainer.css';
import B2BFillter from '../../utlis/B2BFillter/B2BFillter';
import B2BCard from './B2BCard';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router';


export default function B2BMainContainer() {
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

    return (
        <>
            <div className="Main-Conatiner"  >

                <div className="Left-part">
                    <B2BFillter CheckBoxhandel={CheckBoxhandel} sliderHandler={sliderHandler} />
                </div>

                <div className="center-part" >
                    {loading ? (<div className="Loading_Conatiner"> <CircularProgress size="5rem" thickness={3} />
                    </div>) : (

                        B2BPosts.map((element, index) => {
                            return (
                                <B2BCard key={index} element={element} />
                            )
                        })

                    )}

                </div>

                <div className="Right-part">
                    <h1>Right</h1>
                </div>
            </div>

        </>
    )
}
