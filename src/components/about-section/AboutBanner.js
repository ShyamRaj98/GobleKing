import React from 'react';
import ab_img_1 from '../../asset/image/About_main_banner.webp'
import LazyImage from '../loader/LazyImage';


function AboutBanner() {
    return (
        <div className='about_banner_contain'>
            <div className='ab_ban_img'>
                <LazyImage actualImageSrc={ab_img_1} Alt='ab_ban_img' />
            </div>
            <section className='ab__content_sec'>
                <div className='ab_cont_1'>
                    <h1 className='ab_title'>ABOUT GLOBAL KING.</h1>
                    <p className='ab_sub_para'>With a team with dedicated experience in the Building Information Modeling (BIM) industry, Globalking stands as a seasoned leader at the forefront of innovative construction solutions.</p>
                    <p className='ab_para'> Our company has been instrumental in transforming the landscape of architectural, structural, and MEP engineering through the strategic application of BIM technologies. At Globalking, we pride ourselves on a rich history of delivering cutting-edge BIM services that empower our clients to optimize their projects with precision and efficiency. Our team of experts, composed of architects, engineers, and BIM specialists, is committed to providing unparalleled solutions that cater to the unique needs of each project. As a trailblazer in the field, Globalking remains steadfast in our mission to shape the future of construction by leveraging our extensive experience, technological prowess, and unwavering dedication to excellence in the BIM industry.</p>
                </div>
                <div className='ab_cont_2'>
                        <h1 className='ab_title'>Mission</h1>
                        <p className='ab_para'>To think boldly, listen attentively and create passionately.</p>
                        <h1 className='ab_title'>Mission</h1>
                        <p className='ab_para'>To think boldly, listen attentively and create passionately.</p>
                        <h1 className='ab_title'>Values</h1>
                        <p className='ab_para'>Empowering projects through cutting-edge BIM solutions. Transforming visions into reality with expert BIM consulting services</p>
                        {/* <ul>
                            <li className='ab_para'>High Performance</li>
                            <li className='ab_para'>High Performance</li>
                            <li className='ab_para'>High Performance</li>
                            <li className='ab_para'>High Performance</li>
                            <li className='ab_para'>High Performance</li>
                            <li className='ab_para'>High Performance</li>
                            <li className='ab_para'>High Performance</li>
                        </ul> */}
                </div>
            </section>
        </div>
    )
}

export default AboutBanner
