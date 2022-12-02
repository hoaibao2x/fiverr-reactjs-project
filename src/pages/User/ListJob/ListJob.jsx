import React from 'react';
import { useSelector } from 'react-redux';
import emptyImg from '../../../assets/User/images/empty-search-results.png';
import './listJob.css';
import { Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';





export default function ListJob(props) {
  const { listjob } = useSelector(state => state.ListJobByNameReducer);

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

  const renderListJob = () => {
    return listjob.map((job, index) => {
      const { congViec } = job
      return <div className="card" key={index}>
        <div className='card-img'>
          <img src={congViec.hinhAnh} className="card-img-job" alt="..." />
        </div>
        <div className="card-body">
          <div className='card-avatar'>
            <div className='card-avatar-job'>
              <img className='img-avatar' src={job.avatar} alt="" />
            </div>
            <div className='card-content'>
              <p className='card-content-adim'>{job.tenNguoiTao}</p>
              <p className='card-content-adimCV '>{job.tenLoaiCongViec}</p>
            </div>
          </div>
          <p className="card-title">{congViec.tenCongViec}</p>

          <Rate allowHalf value={congViec.saoCongViec} />
          <span className='card-text'>{congViec.danhGia}</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><i className="fa-solid fa-heart icon-heart"></i></li>
          <li className='list-group-item'>STARTING AT ${congViec.giaTien}</li>
        </ul>
      </div>
    })
  }

  return (
    <div>
      <div className='suggested'>
        <p className='sug-text'>Suggested</p>
        <button className='sug'>html css</button>
        <button className='sug'>html website</button>
        <button className='sug'>psd to html</button>
        <button className='sug'>html email</button>
        <button className='sug'>css</button>
        <button className='sug'>figma to html</button>
        <button className='sug'>javascript</button>
      </div>
      <div className='result'>
        <h2 className='result-html'>Result for "html"</h2>
        <div className='result-btn'>
          <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
            Category
          </button>
          <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
            Service Options
          </button>
          <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
            Seller Details
          </button>
          <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
            Budget
          </button>
          <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
            Delivery time
          </button>
          <div className='result-right-cover'>
            <div className='result-right'>
              <button className='btn-right'>
                <div className='cricle-btn'></div>
              </button>
              <span>Pro services</span>
            </div>

            <div className='result-right'>
              <button className='btn-right'>
                <div className='cricle-btn'></div>
              </button>
              <span>Local sellers</span>
            </div>

            <div className='result-right'>
              <button className='btn-right'>
                <div className='cricle-btn'></div>
              </button>
              <span>Online sellers</span>
            </div>
          </div>
        </div>

        <div className='list-job'>
          {renderListJob()}
        </div>
        <div>
        </div>


      </div>
    </div>


  )
}
