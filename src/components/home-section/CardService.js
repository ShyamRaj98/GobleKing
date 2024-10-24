import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Slider from "react-touch-drag-slider";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import slide_img_1 from '../../asset/image/home-service/gk-service-1.webp';
import slide_img_2 from '../../asset/image/home-service/gk-service-2.webp';
import slide_img_3 from '../../asset/image/home-service/gk-service-3.webp';
import slide_img_4 from '../../asset/image/home-service/gk-service-4.webp';
import slide_img_5 from '../../asset/image/home-service/gk-service-5.webp';
import slide_img_6 from '../../asset/image/home-service/gk-service-6.webp';
import slide_img_7 from '../../asset/image/home-service/gk-service-7.webp';
import { Link } from 'react-router-dom';
import LazyImage from '../loader/LazyImage';
const images = [
    {
        id: 1,
        link: 'mepf-bim-services',
        label: 'MEPF BIM Services',
        imgPath: slide_img_1,
        content: 'MEPF (Mechanical, Electrical, Plumbing & Fire Fighting) BIM services represent a cutting-edge solution in the construction industry, leveraging Building Information Modeling to optimize the planning, design, and implementation of MEP systems within buildings.'
    },
    {
        id: 2,
        link:'library-creation',
        label: 'Library Creation',
        imgPath: slide_img_2,
        content: 'Specializing in Revit and BIM technologies, we craft meticulously organized digital libraries, seamlessly integrated to enhance the efficiency and precision of your mechanical systems. Elevate your projects with our dedicated library creation service where proficiency meets innovation.'
    },
    {
        id: 3,
        link:'bim-coordinator',
        label: 'BIM Coordinator',
        imgPath: slide_img_3,
        content: 'Model-Based Value Engineering is a service that emphasizes the use of advanced modeling techniques to enhance the value engineering process. By employing detailed models, we identify cost-saving opportunities and streamline construction processes to optimize project value.'
    },
    {
        id: 4,
        link:'model-based-value-engineering',
        label: 'Model – Based Value Engineering',
        imgPath: slide_img_4,
        content: 'Public Health Services within the construction industry relate to the design and implementation of sanitary and plumbing systems in buildings. Integrating BIM.'
    },
    {
        id: 5,
        link:'structural-bim-services',
        label: 'Structural BIM Services',
        imgPath: slide_img_5,
        content: 'Structural services in the context of construction involve the design and analysis of the load-bearing elements of a building or structure.'
    },
    {
        id: 6,
        link:'architectural-bim-services',
        label: 'Architectural BIM Services',
        imgPath: slide_img_6,
        content: 'Architectural services encompass the creative and technical aspects of building design, aiming to create aesthetically pleasing and functional spaces.'
    },
    {
        id: 7,
        link:'document-control-services',
        label: 'Document Control Services',
        imgPath: slide_img_7,
        content: 'In the dynamic realm of business, effective document control stands as a linchpin for success. '
    },
];



// Whatever you render out in the Slider will be draggable 'slides'
function MobileCardService() {
    // state should start with the index you want to start the slide on
    const [index, setIndex] = useState(1);

    const setFinishedIndex = (i) => {
        console.log("finished dragging on slide", i);
        setIndex(i);
    };

    const next = () => {
        if (index < images.length - 1) setIndex(index + 1);
    };

    const previous = () => {
        if (index > 0) setIndex(index - 1);
    };
    const handleIndicatorClick = (index) => {
        setIndex(index);
    };
    return (
        <div className='mobile_service_card'>
            <Slider
                onSlideComplete={setFinishedIndex}
                onSlideStart={(i) => {
                    console.clear();
                    console.log("started dragging on slide", i);
                }}
                activeIndex={index}
                threshHold={100}
                transition={0.2}
                scaleOnDrag={true}
            >
                {images.map((step, i) => (
                   
                    <Link key={i} className='animated_card' to={`/service/${step.link}`}>
                        <div className='card'>
                            <div className='card_img'>
                                <LazyImage actualImageSrc={step.imgPath} Alt={step.label} />
                            </div>
                            <div className='card_title'>
                                <h1>{step.label}</h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
            <div className='cs__item_box'>
                <button className='carsosel_btn' onClick={previous}  disabled={index === 0}>
                    <BsArrowLeft className='carsosel_btn_icon' />
                </button>
                <div className="indicators">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            className={`cs__dot ${i === index ? 'active' : ''}`}
                            onClick={() => handleIndicatorClick(index)}
                        ></button>
                    ))}
                </div>
                <button className='carsosel_btn' onClick={next} disabled={index === images.length - 1}>
                    <BsArrowRight className='carsosel_btn_icon' />
                </button>
            </div>
        </div>
    );
}

function CardService() {

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

    return (
        <Container maxWidth="lg" data-scroll-section>
            {!isMobile ?
                (
                    <div className='card__service'>
                        {/*    <div className='card_sec_header'>
                    <div className='small__header'>
                        <h1>Services</h1>
                    </div>
                    <Grid container spacing={2} my={5}>
                        <Grid item sm={12} md={8}>
                            <h1 className='heading'>TLC Engineering Solutions continues to provide high-performance engineering design, consulting and energy services.</h1>
                        </Grid>
                        <Grid item sm={12} md={4} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Link className='link_button move_arrow_contain'>Explore Our Services<span className='moving_arrow'>→</span></Link>
                        </Grid>
                    </Grid>
                </div> */}
                        <div className='service_container'>
                        
                            <div className='card_box'>
                                {images.map((step, index) => (
                                    <Link key={index} className='animated_card' to={`/service/${step.link}`}>
                                        <div  className='card'>
                                            <div className='card_img'>
                                                <LazyImage actualImageSrc={step.imgPath} Alt={step.label} />
                                            </div>
                                            <div className='card_title'>
                                                <h1>{step.label}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                                <div className='animated_card'></div>
                            </div>
                        </div>
                    </div>
                ) :
                (<MobileCardService />)}
        </Container >
    )
}

export default CardService
