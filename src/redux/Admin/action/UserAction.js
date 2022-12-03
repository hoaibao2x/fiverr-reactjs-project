import { history } from "../../../App";
import { danhSachUser, searchUser, ThemUser, ThemUserupload, xoaUser } from "../../../services/Admin/UserService/UserService";


export const danhSachUserAction = (name="") => {
    return async (dispatch) => {
        try {
            const result = await danhSachUser(name)
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

export const xoaUserAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await xoaUser(id);
            alert('Xoá người dùng thành công !');
            console.log(result.data.content);
            dispatch(danhSachUserAction());

        } catch (error) {
            console.log(error.response?.data);
            alert("Thao tác thất bại!")
        }

    }
}

export const searchUserAction = (name) => {
    return async (dispatch) => {
        try {
            const result = await searchUser(name);         
            console.log(result.data.content);
            dispatch({
                type : "TIM_USER",
                timUser:result.data.content
            })


        } catch (error) {
            console.log(error.response?.data);
            alert("Thao tác thất bại!")
        }

    }
}