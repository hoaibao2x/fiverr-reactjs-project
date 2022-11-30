import React from 'react';
import { useSelector } from 'react-redux';
import emptyImg from '../../../assets/User/images/empty-search-results.png';
import './listJob.css';





export default function ListJob(props) {

  const { listjob } = useSelector(state => state.ListJobByNameReducer);
  console.log({ listjob });
  if (listjob.length == 0) {
    return <div className='container empty-br'>
      <div className='imgEmpty text-center'>
        <img className='empty' src={emptyImg} alt="empty-search-results" />
      </div>
      <div className='text-empty text-center'>
        <h2 className='text-notification'>No Results Found Your For Search</h2>
        <p className='text-notification-ct'>Try a new search or get a free quote for your project <br />
          from our community of freelancers.
        </p>
      </div>

    </div>
  }


  return (
    <div>List Detail Jobs</div>
  )
}
