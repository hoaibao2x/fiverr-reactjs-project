import { http } from '../../../utils/setting'

export const danhSachUser = () => {
    return http.get('/users');
}