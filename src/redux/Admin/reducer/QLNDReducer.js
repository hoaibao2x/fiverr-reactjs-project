const initialState = {
    arrUser: [],
    timUser: {}


}

export const QLNDreducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_USER_LIST":

            state.arrUser = action.arrUser
            return { ...state }
        case "TIM_USER":
            console.log(action.timUser);
            state.timUser = action.timUser
            return { ...state }

        default:
            return state
    }
}

