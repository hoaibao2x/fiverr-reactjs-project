import { history } from "../../../App";
import { loginService } from "../../../services/User/signInAndSignUp";
import { TOKEN } from "../../../utils/varsSetting";
import { displayLoadingAction, hideLoadingAction } from "../../loadingAction";

export const loginAction = (formValue) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await loginService(formValue);
            localStorage.setItem(TOKEN, result.data.content.token);

            dispatch(hideLoadingAction);

            alert('Đăng nhập thành công !');
            history.push('/admin');
        } catch (errors) {
            dispatch(hideLoadingAction);
            alert(errors.response.data.content);
        }
    }
}