import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './listDetailJob.css';
import imgLogo from '../../../assets/User/images/Logo design_2x.png';
import imgHouse from '../../../assets/User/images/Architecture _ Interior Design_2x.png';
import imgStart from '../../../assets/User/images/Photoshop Editing_2x.png';
import imgMonkey from '../../../assets/User/images/Nft Art (1).png';
import imgShirt from '../../../assets/User/images/T-Shirts _ Merchandise_2x.png';
import imgHeart from '../../../assets/User/images/Social_Media_Design_2x.png';
import { BackTop, Rate } from 'antd';
import { getListJobByIDAction } from '../../../redux/User/action/getListJobByIDAction';
import { history } from '../../../App';
import { useEffect } from 'react';
import bgDesktop from '../../../assets/User/images/graphics-design-desktop-update.jpg'
import bgMobile from '../../../assets/User/images/graphics-design-mobile-update.png'
import Slider from "react-slick";



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

  const renderResponsive = () => {
    if (window.innerWidth <= 414 && window.innerHeight <= 736) {
      return true;
    } else {
      return false;
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1112,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  const slider = React.useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    renderResponsive();
  }, [])

  return (
    <div className='graphic'>
      <div className='graphic-bg'>
        {renderResponsive() ? <>
          <img className='img-fluid' src={bgMobile} alt="" />
        </> : <>
          <img className='img-fluid' src={bgDesktop} alt="" />
        </>}
      </div>
      <div className='graphic-bg-under'>
        <div className='graphic-left'>
          <h3>Most popular in Graphic & Design</h3>
        </div>
        {!renderResponsive() ? <>
          <div className='graphic-right'>
            <div className='graphic-arrow-left' onClick={() => slider?.current?.slickPrev()}></div>
            <div className='graphic-arrow-right' onClick={() => slider?.current?.slickNext()}></div>
          </div>
        </> : null}
        
      </div>

      {renderResponsive() ? <>
        <div className="graphic__btn">

          <button className='btn-logo'>
            <img className='img-logo' src={imgLogo} alt="logo_design_img" />
            <div className="d-inline-flex justify-content-center align-items-center">
              <span className='text-logo'>Minimalist Logo Design</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </button>

          <button className='btn-logo'>
            <img className='img-logo' src={imgHouse} alt="interior_design_img" />
            <div className="d-inline-flex justify-content-center align-items-center">
              <span className='text-logo'>Architecture & Interior Design</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </button>

          <button className='btn-logo'>
            <img className='img-logo' src={imgStart} alt="image_edit_img" />
            <div className="d-inline-flex justify-content-center align-items-center">
              <span className='text-logo'>Image Editing</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </button>

          <button className='btn-logo'>
            <img className='img-logo' src={imgMonkey} alt="nft_img" />
            <div className="d-inline-flex justify-content-center align-items-center">
              <span className='text-logo'>NFT Art</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </button>

          <button className='btn-logo'>
            <img className='img-logo' src={imgShirt} alt="t_shirt_img" />
            <div className="d-inline-flex justify-content-center align-items-center">
              <span className='text-logo'>T-Shirts & Merchandise</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </button>

          <button className='btn-logo d-flex'>
            <img className='img-logo' src={imgHeart} alt="media_design_img" />
            <div className="d-inline-flex justify-content-center align-items-center">
              <span className='text-logo'>Social Media Design</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </button>

        </div>
      </> : <>
        <Slider ref={slider} {...settings}>
          <button className='btn-logo d-flex'>
            <img className='img-logo' src={imgLogo} alt="logo_design_img" />
              <div className="d-inline-flex justify-content-center align-items-center">
                <span className='text-logo'>Logo Design</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
          </button>

          <button className='btn-logo d-flex'>
            <img className='img-logo' src={imgHouse} alt="interior_design_img" />
              <div className="d-inline-flex justify-content-center align-items-center">
                <span className='text-logo'>Interior Design</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
          </button>

          <button className='btn-logo d-flex'>
            <img className='img-logo' src={imgStart} alt="image_edit_img" />
              <div className="d-inline-flex justify-content-center align-items-center">
                <span className='text-logo'>Image Editing</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
          </button>

          <button className='btn-logo d-flex'>
            <img className='img-logo' src={imgMonkey} alt="nft_img" />
              <div className="d-inline-flex justify-content-center align-items-center">
                <span className='text-logo'>NFT Art</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
          </button>

          <button className='btn-logo d-flex'>
            <img className='img-logo' src={imgShirt} alt="t_shirt_img" />
              <div className="d-inline-flex justify-content-center align-items-center">
                <span className='text-logo'>T-Shirts Design</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
          </button>

          <button className='btn-logo d-flex'>
            <img className='img-logo' src={imgHeart} alt="media_design_img" />
              <div className="d-inline-flex justify-content-center align-items-center">
                <span className='text-logo'>Media Design</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
          </button>

        </Slider>
      </>}

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
