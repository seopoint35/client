import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";


const Private = ({ component: Component, ...rest }) => {

    const { userDetails } = useSelector((state) => {
        return state.AuthReducer
    })
 

    return (
        <Route
            {...rest}
            render={
                () => {

                    if (userDetails.role == "user") {
                        return <Component />
                    } else {
                        return <Redirect to={'/Login'} />
                    }
                }
            }

        />
    )



}


export default Private;