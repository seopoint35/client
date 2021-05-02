import axios from 'axios';
import { GET_B2B_CATEGORY, GET_B2B_SUB_CATOGERY ,B2B_MESSAGE , OPEN_LOADING , CLOSE_LOADING } from '../Types/B2BType';


// FETCH ALL THE B2B CATEGORY LIST ACTION

const GetAllB2BCatogery = () => {

    return async (dispatch) => {

        try {
            const { data } = await axios.get('/b2b/B2B-all-Category');
            dispatch({ type: GET_B2B_CATEGORY, payload: data.allb2bCatList })
        } catch (error) {
            console.log(error)
        }
    }
}

// FETCH ALL THE B2B SUB CATEGORY LIST ACTION
const GetAllB2BSubCatogery = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/b2b/B2B-all-sub-Category');
            dispatch({ type: GET_B2B_SUB_CATOGERY, payload: data.allb2bSubCatList })
        } catch (error) {
            console.log(error)
        }
    }
}

// CREATE B2B PROFILE

const B2BProfile = (formData) => {
    return async (dispatch) => {
            
        dispatch({type:OPEN_LOADING })
        try {
            const  {data}  = await axios.post('/b2b/Register-business', formData );
            console.log(data)
            dispatch({ type: B2B_MESSAGE, payload: data.msg })
            dispatch({type:CLOSE_LOADING })
        } catch (error) {
            console.log('error')
            console.log(error.response)
            dispatch({ type: B2B_MESSAGE, payload: error.response.data.msg })
            dispatch({type:CLOSE_LOADING })
        }

    }
}






export {
    GetAllB2BCatogery,
    GetAllB2BSubCatogery,
    B2BProfile
}

