const initialState = {
    userInfo: {},
    userSkillArr: [],
    userCertArr: []
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case "USER_INFO":
            state.userInfo = action.userInfo;
            state.userSkillArr = action.userSkillArr;
            state.userCertArr = action.userCertArr;
            return { ...state }

        default:
            return state
    }
}
