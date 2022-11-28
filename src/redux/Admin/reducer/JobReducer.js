import { JOB_INFO } from "../../../utils/varsSetting";

const initialState = {
  jobArr: [],
  jobInfo: {}
}

export const JobReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_LIST_JOB':
      state.jobArr = action.jobArr;
      return { ...state }

    case 'GET_LIST_JOB_BY_NAME':
      state.jobArr = action.jobArr;
      return { ...state }

    case 'JOB_INFO':
      state.jobInfo = action.jobInfo;
      return { ...state }

    default:
      return state
  }
}
