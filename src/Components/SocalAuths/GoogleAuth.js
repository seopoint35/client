import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import {googleLogin} from '../../Store/Actions/AuthActions'
import {  Avatar,  IconButton, } from '@material-ui/core/';
import google from '../../assets/images/google.png';
export default function GoogleAuth() {
const dispatch = useDispatch();


    const responseGoogleSucces = (response) => {
        const tokenId = response.tokenId;
         dispatch(googleLogin(tokenId))
    }


    const responseGoogleError = (response) => {
        console.log(response)
    }
    return (
        <>
            <div className="Google_Login">
                <GoogleLogin
                    clientId= { process.env.REACT_APP_GOOGLEKEY}
                    render={renderProps => (
                        <button style={{ border: "none", outline: "none", background: "none"  }} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <IconButton>
                                <Avatar alt="Remy Sharp" src={google} className="avtar" />
                            </IconButton>
                        </button>
                    )}
                    onSuccess={responseGoogleSucces}
                    onFailure={responseGoogleError}
                    cookiePolicy={'single_host_origin'}
                 
                />

              </div>
        </>
    )
}







