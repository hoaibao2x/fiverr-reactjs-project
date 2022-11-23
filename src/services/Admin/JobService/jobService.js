import { http } from '../../../utils/setting'

export const getListJob = () => {
    return http.get('/cong-viec');
}

export const getListJobByName = (tenJob) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenJob}`)
}