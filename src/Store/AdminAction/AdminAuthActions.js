import axios from 'axios';
import {USER_DETAILS , OPEN_LOADING , CLOSE_LOADING , SET_TOKEN , LOGIN_ERROR} from '../Types/AuthTypes';


// ADMIN LOGIN ACTION 
const LoginAdmin = (adminLogin)=>{

    return async(dispatch)=>{
        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        }
        dispatch({ type: OPEN_LOADING })
        try {
            const response = await axios.post('/admin-login', adminLogin, config)
            dispatch({ type: CLOSE_LOADING })
            console.log('succes')
            console.log(response)
            localStorage.setItem('jwt', response.data.token)
            localStorage.setItem('userDetails',JSON.stringify(response.data.AdminDetails))
            dispatch({ type: USER_DETAILS, payload: response.data.AdminDetails });
            dispatch({ type: SET_TOKEN, payload: response.data.token })
        } catch (error) {
            dispatch({ type: CLOSE_LOADING })
            dispatch({ type: LOGIN_ERROR, payload: error.response.data.msg })
            console.log('Error')
            console.log(error.response)
        }
    }
};

// ADMIN LOGIN ACTION 
const LoginSuperAdmin = (superadminLogin)=>{

    return async(dispatch)=>{

        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        }
        dispatch({ type: OPEN_LOADING })
        try {
            const response = await axios.post('/super-admin-login', superadminLogin, config)
            dispatch({ type: CLOSE_LOADING })
            console.log('succes')
            console.log(response)
            localStorage.setItem('jwt', response.data.token)
            localStorage.setItem('userDetails',JSON.stringify(response.data.AdminDetails))
            dispatch({ type: USER_DETAILS, payload: response.data.AdminDetails });
            dispatch({ type: SET_TOKEN, payload: response.data.token })
        } catch (error) {
            dispatch({ type: CLOSE_LOADING })
            dispatch({ type: LOGIN_ERROR, payload: error.response.data.msg })
            console.log('Error')
            console.log(error.response)
        }
    }
};



export {
    LoginAdmin,
    LoginSuperAdmin 
}