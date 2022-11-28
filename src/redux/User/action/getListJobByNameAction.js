import { getListJobByName } from "../reducer/ListJobByNameReducer"

export const getListJobByNameAction = (id) =>{
    return async (dispatch) =>{
        try {
            const result = await getListJobByName(id);
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}