
import {GET_B2B_CATEGORY , GET_B2B_SUB_CATOGERY} from '../Types/B2BType';

const initalstate = {
    loading: false,
    postError: null,
    B2BCategory: [],
    B2BSubCatogery: [],

}




const B2BReducer = (state = initalstate, action)=>{
    if(action.type === GET_B2B_CATEGORY){
       return{
        ...state,
        B2BCategory: action.payload
       }
    }else if(action.type === GET_B2B_SUB_CATOGERY){
        return{
            ...state,
            B2BSubCatogery: action.payload 
        }
    }

    return state;
}

export{
    B2BReducer   
}