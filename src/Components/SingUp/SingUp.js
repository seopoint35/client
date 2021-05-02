import React, { useEffect, useState } from 'react';
import '../../assets/css/Login.css';
import image1 from '../../assets/images/cycle.jpg';
import GoogleAuth from '../SocalAuths/GoogleAuth';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { SingUpUser } from '../../Store/Actions/AuthActions';
import { Backdrop, CircularProgress, IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function SingUp() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { loading, LoginError, userDetails } = useSelector((state) => {
        return state.AuthReducer
    })

    const onSubmit = (data) => {
        dispatch(SingUpUser(data))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


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
                                <h1> User Sing Up </h1>

                            </div>

                            <div className="mobileFormHeading">
                                <h1>User Sing Up</h1>

                            </div>

                            <div className="formPart">

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="inputDiv">
                                        <input type="text"    {...register("firstName", { required: "First Name is Required", minLength: { value: 3, message: "minimum 3 caracter is requried" } })} />
                                        <label>First Name</label>
                                        {errors.firstName && <p className="InputErrors">{errors.firstName.message}</p>}
                                    </div>

                                    <div className="inputDiv">
                                        <input name="lastName" type="text" {...register("lastName", { required: "Last Name is Requried", minLength: { value: 3, message: "minimum 3 caracter is requried" } })} />
                                        <label>Last Name</label>
                                        {errors.lastName && <p className="InputErrors"> {errors.lastName.message}</p>}
                                    </div>

                                    <div className="inputDiv">
                                        <input name="email" type="text" {...register("email", { required: "email is Requried", pattern: { value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, message: "email is not valid" } })} />
                                        <label>Email</label>
                                        {errors.email && <p className="InputErrors"> {errors.email.message} </p>}
                                    </div>


                                    <div className="inputDiv">
                                        <input name="password" type="text" {...register("password", { required: "Password is Required" })} />
                                        <label>password</label>
                                        {errors.password && <p className="InputErrors">{errors.password.message}</p>}
                                    </div>


                                    <div>
                                        <button type="submit">Sing Up </button>
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
