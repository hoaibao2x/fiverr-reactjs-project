import { history } from "../../../App";
import { addJobType, getJobTypeByID, getListJobType, removeJobType, updateJobType } from "../../../services/Admin/JobService/jobTypeService";
import { displayLoadingAction, hideLoadingAction } from "../../loadingAction";

export const getListJobTypeAction = () => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await getListJobType();
            let action = {
                type: 'GET_LIST_JOB_TYPE',
                jobTypeArr: result.data.content
            }
            dispatch(action)

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors)
        }
    }
}

export const getJobTypeByIDAction = (jobTypeID) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await getJobTypeByID(jobTypeID);

            let objToArr = [];
            objToArr.push(result.data.content);
            let action = {
                type: 'GET_JOB_TYPE_BY_ID',
                jobTypeByID: objToArr,
                jobTypeInfo: result.data.content
            }
            dispatch(action);

            dispatch(hideLoadingAction);
        } catch (errors) {
            alert('ID không tồn tại !');
            dispatch(hideLoadingAction);
        }
    }
}

export const addJobTypeAction = (formValue) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await addJobType(formValue);
            alert('Thêm loại công việc thành công !');
            history.push('/admin/list-job-type');

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors);
        }
    }
}

export const removeJobTypeAction = (jobTypeID) => {
    return async (dispatch) => { 
        try {
            dispatch(displayLoadingAction);

            let result = await removeJobType(jobTypeID);
            alert('Xóa loại công việc thành công !');
            dispatch(getListJobTypeAction());

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);

            console.log(errors)
        }
     }
}

export const updateJobTypeAction = (jobTypeID, jobTypeValue) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await updateJobType(jobTypeID, jobTypeValue);
            alert('Cập nhật loại công việc thành công !');
            history.push('/admin/list-job-type')

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);

            console.log(errors)
        }
    }
}