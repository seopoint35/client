
const initalState = {
    loading: false,
    LoginError: "",

}


const AuthReducer = (state = initalState, action) => {

    if (action.type == "OPEN_LOADING") {

        return {
            ...state,
            loading: true
        }
    } else if (action.type == "CLOSE_LOADING") {
        return {
            ...state,
            loading: false
        }
    }else if(action.type == "LOGIN_ERROR"){
        return{
            ...state,
            LoginError: action.payload
        }
    }

    return state
};


export {
    AuthReducer
}