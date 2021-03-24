import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminLeftPart() {
    return (
        <>
        <div>
           <NavLink to={'/admin-dashboard/create-post'} >
                Create post
               </NavLink>

               <NavLink to={'/admin-dashboard'}>DashBoard</NavLink>
        </div>
            
        </>
    )
}
