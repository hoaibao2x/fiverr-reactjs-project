const initialState = {
    jobTypeArr: [],
    jobTypeInfo: {}
}

export const JobTypeReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_LIST_JOB_TYPE":
            state.jobTypeArr = action.jobTypeArr;
            return { ...state }

        case "GET_JOB_TYPE_BY_ID":
            state.jobTypeArr = action.jobTypeByID;
            state.jobTypeInfo = action.jobTypeInfo;
            return { ...state }

        default:
            return state
    }
}
