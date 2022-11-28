import { http } from '../../../utils/setting'

export const getJobTypeDetail = () => {
    return http.get('/chi-tiet-loai-cong-viec');
}

export const getJobTypeDetailByID = (id) => {
    return http.get(`/chi-tiet-loai-cong-viec/${id}`);
}