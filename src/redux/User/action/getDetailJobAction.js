import {getDetailJob} from '../../../services/User/getDetailJobService'
import { GET_DETAIL_JOB } from "../type/ManageListJobType"

export const getDetailJobAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await getDetailJob(id)
            let action = {
                type: GET_DETAIL_JOB,
                id: result.data.content
            }
         await dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}