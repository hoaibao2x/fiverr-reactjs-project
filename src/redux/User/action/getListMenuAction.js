import { getListMenu } from "../../../services/User/getListMenuService"

export const getListMenuAction = () => {
    return async (dispatch) => {
        try {
            const result = await getListMenu();
            let action = {
                type: 'GET_LIST_MENU_JOB',
                listMenu: result.data.content
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}