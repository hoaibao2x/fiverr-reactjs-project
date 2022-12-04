import { GET_DETAIL_JOB } from "../type/ManageListJobType"

const initialState = {
    listDetail: []
}

export const ListDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DETAIL_JOB: {
            state.listDetail = action.id
            return { ...state }
        }


        default:
            return state
    }
}
