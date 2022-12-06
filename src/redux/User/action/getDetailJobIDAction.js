import { getListJobByID } from "../../../services/User/getListJobByIDService";
import { GET_DETAIL_JOB_ID } from "../type/ManageListJobType";


export const getDetailJobIDAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await getListJobByID(id)
            let action = {
                type: GET_DETAIL_JOB_ID,
                id: result.data.content
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}