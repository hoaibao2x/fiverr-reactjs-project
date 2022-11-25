import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import testImg from '../../../assets/User/images/big-carousel-1.jpg';
import testImg2 from '../../../assets/User/images/big-carousel-2.jpg';
import testImg3 from '../../../assets/User/images/big-carousel-3.jpg';

import './carousel.css';


export default function CarouselComponent(props) {
    return (
        <Carousel fade>
            <Carousel.Item>
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

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={testImg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                    <p className='title-hero'>Ritika ,
                        <span style={{ fontWeight: 'bold' }}>Shoemaker and Designer</span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
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
    )
}





