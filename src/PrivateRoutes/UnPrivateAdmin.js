import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const UnPrivateAdmin = ({ component: Component, roles, ...rest }) => {

    const { userDetails } = useSelector((state) => {
        return state.AuthReducer
    })

     
    const checkRole = roles.filter((value)=>{
        
        return value == userDetails.role

    })

    console.log(checkRole)
    

    return (
        <Route
            {...rest}
            render={
                () => {

                    if (checkRole.includes(userDetails.role) ) {
                        return <Redirect to={'/admin-dashboard'} />
                    } else {
                        return <Component />
                    }
                }
            }
        />
    )

}

export default UnPrivateAdmin

