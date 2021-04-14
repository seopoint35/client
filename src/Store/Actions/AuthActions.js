import axios from 'axios';
import { OPEN_LOADING, CLOSE_LOADING, LOGIN_ERROR, USER_DETAILS, SET_TOKEN } from '../Types/AuthTypes';



// Login Action
const LoginUser = (UserLogin) => {

    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        }
        dispatch({ type: OPEN_LOADING })
        try {
            const response = await axios.post('/user-login', UserLogin, config)
            dispatch({ type: CLOSE_LOADING })
            console.log(response)
            localStorage.setItem('jwt', response.data.token)
            localStorage.setItem('userDetails', JSON.stringify(response.data.userDetails))
            dispatch({ type: USER_DETAILS, payload: response.data.userDetails })
            dispatch({ type: SET_TOKEN, payload: response.data.token })
        } catch (error) {
            dispatch({ type: CLOSE_LOADING })

            console.log(error.response)
            dispatch({ type: LOGIN_ERROR, payload: error.response.data.msg })
        }
    }

}

const googleLogin = (googleRes) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        }
        dispatch({ type: OPEN_LOADING })
        try {
            const response = await axios.post('/google-Auth',  {tokenId:googleRes}, config)
            dispatch({ type: CLOSE_LOADING })
            console.log(response)
            localStorage.setItem('jwt', response.data.token)
            localStorage.setItem('userDetails', JSON.stringify(response.data.userDetails))
            dispatch({ type: USER_DETAILS, payload: response.data.userDetails })
            dispatch({ type: SET_TOKEN, payload: response.data.token })
        } catch (error) {
            dispatch({ type: CLOSE_LOADING })
            console.log(error.response)
            dispatch({ type: LOGIN_ERROR, payload: error.response.data.msg })
        }
    }

}


export {
    LoginUser,
    googleLogin
}