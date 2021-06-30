import Cookies from 'js-cookie';
import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_SUCCESS,
    AUTH_FAIL
} from '../types/auth';
import {
    USER_EDIT
} from '../types/user';
const initialState = {
    user: null,
    success: false,
    fail: false,
    loading: false,
    message: ""
};
const sendToken = (token)=>{
    Cookies.set('jwt', token, { 
        expires: new Date( Date.now() + process.env.EXPIRE_TOKEN * 24 * 60 * 60 * 1000 )
    });
};

const removeToken = ()=>{ Cookies.remove('jwt') }

function authReducer( state = initialState, action ) {
    
    switch(action.type){

        case AUTH_LOGIN:
            sendToken(action.payload.data.token)
            return{
                ...state,
                user: action.payload.data.data,
                success: action.payload.success
            }
            
        case AUTH_LOGOUT:
            removeToken();
            return{
                ...state,
                user: action.payload.data,
                success: action.payload.success
            }

        case AUTH_SUCCESS:
            return{
                ...state,
                user: action.payload.data,
                success: action.payload.success
            }
        
        case AUTH_FAIL:
            return{
                ...state,
                fail: action.payload.fail,
                message: action.payload.message
            }
        
        case USER_EDIT: 
            return {
                ...state,
                user: action.payload.user
            }

        default:
            return state;
    }
    
};

export default authReducer;