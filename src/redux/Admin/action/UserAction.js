import { history } from "../../../App";
import { danhSachUser } from "../../../services/Admin/UserService/UserService";

export const danhSachUserAction = ()=>{
    return async (dispatch) =>{
        try {
            const result = await danhSachUser()
            dispatch({
                type: 'GET_USER_LIST',
                arrUser: result.data.content
            })
            
        } catch (error) {
            console.log(error);
            
        }
    }
}