import { history } from "../../../App";
import { CapNhatUser, danhSachUser, LayThongTinUser, listThueCongViec, postThueCongViec, searchUser, ThemUser, ThemUserupload, xoaUser } from "../../../services/Admin/UserService/UserService";
import { USER_AVATAR,USER_ID } from "../../../utils/varsSetting";


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

export const ThemUserAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await ThemUser(formData);
            alert('Thêm người dùng thành công !');
            history.push('/admin/list-user');
        } catch (error) {
            console.log(error.response?.data);
            alert("Thêm thất bại!")
        }

    }

}
export const LayThongTinUserAction = (id) => { 
    return async (dispatch) => {
        try {
            const result = await LayThongTinUser(id)
            dispatch({
                type : "GET_THONG_TIN_USER",
                thongTinUser : result.data.content,
            })  
        } catch (error) {
            console.log(error);

        }
    }
 }

 export const CapNhatUserAction = (id) => { 
    return async (dispatch) => {
        try {
            const result = await CapNhatUser(id)
            alert('Cập nhật người dùng thành công !');
           
        } catch (error) {
            console.log(error.response?.data);
            alert("Cập nhật thất bại!")

        }
    }
  }

export const ThemUseruploadAction = (formData,USER_ID) => {
    return async (dispatch) => {
        try {
            const result = await ThemUserupload(formData,USER_ID);
            alert('Thêm người dùng thành công !');
            localStorage.removeItem(USER_ID);
            localStorage.removeItem(USER_AVATAR);
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







// dịch vụ action
export const listThueCongViecAction = () => {
    return async (dispatch) => {
        try {
            const result = await listThueCongViec();
            dispatch({
                type: 'LIST_TCV',
                arrTCV: result.data.content
            })

        } catch (error) {
            console.log(error);

        }
    }
}


export const ThemCongViecAction = () => {
    return async (dispatch) => {
        try {
            const result = await postThueCongViec();
            alert('Thêm người thuê công việc thành công !');
            console.log(result.data.content);

        } catch (error) {
            console.log(error.response?.data);
            alert("Thêm thất bại!")
        }

    }

}