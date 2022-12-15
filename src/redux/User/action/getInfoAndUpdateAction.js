import { getInfoByID, updateUserAvatar, updateUserInfo } from "../../../services/User/getInfoAndUpdate";
import { USER_ID, USER_NAME } from "../../../utils/varsSetting";
import { displayLoadingAction, hideLoadingAction } from "../../loadingAction";

export const getInfoByIDAction = (userID) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await getInfoByID(userID);
            JSON.stringify(localStorage.setItem('user_avatar', result.data.content.avatar));

            let action = {
                type: 'USER_INFO',
                userInfo: result.data.content,
                userSkillArr: result.data.content.skill,
                userCertArr: result.data.content.certification
            }
            dispatch(action);

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors);
        }
    }
}

export const updateUserInfoAction = (userID, formValue) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await updateUserInfo(userID, formValue);
            localStorage.setItem(USER_NAME, result.data.content.name);
            alert('Update info successfull !');
            window.location.reload();

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors);
        }
    }
}

export const updateUserAvatarAction = (formData) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await updateUserAvatar(formData);
            JSON.stringify(localStorage.setItem('user_avatar', result.data.content.avatar));
            alert('Upload avatar successfull !');

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            alert(errors.response.data.content);
        }
    }
}