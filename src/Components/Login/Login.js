import React, { useEffect, useState } from 'react';
import '../../assets/css/Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../Store/Actions/AuthActions';
import GoogleAuth from '../SocalAuths/GoogleAuth';
import { Backdrop, CircularProgress, IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));


export default function Login() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { loading, LoginError, userDetails } = useSelector((state) => {
        return state.AuthReducer
    })
    const [UserLogin, setUserLogin] = useState({

        email: "",
        password: ""
    })

    const handelChange = (e) => {
        setUserLogin({
            ...UserLogin,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        dispatch(LoginUser(UserLogin))
    }




    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // Error 
    useEffect(() => {

        if (LoginError) {
            setOpen(true);
        } else {
            setOpen(false);
        }
   

    }, [LoginError])

    return (
        <>

            <Backdrop className={classes.backdrop} open={loading} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={6000}
                message={LoginError}

                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }

            />

            <div className="Login-main-Container">
                <div className="innerContainer">

                    <div className="formBox">

                        <div className="innerFormBox">
                            <div className="formHeading">
                                <h1>User Login</h1>

                            </div>

                            <div className="mobileFormHeading">
                                <h1> User Login</h1>

                            </div>

                            <div className="formPart">

                                <form onSubmit={handelSubmit}>
                                    <div className="inputDiv">
                                        <input name="email" onChange={handelChange} type="text" required />
                                        <label>Email</label>
                                    </div>

                                    <div className="inputDiv">
                                        <input name="password" type="text" onChange={handelChange} required />
                                        <label>password</label>
                                    </div>


                                    <div>
                                        <button type="submit">{loading ? "...." : "LOGIN"}</button>
                                    </div>
                                </form>

                                <div className="Dekstop_SocalAuth">
                                    <div className="SocalAuth_Title">
                                        <p>Login With</p>
                                    </div>

                                    <div className="SocalAuth_Type">
                                        <div className="SocalAuthBox">
                                            <GoogleAuth />
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
