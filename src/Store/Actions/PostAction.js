import { OPEN_LOADING, CLOSE_LOADING, POST_ERROR, POST_SUCCES, GET_ALL_POST, GET_POST_COMMENTS } from '../Types/PostType';
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
            dispatch({ type: POST_ERROR, payload: response.data.ErrorMsg })
            dispatch({ type: POST_SUCCES, payload: response.data.msg })
        } catch (error) {
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


// POST COMMETNT GET ACTION

const GetPostComments = (PostId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/Post-Comment/${PostId}`)
            dispatch({ type: GET_POST_COMMENTS, payload: data.GetCooments })
        } catch (error) {
            console.log(error.response)
        }

    }
}

// post Comments Action

const PostComment = (PostId ,content) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${getToken}`,
            }
        }
        try {
            const { data } = await axios.put(`/Post-Comment/${PostId}`, { content }, config);
            console.log(data)
    

        } catch (error) {
            console.log(error.response)
         
        }
    }

}


export {
    CreatePost,
    getAllPost,
    LikesAction,
    UnLikeAction,
    GetPostComments,
    PostComment
}