import React, { useEffect, useState } from 'react'
import '../../assets/css/AdminCss/MyPosts.css';
import { useDispatch, useSelector } from 'react-redux';
import { MyPostsList } from '../../Store/Actions/PostAction'
import {DeleteSinglePost} from '../../Store/Actions/PostAction'
import { NavLink } from 'react-router-dom';


export default function MyPosts() {
    const dispatch = useDispatch();
    //get the token from state
    const { myPosts } = useSelector((state) => {
        return state.PostReducer;
    });

  
    useEffect(() => {
        dispatch(MyPostsList());

    }, [])


    const deleteHandel =(id)=>{
        
         dispatch(DeleteSinglePost(id));
    }

    return (
        <>
            <div className="MyPosts_mainContainer">
                <div className="MyPosts_TableContainer">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>show</th>
                        </tr>
                        {myPosts && myPosts.map((elements, index) => {

                            return (
                                <>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{elements.VocabImage}</td>
                                        <td>{elements.VocabName}</td>
                                        <td> <NavLink exact to={`/admin-dashboard/my-posts/${elements._id }`}>  <span> <i className="far fa-edit"></i> </span> </NavLink> </td>
                                        <td><span onClick={()=>deleteHandel( elements._id )}><i className="far fa-trash-alt"></i></span></td>
                                        <td>show</td>
                                    </tr>
                                </>
                            )

                        })}

                    </table>
                </div>
            </div>
        </>
    )
}
