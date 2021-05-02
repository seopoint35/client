import React, { useEffect, useState } from 'react';
import image1 from '../../assets/images/cycle.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAdmin } from '../../Store/AdminAction/AdminAuthActions';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress, IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function AdminLogin() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { loading, LoginError, userDetails } = useSelector((state) => {
        return state.AuthReducer
    })
    const [open, setOpen] = useState(false);
    const [adminLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    const handelChange = (e) => {
        setUserLogin({
            ...adminLogin,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = async (e) => {
        console.log('submit')
        e.preventDefault();
        dispatch(LoginAdmin(adminLogin))
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
                                <h1>Admin Login</h1>

                            </div>

                            <div className="mobileFormHeading">
                                <h1> Admin Login</h1>

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
                                        <button type="submit">Login</button>
                                    </div>
                                </form>


                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



