import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import img_1 from '../../asset/image/market-banner.webp';
import img_2 from '../../asset/image/market-banner-1.webp';
import LazyImage from '../loader/LazyImage';
function MarketBanner() {
    return (
        <section className='mk__container'>
            <Container maxWidth="lg" data-scroll-section>
                <div className='market_banner_sec'>
                    <div className='ban__header'>
                        <div className='small__header'>
                            <h1>EXPERTISE</h1>
                        </div>
                        <Grid container>
                            <Grid item xs={12} sm={7} md={7} my={5}>
                                <div className='mb__heading'>
                                    <h1>Select the specialists required to achieve your desired outcomes</h1>
                                </div>
                                <div>
                                    <Link className='link_button move_arrow_contain' to="/service">Explore Our Services<span className='moving_arrow'>→</span></Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Link className='link_button_second move_arrow_contain'>Explore Our Services<span className='moving_arrow'>→</span></Link>
                            </Grid>
                        </Grid>
                    </div>
                    <div className='ban__img'>
                        <div className='ban_img_item_1'>
                            <LazyImage actualImageSrc={img_1} Alt='img_1' />
                        </div>
                        <div className='ban_img_item_2'>
                            <LazyImage actualImageSrc={img_2} Alt='img_2' />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default MarketBanner
