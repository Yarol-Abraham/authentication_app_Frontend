import axios from '../../../config/axios';
import tokenAuth from '../../../config/tokenAuth';
import Cookies from 'js-cookie';
import { userEdit } from './userDispatch';

const getToken = function () {
    try {
        const token = Cookies.get('jwt') || null;
        if(!token) throw new Error("An error has occurred, please log in again!");
        tokenAuth(token);
    } catch (error) { throw error; }
};

export function editMe(data) {
    return async ( dispatch )=>{
        try {
            getToken();
            const response = await axios.patch('user/uploadMe', data);
            dispatch( userEdit( { user: response.data.data } ) );
            console.log(response.data.data);
            return response.data;
        } catch (error) { throw error; }  
    };
};