const initialState = {
    arrUser: [],
  

}

export const QLNDreducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_USER_LIST":
          
            state.arrUser = action.arrUser
            return { ...state }
      
        default:
            return state
    }
}

