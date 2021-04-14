import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";



 const AdminPrivate=({component: Component , roles, ...rest}) =>{

    const { userDetails } = useSelector((state) => {
        return state.AuthReducer
    })

    

    const check = roles.includes(userDetails.role) ;

    return (
        <Route
        {...rest}
        render ={
            ()=>{

                if(check ){
                    return <Component />
                }else{
                    return <Redirect to={'/admin-Login'} />
                }
            }
        }
        
        />
    )
}

export default AdminPrivate;