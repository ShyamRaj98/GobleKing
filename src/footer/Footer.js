import React from 'react';
import '../asset/style/Footer.css';
import { Link } from 'react-router-dom';
import Footer_logo from '../asset/image/Footer_logo.svg'


function Footer() {
  return (
    <footer className='footer_main_container'>
      <div className='footer_container_2'>
        <ul>
          <li>
            <Link className='footer_menu_item' to={'/service'}>
              <div className='footer_menu_2'>
                <h2 className='footer_subtitle'>Learn More</h2>
                <h1 className='footer_title'>Service</h1>
                <p className='footer_text'>Discover the Harmony in Our Services.</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className='footer_menu_item' to={'/about'}>
              <div className='footer_menu_2'>
                <h2 className='footer_subtitle'>Learn More</h2>
                <h1 className='footer_title'>About us</h1>
                <p className='footer_text'>Crafting Success Stories through Innovation.</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className='footer_menu_item' to='https://docs.google.com/forms/d/e/1FAIpQLSeurPFNGcMrOH0j_sIX_sM2lK9D2MUZTrxnt0kEm_bkItClFw/viewform' target='_blank' >
              <div className='footer_menu_2'>
                <h2 className='footer_subtitle'>Learn More</h2>
                <h1 className='footer_title'>Career</h1>
                <p className='footer_text'>Building Futures with GlobalKing.</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className='footer_menu_item' to={'/contact'}>
              <div className='footer_menu_2'>
                <h2 className='footer_subtitle'>Learn More</h2>
                <h1 className='footer_title'>Contact us</h1>
                <p className='footer_text'>Reach Out for Inquiries & Collaboration.</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='copy_right'>
        <div className='cr_policy'>
          <Link className='cr_link' href='/#'>Privacy Policy</Link>
          <Link className='cr_link'>©2024 copyright Inc.</Link>
        </div>
        <div className='cleverso_icon'>
          <a className='cr_link' style={{ textAlign: 'end' }} href="https://www.cleversoindia.com/" target="_blank" rel="noreferrer">
              <img src={Footer_logo} alt='footer' width='50px' height="50px" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
