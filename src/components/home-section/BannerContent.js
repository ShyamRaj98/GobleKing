import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import bannerimg from '../../asset/image/market-banner-2.webp';
import LazyImage from '../loader/LazyImage';

function BannerContent() {
    return (
        <div className='banner_content'>
            <Grid container>
                <Grid item sm={12} md={6}>
                    <div className='bc_img_contain'>
                        <div className='bc_img'>
                            <LazyImage actualImageSrc={bannerimg} Alt='banner_content' />
                        </div>
                    </div>
                </Grid>
                <Grid item sm={12} md={6}>
                    <div className='bc_content_contain'>
                        <div className='bc_content'>
                            <h1 className='bc_title'>At Globalking, we're dedicated to delivering exceptional projects while embracing a culture of enjoyment. Discover career and internship opportunities with us</h1>
                            <p className='bc_para'>Our commitment revolves around delivering outstanding projects while fostering a culture of enjoyment. Explore exciting career and internship opportunities with us, where innovation and collaboration come together for a fulfilling professional experience.</p>
                            <div className='bc_button'>
                                <Link className='link_button_second move_arrow_contain' to = 'https://docs.google.com/forms/d/e/1FAIpQLSeurPFNGcMrOH0j_sIX_sM2lK9D2MUZTrxnt0kEm_bkItClFw/viewform'  target='_blank'>Career<span className='moving_arrow'>→</span></Link>
                                <Link className='link_button_second move_arrow_contain' to='/contact'>Contact<span className='moving_arrow'>→</span></Link>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default BannerContent
