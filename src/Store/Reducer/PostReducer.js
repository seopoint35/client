import {OPEN_LOADING , CLOSE_LOADING , POST_ERROR ,POST_SUCCES , GET_ALL_POST} from '../Types/PostType';

const initalstate = {
    loading: false,
    postError: "",
    postSucces: "",
    allPosts:[],
   
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
    }else if(action.type === GET_ALL_POST){
         return{
             ...state,
             allPosts: action.payload

         }
    }

    return state
}


export default PostReducer;