import { getJobTypeDetailByID } from "../../../services/Admin/JobService/jopTypeDetailService";
import { JOB_TYPE } from "../../../utils/varsSetting";

export const getJobTypeDetailAction = (jobTypeID) => {
    return async (dispatch) => {
        try {
            let result = await getJobTypeDetailByID(jobTypeID);

            let action = {
                type: 'GET_JOB_TYPE_DETAIL',
                jobTypeDetail: result.data.content
            }
            dispatch(action);
        } catch (errors) {
            console.log(errors);
        }
    }
}