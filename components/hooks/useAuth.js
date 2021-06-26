import { useDispatch, useSelector } from 'react-redux';

import {
    signup,
    login,
    loginSuccess,
    loginLogout
} from '../../redux/actions/auth/authActions';

import {
    showLoading,
    hideLoading,
    showAlert
} from '../utils/alert';

const sendMessage = function(data, msg = "An unexpected error has occurred", status = "Fail") {
    let message = msg; 
    let type = status;
    if(data.message) message = data.message;
    if(data.status) type = data.status;
    hideLoading();
    showAlert(type, message);
}

function useAuth() {
    const dispatch = useDispatch();
    // DISPATCH
    const _signup = (data)=> dispatch( signup(data) );
    const _login = (data)=> dispatch( login(data) );
    const _loginSuccess = (token)=> dispatch( loginSuccess(token) );
    const _loginLogout = ()=> dispatch( loginLogout() );
    // SELECTOR
    const auth =  useSelector( state => state.auth );
    // HANDLES
    const handleSignup = async function(data) {
        try {
            showLoading();
            await _signup(data);
            hideLoading();
        } catch (error) { sendMessage(error.response.data); }
     }

    const handleLogin = async function(data) {
        try {
            showLoading();
            await _login(data);
            hideLoading();
        } catch (error) { sendMessage(error.response.data); }
     }

    const handleLoginSuccess = async function(token){
        try {
           return await _loginSuccess(token);
        } catch (error) { throw error; }
    }

    const handleloginLogout = function () { _loginLogout(); }

    return {
        handleSignup,
        handleLogin,
        handleLoginSuccess,
        handleloginLogout,
        auth
    }
};

export default useAuth;
