import { GET_DETAIL_JOB, GET_DETAIL_JOB_ID } from "../type/ManageListJobType";


const initialState = {
    listDetail: [],
    listjobID: []
}

export const ListDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DETAIL_JOB: {
            state.listDetail = action.id
            state.listjobID = []
            return { ...state }
        }
        case GET_DETAIL_JOB_ID: {
            state.listjobID = action.id
            return { ...state }
        }


        default:
            return state
    }
}
