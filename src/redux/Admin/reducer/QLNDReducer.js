const initialState = {
    arrUser: [],
    thongTinUser: {},
    timUser: {},
    arrTCV: [],
    thongtinTCV: {},
    arrBL: [],


}

export const QLNDreducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_USER_LIST":

            state.arrUser = action.arrUser
            return { ...state }
        case "TIM_USER":
            console.log(action.timUser);
            state.arrUser = action.arrUser
            return { ...state }
        case "GET_THONG_TIN_USER":

            state.thongTinUser = action.thongTinUser
            return { ...state }


        // TCV
        case "LIST_TCV":
            state.arrTCV = action.arrTCV
            return { ...state }

        case "GET_THONG_TIN_TCV":
            state.thongtinTCV = action.thongtinTCV
            return { ...state }
            
            case "TIM_TCV":
                console.log(action.arrTCV);
                state.arrTCV = action.arrTCV
                return { ...state }

        // BÌNH LUẬN

        case "LIST_BL":
            state.arrBL = action.arrBL
            return { ...state }
        case "TIM_CMT":
            console.log(action.arrBL);
            state.arrBL = action.arrBL
            return { ...state }

        default:
            return state
    }
}

