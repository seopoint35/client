import React, { useEffect } from 'react'
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../../Store/Actions/PostAction';



export default function CenterPart() {
    const dispatch = useDispatch();
    const { allPosts,  loading } = useSelector((state) => {
        return state.PostReducer
    })
    useEffect(() => {
        dispatch(getAllPost())
    }, [loading])

    return (
        <>
            <div className="Center-Container">
                {allPosts.map((elements) => {
                    return (
                        <>
                            <Cards key={elements._id} AllPost={elements} />
                        </>
                    )


                })}


            </div>

        </>
    )
}
