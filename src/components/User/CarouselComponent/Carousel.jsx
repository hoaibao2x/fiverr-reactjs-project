import React, { Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import testImg from '../../../assets/User/images/big-carousel-1.jpg';
import testImg2 from '../../../assets/User/images/big-carousel-2.jpg';
import testImg3 from '../../../assets/User/images/big-carousel-3.jpg';

import './carousel.css';

export default function CarouselComponent(props) {
    return (
        <div className="list-carousel-hero">
            <Carousel slide={false}>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={testImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <p className='title-hero'>
                            Zach , <span style={{ fontWeight: 'bold' }} >Bar Owner</span>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={testImg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p className='title-hero'>Ritika ,
                            <span style={{ fontWeight: 'bold' }}>Shoemaker and Designer</span>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={testImg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <span className='color-icon'>
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </span>
                        <p className='title-hero'>
                            Gabrielle , <span style={{ fontWeight: 'bold' }}>Video Editor</span>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <div>
                <div className='carousel-content mt-2'>
                    <nav className="container navbar  navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse">
                            <a className="navbar-brand" href="#">
                                <svg className='logo-cr' width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>
                            </a>
                        </div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link nav-cr" href="#">Become a Seller</a>
                            </li>
                            <li className="nav-item">
                                <a id='signInBtn' type='button' className="nav-link text-white" data-toggle="modal" data-target="#exampleModal">Sign In</a>
                            </li>
                            <form className="form-inline my-2 my-lg-0">
                                <button className="btn  btnicon3" type="submit">Join</button>
                            </form>
                        </ul>

                    </nav>
                    <div className='carousel-title container'>
                        <div className='row'>
                            <div className="col-6">
                                <h1>Find the perfect <i className='freelance'>freelance</i> <br />
                                    services for your business
                                </h1>
                            </div>
                        </div>
                        <div className="search search-cr">
                            <input className="form-control" type="search" placeholder='"building mobile app"' aria-label="Search" />

                            <button className="btn btn-success btnicon" type="submit">
                                Search
                            </button>
                        </div>
                        <div className="popular row mt-3 ml-1">
                          <span>  Popular : </span>
                            <ul className='popular-text'>
                                <li className='popular-text-content'><a href="#">Website Design</a></li>
                                <li className='popular-text-content'><a href="#">WordPress</a></li>
                                <li className='popular-text-content'><a href="#">Logo Design</a></li>
                                <li className='popular-text-content'><a href="#">Dropshipping</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





