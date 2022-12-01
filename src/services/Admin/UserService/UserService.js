import { http } from '../../../utils/setting'

export const danhSachUser = () => {
    return http.get('/users');
}

export const ThemUser = () => {
    return http.post('/users')
}
export const ThemUserupload = (formData) => {
    return http.post('/users/upload-avatar',formData)
}