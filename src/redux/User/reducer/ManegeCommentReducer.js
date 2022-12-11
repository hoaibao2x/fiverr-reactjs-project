import { GET_COMMENT_ID_JOB } from "../type/ManageListJobType"

const initialState = {
    listComment: []
}

export const ManegeCommentReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COMMENT_ID_JOB: {
            state.listComment = action.idJob
            return { ...state }
        }

        default:
            return state
    }
}
