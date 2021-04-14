import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const UnPrivateAdmin = ({ component: Component, roles, ...rest }) => {

    const { userDetails } = useSelector((state) => {
        return state.AuthReducer
    })

     
      let check = roles.includes(userDetails.role);
    

    return (
        <Route
            {...rest}
            render={
                () => {

                    if (check) {
                        return <Redirect to={'/admin'} />
                    } else {
                        return <Component />
                    }
                }
            }
        />
    )

}

export default UnPrivateAdmin

