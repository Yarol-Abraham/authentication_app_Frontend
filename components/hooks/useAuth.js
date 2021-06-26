import { useDispatch, useSelector } from 'react-redux';

import {
    login,
    loginSuccess
} from '../../redux/actions/auth/authActions';

import {
    showLoading,
    hideLoading,
    hideAlert,
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
    const _login = (data)=> dispatch( login(data) );
    const _loginSuccess = (token)=> dispatch( loginSuccess(token) );
    // SELECTOR
    const auth =  useSelector( state => state.auth );
    // HANDLES
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

    return {
        handleLogin,
        handleLoginSuccess,
        auth
    }
};

export default useAuth;
