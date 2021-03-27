import {createStore , combineReducers , applyMiddleware} from 'redux';
import ThunkMidelWear from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {AuthReducer} from '../Store/Reducer/AuthReducer';
import PostReducer from '../Store/Reducer/PostReducer';

const rootReducer = combineReducers({
    AuthReducer,
    PostReducer
})



const Midelwears = [ThunkMidelWear]


const WebStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(...Midelwears) ))


export default WebStore;
