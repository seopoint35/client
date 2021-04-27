import React, { useEffect } from 'react'
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, GetAllComments } from '../../Store/Actions/PostAction';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import FillterVocabs from '../../utlis/FillterVocabs/FillterVocabs';
import { TOOGLE_MOBILE_FILLTER } from '../../Store/Types/UtilesType'
import { Fab } from '@material-ui/core';


export default function CenterPart() {
    const dispatch = useDispatch();
    const { allPosts, loading } = useSelector((state) => {
        return state.PostReducer
    })

    // Drawer Reducer
    const { drawer, MobileFillter } = useSelector((state) => {
        return state.UtilesReducer
    })

    const { checkedList } = useSelector((state) => {
        return state.fillterReducer
    })

    useEffect(() => {
        dispatch(getAllPost())
    }, [loading])

    // Get All Comments
    useEffect(() => {
        dispatch(GetAllComments())
    }, [])

    // items.Alphabet.includes(["A" , "B"])
    const fillterPost = allPosts.filter((items) => {
        if (checkedList.length === 0) {
            return items;
        } else {
            return checkedList.indexOf(items.Alphabet) !== -1;
        }
    })

    const ToggleFillterHandel = () => {
        dispatch({ type: TOOGLE_MOBILE_FILLTER })
    }

    return (
        <>
            <div className="Center-Container">
                <div className={drawer ? "MobileDrawer_Container" : "Hide_MobileDrawer_Container"}  >
                    <MobileDrawer />
                </div>

                {/* Mobile Fillter BUtton start */}
                <div className="Mobile_Fillter_VocabBox" onClick={ToggleFillterHandel}>
                    <Fab
                    size="medium"
                     color="secondary" aria-label="add">
                    <p>Fillter</p>
                    </Fab>
              
                </div>
                {/* Mobile Fillter BUtton End */}

                {/* Mobile Fillter Box start */}
                <div className={MobileFillter ? "MobileFillterContainer" : "Hide_MobileFillterContainer"}   >
                    <FillterVocabs />
                </div>
                {/* Mobile Fillter Box End */}

                {fillterPost.map((elements, index) => {
                    return (
                        <>
                            <Cards key={index} AllPost={elements} />
                        </>
                    )

                })}
            </div>

        </>
    )
}
