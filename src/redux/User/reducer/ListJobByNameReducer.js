
import { history } from '../../../App';
import { GET_NAME_JOB } from '../type/ManageListJobType';


const initialState = {
  listjob: []
}



export const ListJobByNameReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_NAME_JOB: {
      // if (action.jobList.length == 0) {
      //   alert('404 not found!')
      // } else {
      //   state.listjob = action.jobList
      //   history.push('/listjob')
      // }
      state.listjob = action.jobList
      history.push('/listjob')
      return { ...state }
    }

    default:
      return state
  }
}
