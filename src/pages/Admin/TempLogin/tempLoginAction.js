import { loginService } from "./tempLoginService";
import {history} from '../../../App'
import { TOKEN } from "../../../utils/varsSetting";

export const loginAction = (formValue) => {
    return async (dispatch) => { 
        try {
            let result = await loginService(formValue);
            localStorage.setItem(TOKEN, result.data.content.token);

            history.push('/admin');
        } catch (errors) {
            console.log(errors);
        }
     }
}