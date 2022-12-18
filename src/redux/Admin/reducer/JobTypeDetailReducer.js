const initialState = {
    jobTypeDetail: {},
    jobTypeDetailArr: [],
    jobDetailArr: [],
    jobArr: []
}

export const JobTypeDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_JOB_TYPE_DETAIL':
            state.jobTypeDetail = { ...action.jobTypeDetail };
            state.jobTypeDetailArr = [...action.jobTypeDetailOnSearch];
            return { ...state }

        case 'GET_LIST_JOB_TYPE_DETAIL':
            state.jobTypeDetailArr = [...action.jobTypeDetailArr];
            state.jobDetailArr = [...action.jobDetailArr];
            return { ...state }

        case 'ADD_JOB_GROUP':
            state.jobTypeDetail = { ...action.jobTypeDetail };
            return { ...state }

        case 'GET_JOB_GROUP_INFO':
            state.jobTypeDetail = { ...action.jobGroupInfo };
            // state.jobArr = [...action.jobArr];
            return { ...state }

        case 'CLEAR__ARR':
            state.jobTypeDetail = { ...action.emptyArr };
            return { ...state }

        default:
            return state
    }
}
