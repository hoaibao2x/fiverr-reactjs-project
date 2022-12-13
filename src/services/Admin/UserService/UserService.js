import { http } from '../../../utils/setting'

export const danhSachUser = (name = "") => {
    if (name.trim() !== "") {
        return http.get(`/users?name=${name}`);
    }
    return http.get('/users');
}

export const ThemUser = (formData) => {
    return http.post('/users' ,formData )
}
export const ThemUserupload = (formData) => {
    return http.post('/users/upload-avatar', formData)
}

export const xoaUser = (id) => {
    return http.delete(`/users?id=${id}`);
}

export const searchUser = (name) => {
    return http.get(`/users/search?TenNguoiDung=${name}`)
}














// dịch vụ sevice
export const listThueCongViec = () => { 
    return http.get("/thue-cong-viec")
 }

 export const postThueCongViec = () => { 
    return http.post("/thue-cong-viec")
 }