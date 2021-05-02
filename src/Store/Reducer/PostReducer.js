import {
    OPEN_LOADING,
    CLOSE_LOADING,
    POST_MESSAGE,
    RESET_POST_SUCESS,
    GET_ALL_POST,
    GET_POST_COMMENTS,
    GET_MY_POSTS,
    GET_SINGLE_POST_DET,
    GET_SINGLE_POST_SUCCES,
    RESET_SINGLE_POST_SUCCES,
    ALL_COMMENTS,
    RESET_POST_COMMENTS,
} from '../Types/PostType';

// fillter Reducer
import {CHECKED_LIST} from '../Types/FillterType';

const initalstate = {
    test: false,
    loading: false,
    postMsg: "",
    allPosts: [],
    PostComments: [],
    allComments: [],
    myPosts: [],
    singlePost: "",
    singlePostSucces: false,

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
    } else if (action.type === POST_MESSAGE) {
        return {
            ...state,
            postMsg: action.payload

        }
    }else if(action.type === RESET_POST_SUCESS){
        return{
            ...state,
            postMsg: ""
        }
    }else if (action.type === GET_ALL_POST) {
        return {
            ...state,
            allPosts: action.payload

        }
    } else if (action.type === GET_POST_COMMENTS) {
        return {
            ...state,
            PostComments: action.payload
        }
    }else if(action.type === RESET_POST_COMMENTS){
        return{
            ...state,
            PostComments : ""
        }
         
    } else if (action.type === GET_MY_POSTS) {
        return {
            ...state,
            myPosts: action.payload
        }
    } else if (action.type == GET_SINGLE_POST_DET) {
        return {
            ...state,
            singlePost: action.payload
        }
    } else if (action.type === GET_SINGLE_POST_SUCCES) {
        return {
            ...state,
            singlePostSucces: true
        }
    } else if (action.type === RESET_SINGLE_POST_SUCCES) {
        return {
            ...state,
            singlePostSucces: false
        }
    }else if(action.type === ALL_COMMENTS){
         return{
             ...state,
             allComments: action.payload
         }
    }

    return state
}

const fillterState ={
  checkedList :[],

}



const fillterReducer = (state = fillterState, action)=>{
    
      if(action.type === CHECKED_LIST){
          return {
              ...state,
              checkedList : action.payload
          }
      }

      return state
}


export  {
    PostReducer,
    fillterReducer
};