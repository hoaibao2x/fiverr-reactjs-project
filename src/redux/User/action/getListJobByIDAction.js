import { getListJobByID } from "../../../services/User/getListJobByIDService";
import { GET_LIST_JOB_ID } from '../../../redux/User/type/ManageListJobType';

export const getListJobByIDAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await getListJobByID(id)
            let action = {
                type: GET_LIST_JOB_ID,
                id: result.data.content
            }
            dispatch(action)
            console.log(result.data.content)
        } catch (error) {
            console.log(error)
        }
    }
}