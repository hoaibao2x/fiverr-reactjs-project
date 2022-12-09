import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoDetailJobAction } from '../../../redux/User/action/getInfoDetailJobAction';
import './info.css';
import { RightOutlined } from '@ant-design/icons';


export default function InfoDetailJob(props) {

    const { infoJob } = useSelector(state => state.InfoDetailJobReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params
        dispatch(getInfoDetailJobAction(id))
    }, [])

    return (
        <div className='container-fluid'>
            <div className='info-job'>
                <div className='row py-5'>
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
                                    <p>About This Gig</p>
                                    <p>Top Rated Seller with all positive revlews</p>
                                    <p>Hello,</p>
                                    <p>Want a custom website built for you business? Or having trouble In recognizing or fixing the Issues/bug In your existing website/blog. It is not a propblem because I'm here to fix any Issues in HTML,CSS,BootStrap,Javascript,PHP or database(Mysql/Oracle)</p>
                                    <p>Thing I offter</p>
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
                                <p>I will do the work until you are satisfied with fast and responsive communication</p>
                            </div>
                            <div className='language'>
                                <div className='language-left'>
                                    <p>Programming Language</p>
                                    <p>PHP</p>
                                </div>
                                <div className='language-right'>
                                    <p>Expertise</p>
                                    <p>Cross Browser</p>
                                    <p>Compatibility</p>
                                    <p>PSD to HTMl, Performance</p>
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
                </div>
            </div>

        </div>
    )
}
