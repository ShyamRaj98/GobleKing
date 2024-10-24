import React, { useState } from 'react';
import w_img_1 from '../asset/image/workpage-carousel/work-1.jpg'
import w_img_2 from '../asset/image/workpage-carousel/work-2.jpg'
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import '../asset/style/WorkPage.css';
import { Link } from 'react-router-dom';


const WorkCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="wdp_carousel-container">
      <div className="wdp_carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`wdp_slide ${index === currentIndex ? 'wdp_active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
      <div className='wdp_btn_box'>
        <button className="wdp_prev" onClick={prevSlide}>
          ←
        </button>
        <div className="wdp_dot-indicator">
          {images.map((_, index) => (
            <div
              key={index}
              className={`wdp_dot ${index === currentIndex ? 'wdp_active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <button className="wdp_next" onClick={nextSlide}>
          →
        </button>
      </div>

    </div>
  );
};

const DetailBox = ({ contents }) => {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isSlideOut, setIsSlideOut] = useState(false);

  const toggleContent = () => {
    setIsContentVisible((prev) => !prev);
  };

  const toggleSlideOut = () => {
    console.log('ok')
    setIsSlideOut((prev) => !prev);
  };

  return (
    <div className="wdp_content_container">
      <button className='wdp_c_btn wpd_d_v' onClick={toggleContent}>{!isContentVisible ? <BsEye /> : <BsEyeSlash />}</button>
        <div className={`wdp_content-box ${isContentVisible ? 'wdp_content_active' : ''}`}>
          <div className='wdp_content1'>
          <div className='wdp_panel wpd_m_v'>
              <Link className="wdp_c1_link">Project</Link>
            </div>
            <div className='wdp_panel'>
              <h1 className='wdp_c1_title'>{contents.title}</h1>
            </div>
            <div className='wdp_panel'>
              <p className='wdp_c1_text' style={{borderRight: '1px solid black'}}>{contents.content1}</p>
              <p className='wdp_c1_text'>{contents.content2}</p>
            </div>
            <div className='wdp_panel'>
              <p className='wdp_c1_text'>{contents.content3}</p>
            </div>
            <div className='wdp_panel'>
              <p className='wdp_c1_text'>{contents.content4}</p>
            </div>
            <div className='wdp_panel wpd_d_v'>
              <button className="wdp_c1_btn" onClick={toggleSlideOut}>Read Details</button>
              <Link className="wdp_c1_link">Project</Link>
            </div>
          </div>
          <div className={`wdp_content2 ${isSlideOut ? 'wdp_slide-out' : 'wdp_slide-in '}`}>
            <p>{contents.content5}</p>
          </div>
        </div>
    </div>
  );
};
// const workprojectdata = [{
//   1: {
//     id: 1,
//     title: 'Broward Center for the Performing Arts Parker Playhouse Addition and Renovations',
//     content1: '45,000 sf',
//     content2: 'Fort Lauderdale, FL, USA',
//     content3: 'Entertainment / Performing Arts',
//     content4: 'Life Safety and Fire Protection / Structural Engineering / Mechanical, Electrical, Plumbing',
//     images: {
//       w_img_1,
//       w_img_2,
//       w_img_1,
//     },
//   }
// }];
const WorkDetailPage = () => {

  const content = {
   1:{
      id: 1,
      title: 'Broward Center for the Performing Arts Parker Playhouse Addition and Renovations',
      content1: '45,000 sf',
      content2: 'Fort Lauderdale, FL, USA',
      content3: 'Entertainment / Performing Arts',
      content4: 'Life Safety and Fire Protection / Structural Engineering / Mechanical, Electrical, Plumbing',
      content5: "Fifty years after The Parker opened its doors, the Broward Performing Arts Foundation led the campaign to restore this iconic theater to its original glory, paying allegiance to its history and introducing new state-of-the-art amenities.The design embraces the playhouse’s history in the lobby, where the signature façade, with its seven decorative art-deco windows, illuminated by LED spotlights, is now an indoor feature. The playhouse accommodates 16 areas for bars, plus new VIP lounges, and 16 restrooms with modern, touchless amenities. And new community plaza. The 1,147-seat theater was completely renovated with new seating, advanced acoustics, audio-visual systems, lighting, rigging and curtains and state-of-the-art production equipment.The units serving the theater were replaced with two 80-ton air-cooled water chillers, 60-ton chilled water air handlers, and associated pumps and accessories. Two new air handlers were installed to serve the new front lobby space. Other HVAC systems were replaced with similar split systems connected to the existing ductwork. IT and Telecommunication rooms will receive new independent, redundant cooling systems.Since the existing electrical systems were determined to be past their useful life, all new switchboards and panels were replaced and/or relocated to support the renovation and expansion. Electrical requirements included replacing the FP&L transformer and upgrading the size of the generator, automatic transfer switches, and associated circuit breakers. New LED lighting and lighting controls feature automatic shutoff/occupancy sensing and daylight zone. The design also includes new telecommunication rooms on the first and second floors.The building is completely protected by a hydraulically designed wet pipe fire protection sprinkler system designed to meet NFPA Standard 13 and the requirements of the state and local Fire Marshal. Quick-response sprinklers are provided in all Light and Ordinary Hazard Occupancy areas. The existing sprinkler riser was re-used to supply the new fire suppression system installed throughout the existing building and the new addition. All visible piping was coordinated with the Architect prior to installation, as well as the painting of visible piping.",
      images: [
              w_img_1,
              w_img_2,
              w_img_1,
            ],
    }}
   const {images} = content[1];
  return (
    <div className='wdp_carousel_contain'>
      <WorkCarousel images={images} />
      <DetailBox contents={content[1]} />
    </div>
  );
};

export default WorkDetailPage;
