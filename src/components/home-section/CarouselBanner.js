import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import '../../asset/style/carousel.css'; // Import your CSS file for styling
import slide_img_1 from '../../asset/image/home-slider/gkbim slider images-01.webp';
import slide_img_2 from '../../asset/image/home-slider/gkbim slider images-02.webp';
import slide_img_3 from '../../asset/image/home-slider/gkbim slider images-03.webp';
import slide_img_4 from '../../asset/image/home-slider/gkbim slider images-04.webp';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        id: 1,
        count: "1 of 4",
        label: 'Abu Dhabi, United Arab Emirates(UAE)',
        feetCount: "520,000FT",
        imgPath: slide_img_1,
    },
    {
        id: 2,
        count: "2 of 4",
        label: 'Dubai ,United Arab Emirates(UAE)',
        feetCount: "270,000FT",
        imgPath: slide_img_2,
    },
    {
        id: 3,
        count: "3 of 4",
        label: 'Sharjah, United Arab Emirates(UAE)',
        feetCount: "75,000FT",
        imgPath: slide_img_3,
    },
    {
        id: 4,
        count: "4 of 4",
        label: 'Ajman, United Arab Emirates(UAE)',
        feetCount: "495,000FT",
        imgPath: slide_img_4,
    },
];

// const styles = {
//     root: {
//         margin: '0 0px 0 0px',
//         padding: '0 0 0 50px',
//     },
//     slideContainer: {
//         padding: '0 30px 0 0',
//     },
//     slide: {
//         padding: 15,
//         minHeight: 100,
//         color: '#fff',
//     },
// }
function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            <Box sx={{ background: 'linear-gradient(to right, #a1a1a1 0%, #333 40%)', paddingBottom: '50px' }}>
                {!isMobile ? (
                    <div className='cb_content_box' style={{ position: 'relative',display: 'flex', alignItems: 'center' }} >
                        <Box sx={{ position: 'relative', width: '45%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', }}>
                            <Box className='cb_blur_box'></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',alignItems: 'flex-end', borderRight: '1px solid black' }}>
                                <button className='carsosel_btn' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                    <BsArrowRight className='carsosel_btn_icon' />
                                </button>
                                <div className='cb_slide_caro'>
                                    <AutoPlaySwipeableViews
                                        style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', height: '100%', }}
                                        axis={theme.direction === 'rtl' ? 'x' : 'x-reverse'}
                                        index={activeStep}
                                        onChangeIndex={handleStepChange}
                                        enableMouseEvents
                                    >
                                        {images.map((step, index) => (
                                            <div className='cb_img_box' key={index}>
                                                {Math.abs(activeStep - index) <= 2 ? (
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            display: 'block',
                                                            maxWidth: '100%',
                                                            overflow: 'hidden',
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                        }}
                                                        src={step.imgPath}
                                                        alt={step.label}
                                                    />
                                                ) : null}
                                            </div>
                                        ))}
                                    </AutoPlaySwipeableViews>
                                </div>
                                <button className='carsosel_btn' onClick={handleBack} disabled={activeStep === 0}>
                                    <BsArrowLeft className='carsosel_btn_icon' />
                                </button>
                            </Box>
                        </Box>
                        <div style={{ position: 'relative',height: '100%', flex: 1, backgroundColor: 'white', display: 'flex', boxShadow: 'rgba(255, 255, 255, 0.09) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 32px 16px', }}>
                            <Box sx={{ px: '50px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <h1 className="cb__heading">We are dedicated to providing BIM services that enhance global infrastructure</h1>
                                <div className='cb_h_content'>
                                    <p className='cb__content'>{images[activeStep].count}</p>
                                    <Link className='link_button move_arrow_contain' to="/service" style={{ fontSize: '18px', fontWeight: '300' }}>Explore Our Services<span className='moving_arrow'>→</span></Link>
                                </div>
                                <MobileStepper variant="progress" steps={maxSteps} position="static" activeStep={activeStep} sx={{ width: '100%' }} />
                                <div className="cb__banner">
                                    <h1 className="cb__head">{images[activeStep].label}</h1>
                                    <div className='cb__content_box'>
                                        <p className='cb__content'>{images[activeStep].label}</p>
                                        <p className='cb__content'>{images[activeStep].feetCount}<sup>2</sup></p>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center' }} >
                        <Box sx={{ position: 'relative', width: '20%', height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', }}>
                            <Box className='cb_blur_box'></Box>

                        </Box>
                        <Box sx={{ flex: 1, backgroundColor: 'white', display: 'flex', }}>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <h1 className="cb__heading">We’re committed to engineering facilities that benefit the people who live, work, study and play in them</h1>
                                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <button className='carsosel_btn' onClick={handleBack} disabled={activeStep === 0}>
                                        <BsArrowLeft className='carsosel_btn_icon' />
                                    </button>
                                    <button className='carsosel_btn' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                        <BsArrowRight className='carsosel_btn_icon' />
                                    </button>
                                </Box>
                                <AutoPlaySwipeableViews
                                    style={{ overflow: 'hidden', height: '100%', }}
                                    axis={theme.direction === 'rtl' ? 'x' : 'x-reverse'}
                                    index={activeStep}
                                    onChangeIndex={handleStepChange}
                                    enableMouseEvents
                                >
                                    {images.map((step, index) => (
                                        <div className='cb_img_box' key={index}>
                                            {Math.abs(activeStep - index) <= 2 ? (
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        display: 'block',
                                                        maxWidth: '100%',
                                                        overflow: 'hidden',
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        marginLeft: `${images[activeStep].id === activeStep ? '50px' : '0px'}`
                                                    }}
                                                    src={step.imgPath}
                                                    alt={step.label}
                                                />
                                            ) : null}
                                        </div>
                                    ))}
                                </AutoPlaySwipeableViews>
                                <div className="cb__banner">
                                    <MobileStepper variant="progress" steps={maxSteps} position="static" activeStep={activeStep} sx={{ width: '100%' }} />
                                    <h1 className='cb__head' >{images[activeStep].label}</h1>
                                    <div className='cb__content_box'>
                                        <p className='cb__content'>{images[activeStep].label}</p>
                                        <p className='cb__content'>{images[activeStep].label}</p>
                                    </div>
                                    <Link className='link_button move_arrow_contain' to="/service" style={{ fontSize: '17px', fontWeight: '400' }}>Explore Our Services<span className='moving_arrow'>→</span></Link>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                )}
                <Container maxWidth="lg" >
                    <div className='card_sec_header'>
                        <div className='small__header'>
                            <h1>Services</h1>
                        </div>

                        <Grid container spacing={2} my={5}>
                            <Grid item sm={12} md={8}>
                                <h1 className='heading'>Globalking remains at the forefront of BIM services and documentation, consistently delivering cutting-edge solutions</h1>
                            </Grid>
                            <Grid item sm={12} md={4} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <Link className='link_button move_arrow_contain' to="/service">Explore Our Services<span className='moving_arrow'>→</span></Link>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </Box>
        </>
    );
}

export default SwipeableTextMobileStepper;