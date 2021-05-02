import { Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react'
import SliderPart from '../FilterParts/SliderPart'

export default function AvrageRatingFillter(props) {
    const { sliderHandler } = props;

    return (
        <>
            <div className="B2B_Mobile_AvrageRating">
                <div className="B2B_Mobile_FeatureHeading">
                    <div>
                        <Typography
                            variant="h4"
                        >
                            Avrage Rating
                       </Typography>
                    </div>
                    <div>
                        <Rating
                            value={5}
                            readOnly
                        />
                    </div>
                </div>
                <div className="B2B_Mobile_SliderBox">
                    <SliderPart sliderHandler={sliderHandler} />
                </div>

            </div>
        </>
    )
}
