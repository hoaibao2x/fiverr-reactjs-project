import { http } from "../../utils/setting";

export const getDetailJob = (id) => {
    return http.get(`/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`)
}