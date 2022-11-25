import React from 'react';
import './header.css';

export default function Header() {
  return (
      <header>
        <div className='header container-fluid '>
          <div className='pdheader'>
            <nav className="navbar  navbar-expand-lg navbar-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">
                  <svg width="100" height="60" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>
                </a>
                <div className="search">
                  <input className="form-control fa-sharp fa-solid fa-magnifying-glass" type="search" placeholder="html?" aria-label="Search" />

                  <button className="btn btn-success btnicon" type="submit">
                    Search
                  </button>
                </div>
              </div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Become a Seller</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign In</a>
                </li>
                <form className="form-inline my-2 my-lg-0">
                  <button className="btn btn-outline-success btnicon2" type="submit">Join</button>
                </form>
              </ul>

            </nav>
          </div>
        </div>
        <div className='categories'>
          <nav className='categories-content'>
            <ul className='categories-menu'>
              <li className='sub-menu'>
                <a href="#">Graphics &amp; Design</a>
              </li>
              <li className='sub-menu'>
                <a href="#">Digital Marketing</a>
              </li>
              <li className='sub-menu'>
                <div className='drop-down'>
                  <a className='drop-menu' href="#">Writing &amp; Translation</a>
                  <div className="dropdown-content">
                    <div>
                      <a href="#">Logo &amp; Brand Identity</a>
                      <a href="#">Logo Design</a>
                      <a href="#">Brand Style Guides</a>
                    </div>

                  </div>
                </div>
              </li>
              <li className='sub-menu'>
                <a href="#">Video &amp; Animation</a>
              </li>
              <li className='sub-menu'>
                <a href="#">Music &amp; Audio</a>
              </li>
              <li className='sub-menu'>
                <div className='drop-down'>
                  <a className='drop-menu' href="#">Programming &amp; Tech</a>
                  <div className="dropdown-content">
                    <div>
                      <a href="#">Web &amp; App Design</a>
                      <a href="#">Website Design</a>
                      <a href="#">App Design</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className='sub-menu'>
                <a href="#">Data <button className='data-new'>New</button></a>
              </li>
              <li className='sub-menu'>
                <a href="#">Business</a>
              </li>
              <li className='sub-menu'>
                <a href="#">Lifestyle</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}
