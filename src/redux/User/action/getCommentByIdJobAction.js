import { getCommentByIdJob } from "../../../services/User/getCommentService";
import { GET_COMMENT_ID_JOB } from "../type/ManageListJobType";
export const getCommentByIdJobAction = (idJob) => {
    return async (dispatch) => {
        try {
            const result = await getCommentByIdJob(idJob);
            let action = {
                type:GET_COMMENT_ID_JOB,
                idJob : result.data.content
            }
           dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}