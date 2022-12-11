import { http } from '../../utils/setting'

export const getInfoByID = (userID) => {
    return http.get(`/users/${userID}`);
}

export const updateUserInfo = (userID, formValue) => {
    return http.put(`/users/${userID}`, formValue);
}