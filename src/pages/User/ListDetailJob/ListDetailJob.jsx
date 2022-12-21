import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './listDetailJob.css';
import imgLogo from '../../../assets/User/images/Logo design_2x.png';
import imgHouse from '../../../assets/User/images/Architecture _ Interior Design_2x.png';
import imgStart from '../../../assets/User/images/Photoshop Editing_2x.png';
import imgMonkey from '../../../assets/User/images/Nft Art (1).png';
import imgShirt from '../../../assets/User/images/T-Shirts _ Merchandise_2x.png';
import { BackTop, Rate } from 'antd';
import { getListJobByIDAction } from '../../../redux/User/action/getListJobByIDAction';
import { history } from '../../../App';
import { useEffect } from 'react';
import imgBgUpdate from '../../../assets/User/images/graphics-design-desktop-update.jpg'



export default function ListDetailJob(props) {

  const dispatch = useDispatch()

  const { listDetail, listjob } = useSelector(state => state.ManegeListJobReducer);


  const listGp = () => {
    return listDetail.map((nameJob, index) => {
      const { dsNhomChiTietLoai } = nameJob
      if (dsNhomChiTietLoai.length == 0) {
        return <div className='container' key={index}>
          <h2 className='text-center'>This Group is updating</h2>
        </div>
      }
    })
  }

  const renderGroupJob = () => {
    return listDetail.map((nameJob, index) => {
      const { dsNhomChiTietLoai } = nameJob
      return <Fragment key={index}>
        {dsNhomChiTietLoai.map((groupJob, index) => {
          const { dsChiTietLoai } = groupJob
          return <div key={index}>
            <div className='card-detail'>
              <img src={groupJob.hinhAnh} className="card-img-detail" alt="..." />
            </div>
            <div className="card-body-group">
              <h4 className="card-title-group">{groupJob.tenNhom}</h4>
              <ul className="list-detal">
                {dsChiTietLoai.map((nameDetail, index) => {
                  return <li onClick={() => {
                    let action = getListJobByIDAction(nameDetail.id)
                    dispatch(action)
                  }} className="name-item" key={index}>{nameDetail.tenChiTiet}</li>
                })}
              </ul>
            </div>

          </div>
        })}
      </Fragment>
    })
  }

  const renderJob = () => {
    return listjob.map((job, index) => {
      const { congViec } = job
      return <div onClick={() => {
        history.push(`/user/infojob/${job.id}`)
      }} className="card job__card" key={index}>
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
              <p className='card-content-adimCV '>{job.tenChiTietLoai}</p>
            </div>
          </div>
          <p className="card-title">{congViec.tenCongViec}</p>
          <Rate allowHalf value={congViec.saoCongViec} disabled />
          <span className='card-text'>{congViec.danhGia}</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><i className="fa-solid fa-heart icon-heart"></i></li>
          <li className='list-group-item font-weight-bold'>STARTING AT ${congViec.giaTien}</li>
        </ul>
      </div>
    })
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='graphic'>
      <div className='graphic-bg'>
        {window.innerWidth >= 414 && window.innerHeight >= 736 ? <>
          <img className='img-fluid' src={imgBgUpdate} alt="" />
        </> : <>
          Haha
        </>}
      </div>
      <div className='graphic-bg-under'>
        <div className='graphic-left'>
          <h3>Most popular in Graphic & Design</h3>
        </div>
        <div className='graphic-right'>
          <div className='graphic-arrow-left'></div>
          <div className='graphic-arrow-right'></div>
        </div>
      </div>
      <div className='graphic-btn'>
        <button className='btn-logo'>
          <img className='img-logo' src={imgLogo} alt="" />
          <span className='text-logo'>Minimalist Logo Design</span>
          <span className="XQskgrQ arrow m-l-12" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" /></svg></span>

        </button>
        <button className='btn-logo'>
          <img className='img-logo' src={imgHouse} alt="" />
          <span className='text-logo'>Architecture & Interior Design</span>
          <span className="XQskgrQ arrow m-l-12" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" /></svg></span>

        </button>
        <button className='btn-logo'>
          <img className='img-logo' src={imgStart} alt="" />
          <span className='text-logo'>Image Editing</span>
          <span className="XQskgrQ arrow m-l-12" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" /></svg></span>

        </button>
        <button className='btn-logo'>
          <img className='img-logo' src={imgMonkey} alt="" />
          <span className='text-logo'>NFT Art</span>
          <span className="XQskgrQ arrow m-l-12" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" /></svg></span>

        </button>
        <button className='btn-logo'>
          <img className='img-logo' src={imgShirt} alt="" />
          <span className='text-logo'>T-Shirts & Merchandise</span>
          <span className="XQskgrQ arrow m-l-12" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" /></svg></span>

        </button>
      </div>
      <div className='explore-graphic-design'>
        <h3>Explore Graphic & Design</h3>
        <div className='groupJob'>
          {listjob.length === 0 ? renderGroupJob() : renderJob()}
        </div>
        <div>
          {listGp()}
        </div>
      </div>
      <div className='services-graphic'>
        <h3 className='services-graphic-title'>Services Ralated To Graphic & Design</h3>
        <div className='button-top'>
          <button className='button-item'>Minimalist Logo Design</button>
          <button className='button-item'>Signature logo design</button>
          <button className='button-item'>Mascot logo design</button>
          <button className='button-item'>3d logo design</button>
          <button className='button-item'>Hand drawn logo design</button>
          <button className='button-item'>VItage logo design</button>
          <button className='button-item'>Remove background</button>
        </div>
        <div className='button-middle'>
          <button className='button-item'>Photo restoration</button>
          <button className='button-item'>Photo retouChing</button>
          <button className='button-item'>Image resize</button>
          <button className='button-item'>Product label design</button>
          <button className='button-item'>Custom twitch overlay</button>
          <button className='button-item'>Custom twitch emotes</button>
          <button className='button-item'>Gaming logo</button>
          <button className='button-item'>Children book llustration</button>
        </div>
        <div className='button-bottom'>
          <button className='button-item'>Instagram design</button>
          <button className='button-item'>Movle poster design</button>
          <button className='button-item'>Box design</button>
          <button className='button-item'>Logo maker</button>
          <button className='button-item'>Logo Ideas</button>
        </div>
      </div>

      <BackTop>
        <div className="backTopStyle">
          <i className="fa-solid fa-angles-up backTopStyle"></i>
        </div>
      </BackTop>
    </div>
  )
}
