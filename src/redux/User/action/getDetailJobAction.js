import { getDetailJob } from "../../../services/User/getDetailJob"
import { GET_DETAIL_JOB } from "../type/ManageListJobType"

export const getDetailJobAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await getDetailJob(id)
            let action = {
                type: GET_DETAIL_JOB,
                id: result.data.content
            }
            dispatch(action)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}