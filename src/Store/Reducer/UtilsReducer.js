import {TOOGLE_DRAWER, CLOSE_DRAWER ,TOOGLE_MOBILE_FILLTER , WINDOW_DRAWER , B2B_DRAWER} from '../Types/UtilesType';

const initalState ={
    drawer: false,
    B2BDrawer : false,
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
    }else if(actions.type === B2B_DRAWER){
        return{
            ...state,
            B2BDrawer: !state.B2BDrawer
        }
    }else if(actions.type === WINDOW_DRAWER){
             
            return{
                ...state,
                drawer: false,
                B2BDrawer: false
            }
    }

    return state
}


export {
    UtilesReducer
}