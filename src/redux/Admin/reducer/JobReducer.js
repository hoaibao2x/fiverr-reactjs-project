const initialState = {
    jobArr: []
}

export const JobReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_LIST_JOB':
      state.jobArr = action.jobArr;
    return { ...state }

    case 'GET_LIST_JOB_BY_NAME':
      state.jobArr = action.jobArr;
    return { ...state }

  default:
    return state
  }
}
