const initialState = {
    jobTypeDetail: {}
}

export const JobTypeDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_JOB_TYPE_DETAIL':
            state.jobTypeDetail = {...action.jobTypeDetail};
            return { ...state }

        default:
            return state
    }
}
