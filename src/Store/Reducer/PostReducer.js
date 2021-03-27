import {OPEN_LOADING , CLOSE_LOADING , POST_ERROR ,POST_SUCCES} from '../Types/PostType';
const initalstate = {
    loading: false,
    postError: "",
    postSucces: ""
}

const PostReducer = (state = initalstate, action) => {
    if (action.type === OPEN_LOADING) {
        return {
            ...state,
            loading: true
        }
    } else if (action.type === CLOSE_LOADING) {
        return {
            ...state,
            loading: false
        }
    }else if(action.type === POST_ERROR){
        return{
            ...state,
            postError: action.payload

        }
    }else if(action.type ===POST_SUCCES){

        return{
            ...state,
            postSucces: action.payload
        }
    }

    return state
}


export default PostReducer;