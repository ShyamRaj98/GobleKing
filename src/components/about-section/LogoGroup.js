import { Container } from '@mui/material';
import React from 'react';
// import Company_logo_1 from '../../asset/image/lg_img_1.png';
import About_Card_Pic from '../../asset/image/about_img_1.jpg';
import { CgArrowLongRight } from "react-icons/cg";
import LazyImage from '../loader/LazyImage';

// const company_logo = [
//   { id: 1, src: Company_logo_1 },
//   { id: 2, src: Company_logo_1 },
//   { id: 3, src: Company_logo_1 },
//   { id: 4, src: Company_logo_1 },
//   { id: 5, src: Company_logo_1 },
//   { id: 6, src: Company_logo_1 },
//   { id: 7, src: Company_logo_1 },
//   { id: 8, src: Company_logo_1 },
//   { id: 9, src: Company_logo_1 },
// ]

function LogoGroup() {
  const downloadPdf = () => {

    // using Java Script method to get PDF file
    fetch("GKBIM.pdf").then((response) => {
      response.blob().then((blob) => {

        // Creating new object of PDF file
        const fileURL =
          window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "GKBIM-PDF.pdf";
        alink.click();
      });
    });
  };
  //   const downloadPdf = () => {
  //     const pdfUrl = "GKBIM.pdf";
  //     const link = document.createElement("a");
  //     link.href = pdfUrl;
  //     link.download = "GKBIM-PDF.pdf"; // specify the filename
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  // };
  return (
    <Container maxWidth={'lg'}>
      {/* <section className='logo_group_container'>
        <div className='lg__header'>
          <h1 className='lg_title'>Our Involvement</h1>
          <div className='lg_para'>
            <p>TLC is well represented on regional, state and national industry boards and associations. TLCers are engaged in organizations that cover the alphabet from ASHE and ASHRAE to the U.S. Green Building Council, at many levels and often in roles of developing codes and standards to shape our industry.</p>
          </div>
        </div>
        <ul className='lg__img_box'>
          {company_logo.map((image, i) => (
            <li key={i} className='lg_img'>
              <img src={image.src} alt={`Company_Logo_${image.id}`} width='' height='' />
            </li>
          ))}
        </ul>
      </section> */}
      <section className='about_card_sec' onClick={downloadPdf}>
        <div className='acs__container'>
          <div className='acs_card'>
            <div className='acs_arrow'><CgArrowLongRight className='acs_icon' /></div>
            <LazyImage actualImageSrc={About_Card_Pic} Alt='Card_Pic' />
          </div>
          <div className='acs_text'>
            <h1>Corporate Overview </h1>
            <p>With a continuous drive to learn and grow, GKBIM is dedicated to designing a difference. Click here to learn more GKBIM culture and project experience.</p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default LogoGroup
