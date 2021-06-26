import axios from '../../../config/axios';
import tokenAuth from '../../../config/tokenAuth';
import { 
    authLogin, 
    authSuccess, 
    authFail
} from './authDispatch';

export function login(data) {
    return async (dispatch)=>{
        try {
            const response = await axios.post('auth/login', data);
            dispatch( authLogin({ data: response.data, success: true }) );
        } catch (error) { throw error; }
    };
};

export function loginSuccess(token) {
    return async (dispatch)=>{
        try {
            tokenAuth(token);
            const response = await axios.get('user/getMe');
            dispatch( authSuccess({ data: response.data.data, success: true }) );
            return response.data.data;
        } catch (error) {
            const message = error.response.data.message || "error.response.data.message";
            dispatch( authFail({ message, fail: true  }) )
            throw error;
         }
    }
};