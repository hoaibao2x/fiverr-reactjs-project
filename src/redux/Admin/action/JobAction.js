import { getListJob, getListJobByName } from "../../../services/Admin/JobService/jobService"
import { displayLoadingAction, hideLoadingAction } from "../../loadingAction";

export const getListJobAction = () => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);
            let result = await getListJob();

            let action = {
                type: 'GET_LIST_JOB',
                jobArr: result.data.content
            }
            dispatch(action);

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors)
        }
    }
}

export const getListJobByNameAction = (tenJob) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);
            let result = await getListJobByName(tenJob);

            let tempResult = result.data.content;
            let tempArr = []
            tempResult.map((item) => {
                return tempArr.push(item.congViec);
            })

            let action = {
                type: 'GET_LIST_JOB_BY_NAME',
                jobArr: tempArr
            }
            dispatch(action);

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors)
        }
    }
}