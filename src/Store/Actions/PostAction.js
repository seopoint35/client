import { OPEN_LOADING, CLOSE_LOADING, POST_ERROR ,POST_SUCCES } from '../Types/PostType';
import axios from 'axios';



const CreatePost = (formData, token) => {

    return async (dispatch) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }
        dispatch({ type: OPEN_LOADING })

        try {
            const response = await axios.post('/CreatePost', formData, config)
            dispatch({ type: CLOSE_LOADING })
            console.log(response)
            dispatch({ type: POST_ERROR, payload:response.data.ErrorMsg })
            dispatch({ type: POST_SUCCES, payload:response.data.msg })
        } catch (error) {
            console.log(error.response)
            dispatch({ type: CLOSE_LOADING })
         
        }
    }
}


export {
    CreatePost
}