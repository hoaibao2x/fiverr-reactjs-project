import { history } from "../../../App";
import { addDetailJobGroup, confirmAddDetailJob, getJobTypeDetail, getJobTypeDetailByID, removeDetailJobGroup } from "../../../services/Admin/JobService/jopTypeDetailService";
import { http } from "../../../utils/setting";
import { JOB_TYPE } from "../../../utils/varsSetting";
import { displayLoadingAction, hideLoadingAction } from "../../loadingAction";
import {addDetailJobArr} from '../../../services/Admin/JobService/jopTypeDetailService'

export const getJobTypeDetailAction = (jobTypeID) => {
    return async (dispatch) => {
        try {
            let result = await getJobTypeDetailByID(jobTypeID);
            let resultArr = [];
            resultArr.push(result.data.content);

            let action = {
                type: 'GET_JOB_TYPE_DETAIL',
                jobTypeDetail: result.data.content,
                jobTypeDetailOnSearch: resultArr
            }
            dispatch(action);
        } catch (errors) {
            alert(`ID ${jobTypeID} không tồn tại !`);
        }
    }
}

export const getDetailJobTypeListAction = () => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await getJobTypeDetail();
            let action = {
                type: 'GET_LIST_JOB_TYPE_DETAIL',
                jobTypeDetailArr: result.data.content
            }
            dispatch(action);

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);

            console.log(errors);
        }
    }
}

export const addDetailJobGroupAction = (formValue) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await addDetailJobGroup(formValue);
            let action = {
                type: 'ADD_DETAIL_JOB_INFO',
                jobTypeDetail: result.data.content
            }
            dispatch(action);
            history.push('/admin/list-detail-job-type/add/add-detail-arr')

            alert('Thêm nhóm loại công việc thành công !');

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors);
        }
    }
}

export const removeDetailJobGroupAction = (jobGroupID) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await removeDetailJobGroup(jobGroupID);
            alert('Xóa nhóm loại công việc thành công');
            dispatch(getDetailJobTypeListAction());

            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors);
        }
    }
}

// export const addDetailJobArrAction = (formValue) => {
//     return async (dispatch) => {
//         try {
//             let action = {
//                 type: 'ADD_DETAIL_JOB_ARR',
//                 detailJobArr: formValue
//             }
//             dispatch(action);
//             // let result = await addDetailJobArr(formValue);
//             // alert('Thêm danh sách chi tiết thành công !');
//             // console.log(result.data.content);
//         } catch (errors) {
//             console.log(errors);
//         }
//     }
// }

export const confirmAddDetailJobAction = (jobDetailID, values) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            let result = await confirmAddDetailJob(jobDetailID, values);
            alert('Thành công !');
            
            dispatch(hideLoadingAction);
        } catch (errors) {
            dispatch(hideLoadingAction);
            console.log(errors);
        }
    }
}