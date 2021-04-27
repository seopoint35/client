import {createStore , combineReducers , applyMiddleware} from 'redux';
import ThunkMidelWear from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {AuthReducer} from '../Store/Reducer/AuthReducer';
import {PostReducer , fillterReducer} from '../Store/Reducer/PostReducer';
import {AdminAuthReducer} from '../Store/AdminReducer/AdminAuthReducer';
import {UtilesReducer} from '../Store/Reducer/UtilsReducer';
import {B2BReducer} from './Reducer/B2BReducer';

const rootReducer = combineReducers({
    AuthReducer,
    PostReducer,
    fillterReducer,
    AdminAuthReducer,
    UtilesReducer,
    B2BReducer
})



const Midelwears = [ThunkMidelWear]


const WebStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(...Midelwears) ))


export default WebStore;
