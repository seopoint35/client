import axios from 'axios';

const LoginUser = (UserLogin) => {

  return async(dispatch)=>{
    const config = {
        headers: {
            'Content-Type': "application/json"
        }
    }
    dispatch({ type: "OPEN_LOADING" })
    try {
        const response = await axios.post('/user-login', UserLogin, config)
        dispatch({ type: "CLOSE_LOADING" })
        console.log(response)
    } catch (error) {
        dispatch({ type: "CLOSE_LOADING" })

        console.log(error.response)
        dispatch({ type: "LOGIN_ERROR", payload: error.response.data.msg })
    }
  }

}


export {
    LoginUser
}