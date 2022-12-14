const initialState = {
    arrUser: [],
    thongTinUser: {},
    timUser: {},
    arrTCV: [],


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
        case "GET_THONG_TIN_USER":
         
            state.thongTinUser = action.thongTinUser
            return { ...state }


        // TCV
        case "LIST_TCV":
            state.arrTCV = action.arrTCV
            return { ...state }

        default:
            return state
    }
}

