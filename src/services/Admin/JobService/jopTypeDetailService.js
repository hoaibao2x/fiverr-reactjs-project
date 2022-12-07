import { http } from '../../../utils/setting'

export const getJobTypeDetail = () => {
    return http.get('/chi-tiet-loai-cong-viec');
}

export const getJobTypeDetailByID = (id) => {
    return http.get(`/chi-tiet-loai-cong-viec/${id}`);
}

export const addDetailJobGroup = (formValue) => {
    return http.post('/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai', formValue);
}

export const removeDetailJobGroup = (jobGroupID) => {
    return http.delete(`/chi-tiet-loai-cong-viec/${jobGroupID}`);
}

export const confirmAddDetailJob = (jobDetailID,values) => {
    return http.put(`/chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/${jobDetailID}`, values);
}

// export const addDetailJobArr = (formValue) => {
//     return http.post('/chi-tiet-loai-cong-viec', formValue);
// }