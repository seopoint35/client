import {OPEN_LOADING , CLOSE_LOADING , LOGIN_ERROR, USER_DETAILS , LOG_OUT , SET_TOKEN} from '../Types/AuthTypes';

const initalState = {
    loading: false,
    LoginError: "",
    userDetails: {
        firstName: "",
        lastName: "",
        role: "",
        UserId:""
    },
    token:""

}


const userDetail = JSON.parse(localStorage.getItem('userDetails'))

const token = localStorage.getItem('jwt')

if(token){
    initalState.token = token
}

if (userDetail) {
    initalState.userDetails.firstName = userDetail.firstName;
    initalState.userDetails.lastName = userDetail.lastName;
    initalState.userDetails.role = userDetail.role;
    initalState.userDetails.UserId = userDetail.UserId;
}


const AuthReducer = (state = initalState, action) => {

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
    } else if (action.type === LOGIN_ERROR) {
        return {
            ...state,
            LoginError: action.payload
        }
    } else if (action.type === USER_DETAILS) {

        return {
            ...state,
            userDetails: action.payload
        }
    }else if(action.type === LOG_OUT){

        return {
            ...state,
            userDetails: " ",
            token: ""
        }
    }else if(action.type === SET_TOKEN){
        return {
            ...state,
            token: action.payload
        }
    }

    return state
};


export {
    AuthReducer
}