import { getListJob, getListJobByName } from "../../../services/Admin/JobService/jobService"

export const getListJobAction = () => {
    return async (dispatch) => {
        try {
            let result = await getListJob();

            let action = {
                type: 'GET_LIST_JOB',
                jobArr: result.data.content
            }
            dispatch(action);
        } catch (errors) {
            console.log(errors)
        }
    }
}

export const getListJobByNameAction = (tenJob) => {
    return async (dispatch) => {
        try {
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
        } catch (errors) {
            console.log(errors)
        }
    }
}