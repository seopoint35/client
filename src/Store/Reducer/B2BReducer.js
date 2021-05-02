
import {GET_B2B_CATEGORY , GET_B2B_SUB_CATOGERY , B2B_MESSAGE , OPEN_LOADING , CLOSE_LOADING} from '../Types/B2BType';

const initalstate = {
    loading: false,
    postmsg: "",
    B2BCategory: [],
    B2BSubCatogery: [],

}




const B2BReducer = (state = initalstate, action)=>{
  
    if(action.type === OPEN_LOADING){
        return{
            ...state,
            loading: true
        }
    }else if(action.type === CLOSE_LOADING){
        return{
            ...state,
            loading: false
        }

    }else if(action.type === GET_B2B_CATEGORY){
       return{
        ...state,
        B2BCategory: action.payload
       }
    }else if(action.type === GET_B2B_SUB_CATOGERY){
        return{
            ...state,
            B2BSubCatogery: action.payload 
        }
    }else if(action.type === B2B_MESSAGE){
           return{
               ...state,
               postmsg: action.payload
           }
    }

    return state;
}

export{
    B2BReducer   
}