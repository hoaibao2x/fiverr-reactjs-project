import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoDetailJobAction } from '../../../redux/User/action/getInfoDetailJobAction';
import './info.css';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { Rate } from 'antd';



export default function InfoDetailJob(props) {

    const { infoJob } = useSelector(state => state.InfoDetailJobReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params
        dispatch(getInfoDetailJobAction(id))
    }, [])



    const renderInfoJob = () => {
        return infoJob.map((job, index) => {
            const { congViec } = job
            console.log(job)
            return <div className='row py-5' key={index}>
                <div className='col-8'>
                    <div className='info-job-right'>
                        <div className='info-type-job'>
                            <span className='text-type-name'>{job.tenLoaiCongViec}</span>  <RightOutlined style={{ marginRight: '5px' }} />  <span className='text-type-name'>{job.tenNhomChiTietLoai}</span> <RightOutlined style={{ marginRight: '5px' }} />  <span className='text-type-name'>{job.tenChiTietLoai}</span>
                        </div>
                        <div className='info-detail-job'>
                            <h4 className='name-job'>{congViec.tenCongViec}</h4>
                            <div className='info-content'>
                                <div className='avatar-people'>
                                    <img className='img-people' src={job.avatar} alt="" />
                                </div>
                                <span className='img-content'>{job.tenNguoiTao}</span>
                                <span className='img-start'>
                                    <Rate allowHalf value={congViec.saoCongViec} /> ( <span className='img-rate'>{congViec.danhGia}</span> )
                                </span>

                            </div>
                        </div>
                        <div className='coming-back'>
                            <div className='coming-back-content'>
                                <img className='img-coming' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/56ff3db8ae625ba1d6493c3c250c5919-1625663632464/3-Trophy-70_alpha.gif" alt="animated trophy" data-impression-collected="true" />
                            </div>
                            <div className='coming-text'>
                                <span className='conming-text-sp'> People keep coming back!</span> myblue has an exceptional number of repeat buyers.
                            </div>
                        </div>
                        <div className='img-job-cover'>
                            <img className='img-job' src={congViec.hinhAnh} alt="" />
                        </div>
                        <div className='info-difference-bg'>
                            <div className='info-difference'>
                                <p className='text-bold p1'>About This Gig</p>
                                <p className='text-own'>Top Rated Seller with all positive revlews</p>
                                <p>Hello,</p>
                                <p className='section'>Want a custom website built for you business? Or having trouble In recognizing or fixing the Issues/bug In your existing website/blog. It is not a propblem because I'm here to fix any Issues in HTML,CSS,BootStrap,Javascript,PHP or database(Mysql/Oracle)</p>
                                <p className='text-bold'>Thing I offter</p>
                            </div>
                            <ul className='info-mores'>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i>{congViec.moTa.length > 50 ? <span>{congViec.moTa.slice(0, 50)}...</span> : <span>{congViec.moTa}</span>}</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> E-commcircle Development</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Custom website development (both front-end and back-end) with Larevel, PHP and MySQL</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Vuejs, HTML, CSS, BootStrap, Javascript/Hquery, PHP single/multi web page,</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Complete website creation from scratch using Laravel Rest Api and vuejs</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Web Appllcation with proper exception handlling</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Can work with APIs, Intergrate API's in your appllcations.</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Responsive - Mobile Friendy sites</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Great UI/UX for your site</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> PSD to HTML, XD to HTML or any other design to HTML with best quallty and pixel perfect design</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Fix Issues in front-end or add some changes to it</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Bug Investigation and Bug fixing</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> MySQL database design and Intergration In website</li>
                                <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> MySQL database bug fixing and Intergration Issues fixing</li>
                            </ul>
                            <p className='text-own'>I will do the work until you are satisfied with fast and responsive communication</p>
                        </div>
                        <div className='language'>
                            <div className='language-left'>
                                <p className='text-gray'>Programming Language</p>
                                <p className='p2'>PHP</p>
                            </div>
                            <div className='language-right'>
                                <p className='text-gray'>Expertise</p>
                                <p className='p2'>Cross Browser</p>
                                <p className='p2'>Compatibility</p>
                                <p className='p2'>PSD to HTMl, Performance</p>
                            </div>
                        </div>
                        <div className='info-user-create-job'>
                            <h5>About The Seller</h5>
                            <div className='info-user'>
                                <div className='info-user-left'>
                                    <img className='img-user' src={job.avatar} alt="" />
                                </div>
                                <div className='info-user-right'>
                                    <span style={{ fontWeight: 'bold' }} >{job.tenNguoiTao}</span> <br />
                                    <span style={{ fontWeight: 'bold' }} >{job.tenLoaiCongViec}</span> <br />
                                    <Rate allowHalf value={congViec.saoCongViec} /> ( <span className='img-rate'>{congViec.danhGia}</span> ) <br />
                                    <button className='button-user'>Contact me</button>
                                </div>
                            </div>

                        </div>
                        <div className='FAQ'>
                            <h5>FAQ</h5>
                            <div className="accordion" id="accordionExample">
                                <div className='ques1'>
                                    <div className="question" id="headingOne">

                                        <button className="button-faq  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <div className='span-collapse'>
                                                <span className='text-faq'>Do you provide regular updates on order?</span>
                                                <span className='icon-faq'><DownOutlined /></span>
                                            </div>

                                        </button>

                                    </div>
                                </div>
                                <div className='ques2'>
                                    <div className="question" id="headingTwo">
                                        <button className="button-faq  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            <div className='span-collapse'>
                                                <span className='text-faq'>How do you guarantee product quallty and rellabllty</span>
                                                <span className='icon-faq'><DownOutlined /></span>
                                            </div>

                                        </button>

                                    </div>
                                </div>
                                <div className='ques3'>
                                    <div className="question" id="headingThree">

                                        <button className="button-faq  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            <div className='span-collapse'>
                                                <span className='text-faq'>Do you give post-development support</span>
                                                <span className='icon-faq'><DownOutlined /></span>
                                            </div>

                                        </button>

                                    </div>
                                </div>
                                <div className='ques4'>
                                    <div className="question" id="headingFour">

                                        <button className="button-faq  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            <div className='span-collapse'>
                                                <span className='text-faq'>Do you convert PSD to HTML</span>
                                                <span className='icon-faq'><DownOutlined /></span>
                                            </div>

                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='reviews'>
                            <div className='review'>
                                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>335 Reviews</span> <Rate className='rate' allowHalf value={5} />  <span style={{ color: '#FFB237', fontWeight: 'bold' }}>5</span>
                            </div>
                            <div className='relevant'>
                                Sort By <span style={{ fontWeight: 'bold' }}>Most relevant <DownOutlined className='arrowsDown' /></span>
                            </div>
                        </div>
                        <div className='progess'>
                            <div className='progess-left col-6'>
                                <div className='starts'>
                                    <span className='info-start'>5 Starts</span>
                                    <span className='progess-middle'></span>
                                    <span className='info-start'>(333)</span>
                                </div>
                                <div className='starts'>
                                    <span className='info-start'>4 Starts</span>
                                    <span className='progess-gr'></span>
                                    <span className='info-start'>(2)</span>
                                </div>
                                <div className='starts'>
                                    <span className='info-g'>3 Starts</span>
                                    <span className='progess-g'></span>
                                    <span className='info-g'>(0)</span>
                                </div>
                                <div className='starts'>
                                    <span className='info-g'>2 Starts</span>
                                    <span className='progess-g'></span>
                                    <span className='info-g'>(0)</span>
                                </div>
                                <div className='starts'>
                                    <span className='info-g mr-2'>1 Start</span>
                                    <span className='progess-g'></span>
                                    <span className='info-g'>(0)</span>
                                </div>

                                <div className='filter'>
                                <p className='filter-title'>Filters</p>
                                <p className='filter-under'>Industry <span style={{ fontWeight: 'bold' }}>All Industries <DownOutlined className='arrowsDown' /></span> </p>
                            </div>

                            </div>
                            <div className='progess-right col-6'>
                                <div className='starts own'>
                                    Rating Breakdown
                                </div>
                                <div className='starts-content'>
                                    <span className='five-start-text'>Seller communication level</span> <span className='five-start'>5 <i style={{ color: '#ffb237' }} className="fa-solid fa-star"></i></span>
                                </div>
                                <div className='starts-content'>
                                    <span className='five-start-text'>Recommened to a friend</span> <span className='five-start'>5 <i style={{ color: '#ffb237' }} className="fa-solid fa-star"></i></span>
                                </div>
                                <div className='starts-content'>
                                    <span className='five-start-text'>Service  as described</span> <span className='five-start'>5 <i style={{ color: '#ffb237' }} className="fa-solid fa-star"></i></span>
                                </div>
                            </div>
                          
                        </div>

                    </div>
                </div>
                <div className='col-4 pt-5'>
                    <div className='card'>
                        <div className='card-head'>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item1" role="presentation">
                                    <button className="nav-link" id="basic-tab" data-toggle="tab" data-target="#basic" type="button" role="tab">Basic</button>
                                </li>
                                <li className="nav-item1" role="presentation">
                                    <button className="nav-link active" id="standard-tab" data-toggle="tab" data-target="#standard" type="button" role="tab" >Standard</button>
                                </li>
                                <li className="nav-item1" role="presentation">
                                    <button className="nav-link" id="premium-tab" data-toggle="tab" data-target="#premium" type="button" role="tab" >Premium</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="standard" role="tabpanel" aria-labelledby="standard-tab">
                                    <div className='tab-pane-content'>
                                        <div className='tab-content-left'>
                                            Standard
                                        </div>
                                        <div className='tab-content-right'>
                                            ${congViec.giaTien}
                                        </div>
                                    </div>
                                    <div className='tab-pane-text'>
                                        Create a simple web appllication for your business
                                    </div>
                                    <div className='short-description'>
                                        <i className="fa-regular fa-clock time-icon"></i>{congViec.moTaNgan.length > 35 ? <span>{congViec.moTaNgan.slice(0, 35)}...</span> : <span>{congViec.moTaNgan}</span>}
                                        <ul className='menu-short-description'>
                                            <li><i style={{ color: '#28a745', fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>Design Customization</li>
                                            <li><i style={{ fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>Content Upload</li>
                                            <li><i style={{ color: '#28a745', fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>Responsive Design</li>
                                            <li><i style={{ color: '#28a745', fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>Include Soucre Code</li>
                                            <li><i style={{ fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>1 Page</li>
                                            <li className='button-menu-short'>
                                                <button style={{ width: '100%', fontWeight: '600', marginBottom: '15px' }} className='btn btn-success'>Continute (${congViec.giaTien})</button>
                                                <p className='text-button-menu'>Compare Packages</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <p className='text-quocte'> Do you have any special requiements?</p>
                        <button className='button-quote'>Get a Quote</button>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className='container-fluid'>
            <div className='info-job container'>
                {/* <div className='row py-5'>
                    <div className='col-8'>
                        <div className='info-job-right'>
                            <div className='info-type-job'>
                                TenLoaiCongViec <RightOutlined /> tenNhomChiTietLoai <RightOutlined /> tenChiTietLoai
                            </div>
                            <div className='info-detail-job'>
                                <h4 className='name-job'>I will do custom css, html, javascript, PHP coding</h4>
                                <div className='info-content'>
                                    <div className='avatar-people'>
                                        <img className='img-people' src="https://picsum.photos/40/40" alt="" />
                                    </div>
                                    <span className='img-content'>tenNguoiTao</span>
                                    <span className='img-content'>SaoCongViec</span>
                                    <span className='img-content'>danhGia</span>
                                </div>
                            </div>
                            <div className='coming-back'>
                                <div className='coming-back-content'>
                                    <img className='img-coming' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/56ff3db8ae625ba1d6493c3c250c5919-1625663632464/3-Trophy-70_alpha.gif" alt="animated trophy" data-impression-collected="true" />
                                </div>
                                <div className='coming-text'>
                                    <span className='conming-text-sp'> People keep coming back!</span> myblue has an exceptional number of repeat buyers.
                                </div>
                            </div>
                            <div className='img-job-cover'>
                                <img className='img-job' src="https://i.pravatar.cc/100" alt="" />
                            </div>
                            <div className='info-difference-bg'>
                                <div className='info-difference'>
                                    <p className='text-bold p1'>About This Gig</p>
                                    <p className='text-own'>Top Rated Seller with all positive revlews</p>
                                    <p>Hello,</p>
                                    <p className='section'>Want a custom website built for you business? Or having trouble In recognizing or fixing the Issues/bug In your existing website/blog. It is not a propblem because I'm here to fix any Issues in HTML,CSS,BootStrap,Javascript,PHP or database(Mysql/Oracle)</p>
                                    <p className='text-bold'>Thing I offter</p>
                                </div>
                                <ul className='info-mores'>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Mota</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> E-commcircle Development</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Custom website development (both front-end and back-end) with Larevel, PHP and MySQL</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Vuejs, HTML, CSS, BootStrap, Javascript/Hquery, PHP single/multi web page,</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Complete website creation from scratch using Laravel Rest Api and vuejs</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Web Appllcation with proper exception handlling</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Can work with APIs, Intergrate API's in your appllcations.</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Responsive - Mobile Friendy sites</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Great UI/UX for your site</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> PSD to HTML, XD to HTML or any other design to HTML with best quallty and pixel perfect design</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Fix Issues in front-end or add some changes to it</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> Bug Investigation and Bug fixing</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> MySQL database design and Intergration In website</li>
                                    <li className='info-mores-li'> <i className="fa-solid fa-circle icon-crile-mota"></i> MySQL database bug fixing and Intergration Issues fixing</li>
                                </ul>
                                <p className='text-own'>I will do the work until you are satisfied with fast and responsive communication</p>
                            </div>
                            <div className='language'>
                                <div className='language-left'>
                                    <p className='text-gray'>Programming Language</p>
                                    <p className='p2'>PHP</p>
                                </div>
                                <div className='language-right'>
                                    <p className='text-gray'>Expertise</p>
                                    <p className='p2'>Cross Browser</p>
                                    <p className='p2'>Compatibility</p>
                                    <p className='p2'>PSD to HTMl, Performance</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className='col-4 pt-5'>
                        <div className='card'>
                            <div className='card-head'>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item1" role="presentation">
                                        <button className="nav-link" id="basic-tab" data-toggle="tab" data-target="#basic" type="button" role="tab">Basic</button>
                                    </li>
                                    <li className="nav-item1" role="presentation">
                                        <button className="nav-link active" id="standard-tab" data-toggle="tab" data-target="#standard" type="button" role="tab" >Standard</button>
                                    </li>
                                    <li className="nav-item1" role="presentation">
                                        <button className="nav-link" id="premium-tab" data-toggle="tab" data-target="#premium" type="button" role="tab" >Premium</button>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="standard" role="tabpanel" aria-labelledby="standard-tab">
                                        <div className='tab-pane-content'>
                                            <div className='tab-content-left'>
                                                Standard
                                            </div>
                                            <div className='tab-content-right'>
                                                $1,000
                                            </div>
                                        </div>
                                        <div className='tab-pane-text'>
                                            Create a simple web appllication for your business
                                        </div>
                                        <div className='short-description'>
                                            <i className="fa-regular fa-clock time-icon"></i> short description
                                            <ul className='menu-short-description'>
                                                <li><i style={{ color: '#28a745', fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>Design Customization</li>
                                                <li><i style={{ fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>Content Upload</li>
                                                <li><i style={{ color: '#28a745', fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>Responsive Design</li>
                                                <li><i style={{ color: '#28a745', fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>Include Soucre Code</li>
                                                <li><i style={{ fontSize: '20px' }} className="fa-solid fa-check pr-3"></i>1 Page</li>
                                                <li className='button-menu-short'>
                                                    <button style={{ width: '100%', fontWeight: '600', marginBottom: '15px' }} className='btn btn-success'>Continute ($1,000)</button>
                                                    <p className='text-button-menu'>Compare Packages</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <p className='text-quocte'> Do you have any special requiements?</p>
                            <button className='button-quote'>Get a Quote</button>
                        </div>
                    </div>
                </div> */}
                {renderInfoJob()}
            </div>

        </div>
    )
}
