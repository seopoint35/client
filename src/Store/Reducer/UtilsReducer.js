import {TOOGLE_DRAWER, CLOSE_DRAWER ,TOOGLE_MOBILE_FILLTER} from '../Types/UtilesType';

const initalState ={
    drawer: false,
    MobileFillter: false,
}



const UtilesReducer = (state =initalState, actions)=>{
    
    if(actions.type === TOOGLE_DRAWER){
        
        return{
            ...state,
            drawer: !state.drawer
        }

    }else if(actions.type === CLOSE_DRAWER){
        return{
            ...state,
            drawer: false
        }
    }else if(actions.type === TOOGLE_MOBILE_FILLTER){
           return{
               ...state,
               MobileFillter : !state.MobileFillter
           }
    }

    return state
}


export {
    UtilesReducer
}