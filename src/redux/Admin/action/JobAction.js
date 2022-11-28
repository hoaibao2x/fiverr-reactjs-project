import { history } from "../../../App";
import { addJob, getJobInfo, getListJob, getListJobByName, removeJob, updateJobInfo, uploadJobImage } from "../../../services/Admin/JobService/jobService"
import { JOB_ID, JOB_IMG, JOB_INFO } from "../../../utils/varsSetting";
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

export const addJobAction = (formValue) => {
    return async () => {
        try {
            let result = await addJob(formValue);
            alert('Thêm công việc thành công !');
            localStorage.setItem(JOB_ID, result.data.content.id);
            history.push('/admin/list-job/add/upload-image');
        } catch (errors) {
            console.log(errors);
        }
    }
}

export const removeJobAction = (jobID) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await removeJob(jobID);
            alert('Xóa công việc thành công !');
            dispatch(getListJobAction());

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors);
        }
    }
}

export const uploadJobImgAction = (jobID, formValue) => {
    return async () => {
        try {
            let result = await uploadJobImage(jobID, formValue);
            localStorage.removeItem(JOB_ID);
            localStorage.removeItem(JOB_INFO);
            localStorage.removeItem(JOB_IMG);
            alert('Upload ảnh thành công !');
            history.push('/admin/list-job');
        } catch (errors) {
            alert(errors.response.data.content);
            console.log(errors);
        }
    }
}

export const getJobInfoAction = (jobID) => {
    return async (dispatch) => {
        try {
            let result = await getJobInfo(jobID);

            let action = {
                type: 'JOB_INFO',
                jobInfo: result.data.content
            }
            dispatch(action);

            history.push(`/admin/list-job/edit-job/${result.data.content.id}`)
        } catch (errors) {
            console.log(errors)
        }
    }
}

export const updateJobInfoAction = (jobID, formData) => {
    return async (dispatch) => {
        try {
            let result = await updateJobInfo(jobID, formData);
            alert('Cập nhật thành công !');

            history.push('/admin/list-job');
            localStorage.removeItem(JOB_ID);
            localStorage.removeItem(JOB_IMG);

            dispatch(getListJobAction());
        } catch (errors) {
            console.log(errors);
        }
    }
}