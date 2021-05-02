import {
    OPEN_LOADING,
    CLOSE_LOADING,
    POST_MESSAGE,
    GET_ALL_POST,
    GET_POST_COMMENTS,
    GET_MY_POSTS,
    GET_SINGLE_POST_DET,
    GET_SINGLE_POST_SUCCES,
    RESET_SINGLE_POST_SUCCES,
    ALL_COMMENTS
} from '../Types/PostType';

import axios from 'axios';

const getToken = localStorage.getItem('jwt')

const CreatePost = (formData, token) => {

    return async (dispatch) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }
        console.log(formData)
        dispatch({ type: OPEN_LOADING })

        try {
            const response = await axios.post('/CreatePost', formData, config)
            console.log(response)
            dispatch({ type: CLOSE_LOADING })
           
            dispatch({ type: POST_MESSAGE, payload: response.data.msg })
        } catch (error) {
            dispatch({ type: POST_MESSAGE, payload: error.response.data.ErrorMsg })
            dispatch({ type: CLOSE_LOADING })
            console.log(error.response)
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



// Post Likes Action

const LikesAction = (_id) => {

    return async (dispatch) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${getToken}`,
                "Content-Type": "application/json",
            }
        }
        dispatch({ type: OPEN_LOADING })
        try{
            const  response  = await axios.put('/Post-Likes', { _id }, config)
            console.log("ok")
            dispatch({ type: CLOSE_LOADING })
        }catch (error) {
            console.log(error.response)
            console.log(error.response.data.msg)
            console.log("error")
            dispatch({ type: CLOSE_LOADING })
            dispatch({ type: POST_MESSAGE, payload: error.response.data.msg })
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


// Get All Comments
const GetAllComments = () => {
    return async (dispatch) => {
        dispatch({ type: OPEN_LOADING })
        try {
            const { data } = await axios.get('/all-Comment');
            dispatch({ type: ALL_COMMENTS, payload: data.allComments })
            dispatch({ type: CLOSE_LOADING })
        } catch (error) {
            console.log(error.response)
        }

    }
}

// POST COMMETNT GET ACTION

const GetPostComments = (PostId) => {
    return async (dispatch) => {
        dispatch({ type: OPEN_LOADING })
        try {
            const { data } = await axios.get(`/Post-Comment/${PostId}`)
            dispatch({ type: GET_POST_COMMENTS, payload: data.GetCooments })
            dispatch({ type: CLOSE_LOADING })
        } catch (error) {
            console.log(error.response)
            dispatch({ type: CLOSE_LOADING })
        }

    }
}

// post Comments Action

const PostComment = (PostId, content ,RefreshComment) => {
    return async (dispatch) => {
        dispatch({ type: OPEN_LOADING })
        const config = {
            headers: {
                "Authorization": `Bearer ${getToken}`,
            }
        }
        try {
            const { data } = await axios.put(`/Post-Comment/${PostId}`, { content }, config);
            console.log(data)
            
            RefreshComment()

            dispatch({ type: CLOSE_LOADING })
        } catch (error) {
            console.log(error.response)
            dispatch({ type: CLOSE_LOADING })
        }
    }

}


// user  reply Comments Action

const UserCommentReplyAction = (PostId, ReplyTo) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${getToken}`,
            }
        }
        try {
            const { data } = await axios.put(`/Post-comment-Reply/${PostId}`, ReplyTo, config);
            console.log(data)

        } catch (error) {
            console.log(error.response)

        }
    }

}


const MyPostsList = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${getToken}`,
            }
        }
        try {
            const { data } = await axios.get('/my-posts', config);
            console.log(data)
            dispatch({ type: GET_MY_POSTS, payload: data.myposts })
        } catch (error) {
            console.log(error)
        }

    }
}


const SinglePost = (PostId) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${getToken}`,
            }
        }

        try {
            const { data } = await axios.get(`/my-single-posts/${PostId}`, config);
            console.log(data)
            dispatch({ type: GET_SINGLE_POST_DET, payload: data.singlePost })
            dispatch({ type: GET_SINGLE_POST_SUCCES })
        } catch (error) {
            console.log(error)
        }

    }
}



const DeleteSinglePost = (PosId) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${getToken}`,
            }
        }

        try {
            const { data } = await axios.put('/my-post-delete', { PosId }, config)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }
}




export {
    CreatePost,
    getAllPost,
    LikesAction,
    UnLikeAction,
    GetPostComments,
    PostComment,
    UserCommentReplyAction,
    MyPostsList,
    DeleteSinglePost,
    SinglePost,
    GetAllComments
}