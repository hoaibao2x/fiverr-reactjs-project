
import { history } from '../../../App';
import { GET_NAME_JOB } from '../type/ManageListJobType';
import { GET_LIST_JOB_ID } from '../../../redux/User/type/ManageListJobType';


const initialState = {
  listjob: [],
}



export const ListJobByNameReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_NAME_JOB: {
      state.listjob = action.jobList
      history.push('/user/listjob')
      return { ...state }
    }
    case GET_LIST_JOB_ID: {
      state.listjob = action.id
      return { ...state }
    }

    default:
      return state
  }
}
