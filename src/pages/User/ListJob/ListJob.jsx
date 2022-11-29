import React from 'react';
import { useSelector } from 'react-redux';





export default function ListJob(props) {

  const { listjob } = useSelector(state => state.ListJobByNameReducer);




  return (
    <div>List Detail Jobs</div>
  )
}
