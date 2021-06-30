import {
    USER_EDIT
} from '../../types/user';
// UPDATE STATE IN: authReducer
export const userEdit = (response)=>({
    type: USER_EDIT,
    payload: response
});