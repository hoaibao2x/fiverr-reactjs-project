import { http } from "../../utils/setting";

export const getListJobByID = (id) => {
    return http.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`)
}