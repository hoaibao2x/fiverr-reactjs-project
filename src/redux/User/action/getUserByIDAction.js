import { getUserByID } from "../../../services/User/getUserByIDService"
import { GET_USER_BY_ID } from "../type/ManageListJobType"

export const getUserByIDAction = (userID) => {
    return async (dispatch) => {
        try {
            const result = await getUserByID(userID)
            let action ={
                type: GET_USER_BY_ID,
                userID: result.data.content
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}