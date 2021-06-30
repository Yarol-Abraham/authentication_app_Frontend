import { useDispatch, useSelector } from 'react-redux';

import {
    editMe
} from '../../redux/actions/user/userActions';

import {
    showLoading,
    hideLoading,
    showAlert
} from '../utils/alert';

const sendMessage = function(data, msg = "An unexpected error has occurred", status = "Fail") {
    hideLoading();
    let message = msg; 
    let type = status;
    if(data.message) message = data.message;
    if(data.status) type = data.status;
    showAlert(type, message);
}

function useUser() {
    const dispatch = useDispatch();
    //DISPATCH
    const _editMe = (data) => dispatch( editMe(data) );
    //SELECTOR
    const user =  useSelector( state => state.user );
    //HANDLERS
    const handleEditMe = async function(data, photo) {
        let message = {}; 
        try {
            showLoading();
            const formData = new FormData();
            if(data) Object.keys(data).forEach(field => formData.append(field, data[field]));
            if(photo) formData.append("photo", photo);
            const res = await _editMe(formData);
            sendMessage(res);
        } catch (error) { 
            if(error.response.data) return sendMessage(error.response.data);;
            sendMessage(message);
         }  
    };

    return {
        handleEditMe,
        user
    }

};

export default useUser;