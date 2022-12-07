const initialState = {
    jobTypeDetail: {},
    jobTypeDetailArr: [],
    jobTypeDetailOnSearch: [],
}

export const JobTypeDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_JOB_TYPE_DETAIL':
            state.jobTypeDetail = { ...action.jobTypeDetail };
            state.jobTypeDetailArr = [...action.jobTypeDetailOnSearch];
            return { ...state }

        case 'GET_LIST_JOB_TYPE_DETAIL':
            state.jobTypeDetailArr = [...action.jobTypeDetailArr];
            return { ...state }

        case 'ADD_DETAIL_JOB_INFO':
            state.jobTypeDetail = { ...action.jobTypeDetail };
            return { ...state }

        case 'ADD_DETAIL_JOB_ARR':
            state.jobTypeDetail.danhSachChiTiet = { ...action.detailJobArr }
            console.log(state.jobTypeDetail)
            return { ...state }

        default:
            return state
    }
}
