import {
    AUTH_LOGIN, 
    AUTH_LOGOUT,
    AUTH_SUCCESS,
    AUTH_FAIL
} from '../../types/auth';

export const authLogin = (response)=>({
    type: AUTH_LOGIN,
    payload: response
});

export const authLogout = (response)=>({
    type: AUTH_LOGOUT,
    payload: response
})

export const authSuccess = (response)=>({
    type: AUTH_SUCCESS,
    payload: response
})

export const authFail = (response)=>({
    type: AUTH_FAIL,
    payload: response
})
