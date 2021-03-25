import {OPEN_LOADING , CLOSE_LOADING , LOGIN_ERROR, USER_DETAILS} from '../Types/AuthTypes';

const initalState = {
    loading: false,
    LoginError: "",
    userDetails: {
        firstName: "",
        lastName: "",
        role: ""
    }

}


const userDetail = JSON.parse(localStorage.getItem('userDetails'))

if (userDetail) {
    initalState.userDetails.firstName = userDetail.firstName;
    initalState.userDetails.lastName = userDetail.lastName;
    initalState.userDetails.role = userDetail.role;
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
    }

    return state
};


export {
    AuthReducer
}