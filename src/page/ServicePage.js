import React from 'react';
import SP_Image from '../asset/image/contact_img.webp';
// import SP_main_img from '../asset/image/service_img-1.jpg'
import '../asset/style/ServicePage.css'
import { Container } from '@mui/material';
import ServiceCard from '../components/service-section/ServiceCard';

// import LazyImage from '../components/loader/LazyImage';



function ServicePage() {

  return (
    <div className='sp_container'>
      <div className='sp_banner'>
        <img src={SP_Image} alt='service_img' width='' height='' loading='lazy' />
        <div className='sp_content'>
          <h1 className='sp_title'>Services</h1>
          <p className='sp_para'>Explore our services to see how GLOBAL KING can make your next project successful.</p>
        </div>
      </div>
      <Container maxWidth={'lg'} sx={{ position: "relative", zIndex: 2, marginTop: '-80px', }}>
        {/* <section className='sp_main_card'>
          <div className='sp_card'>
            <div className='sp_card_img'>
              <LazyImage actualImageSrc={SP_main_img} Alt='main_card' />
            </div>
            <div className='sp_card_body'>
              <h2 className='sp_sub_title'>Featured Service</h2>
              <h1 className='sp_card_title'>Mechanical, Electrical, Plumbing</h1>
              <p className='sp_card_text'> A quality building environment combines the right solutions of thermal comfort, air quality, lighting, water and gases delivered where and when needed and safely transported away.</p>
            </div>
          </div>
        </section> */}
        <ServiceCard />
      </Container>
    </div>
  )
}

export default ServicePage

