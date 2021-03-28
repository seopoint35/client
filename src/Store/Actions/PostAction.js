import { OPEN_LOADING, CLOSE_LOADING, POST_ERROR, POST_SUCCES, GET_ALL_POST } from '../Types/PostType';
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
            dispatch({ type: POST_ERROR, payload: response.data.ErrorMsg })
            dispatch({ type: POST_SUCCES, payload: response.data.msg })
        } catch (error) {
            console.log(error.response)
            dispatch({ type: CLOSE_LOADING })

        }
    }
}


const getAllPost = () => {

    return async (dispatch) => {

        try {
            const { data } = await axios.get('/all-posts')

            dispatch({ type: GET_ALL_POST, payload: data.allPost })
        } catch (error) {

        }
    }
}

const getToken = localStorage.getItem('jwt')
console.log(getToken)
// Post Likes Action

const LikesAction = (_id) => {

    return async (dispatch) => {

        const config = {
            headers: {
                "Authorization": `Bearer ${getToken}`,
            }
        }
        dispatch({ type: OPEN_LOADING })
        try {
            console.log('like action fire')
            console.log(_id)
            const { data } = await axios.put('/Post-Likes', { _id }, config)
            console.log(data)
            dispatch({ type: CLOSE_LOADING })
        } catch (error) {
            console.log(error)
            dispatch({ type: CLOSE_LOADING })
        }
    }

}

//  UnLike API

const UnLikeAction = (_id) => {
    return async (dispatch) => {

        const config = {
            headers: {
                "Authorization": `Bearer ${getToken}`,
            }
        }
        dispatch({ type: OPEN_LOADING })
        try {
            console.log('like action fire')
            console.log(_id)
            const { data } = await axios.put('/Post-DisLikes', { _id }, config)
            console.log(data)
            dispatch({ type: CLOSE_LOADING })
        } catch (error) {
            console.log(error)
            dispatch({ type: CLOSE_LOADING })
        }
    }
}


export {
    CreatePost,
    getAllPost,
    LikesAction,
    UnLikeAction
}