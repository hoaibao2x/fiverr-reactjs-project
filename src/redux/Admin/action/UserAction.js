import { history } from "../../../App";
import { danhSachUser, ThemUser, ThemUserupload } from "../../../services/Admin/UserService/UserService";


export const danhSachUserAction = () => {
    return async (dispatch) => {
        try {
            const result = await danhSachUser()
            dispatch({
                type: 'GET_USER_LIST',
                arrUser: result.data.content
            })

        } catch (error) {
            console.log(error);

        }
    }
}

export const ThemUserAction = () => {
    return async (dispatch) => {
        try {
            const result = await ThemUser();
            alert('Thêm người dùng thành công !');
            console.log(result.data.content);

        } catch (error) {
            console.log(error.response?.data);
            alert("Thêm thất bại!")
        }

    }

}

export const ThemUseruploadAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await ThemUserupload(formData);
            alert('Thêm người dùng thành công !');
            console.log(result.data.content);

        } catch (error) {
            console.log(error.response?.data);
            alert("Thêm thất bại!")
        }

    }

}