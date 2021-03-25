import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const UnPrivate = ({ component: Component, ...rest }) => {
    const { userDetails } = useSelector((state) => {
        return state.AuthReducer
    })
    return (
        <Route
            {...rest}
            render={
                () => {

                    if (userDetails.role.includes("user")) {

                        return <Redirect to={'/admin-dashboard'} />
                    } else {

                        return <Component />
                    }


                }
            }

        />
    )

}


export default UnPrivate;