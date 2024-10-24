import { Container } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider_img_1 from '../../asset/image/Staff_Pic.jpg';
import Slider_img_2 from '../../asset/image/profile_image-2.png';
import LazyImage from '../loader/LazyImage';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// const bio_detials = [
//     {
//         name: 'Elangovan A',
//         img_path: Slider_img_1,
//         detial_1: 'BIM SPECIALIST',
//         detial_2: 'Chief Executive Officer',
//         detial_3: 'Dubai, UAE',
//         description: "Motivated to excel in the professional realm of mep bim, he demonstrates exceptional proficiency in 3d modeling and engineering. recognized for his steadfast dedication, he actively seeks opportunities for professional development, taking pride in consistently delivering meticulous work aligned with the nuanced requirements of mep bim processes",
//     },
//     {
//         name: 'Sekar periyasamy',
//         img_path: Slider_img_2,
//         detial_1: 'MEP SYSTEMS SPECIALIST',
//         detial_2: 'Technical Director',
//         detial_3: 'Dubai, UAE',
//         description: "Meet Sekar Periyasamy, an accomplished Technical Director specializing in MEP systems. With a robust background in HVAC, electrical, plumbing, and fire protection, Sekar seamlessly oversees complex projects, excelling in collaboration with clients and consultants. His adept communication skills bridge technical intricacies and client expectations. Leading with precision, Sekar ensures timely project delivery and budget adherence, fostering innovation and excellence within his teams. His commitment to excellence makes him a standout figure in the MEP industry.",
//     },
    // {
    //     name: 'Elangovan A',
    //     img_path: Slider_img_1,
    //     detial_1: 'BIM SPECIALIST',
    //     detial_2: 'Chief Executive Officer',
    //     detial_3: 'Dubai, UAE',
    // },
    // {
    //     name: 'Elangovan A',
    //     img_path: Slider_img_1,
    //     detial_1: 'BIM SPECIALIST',
    //     detial_2: 'Chief Executive Officer',
    //     detial_3: 'Orlando, Florida',
    // }
// ]
function AboutDrag() {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(null);
    const [mouseMoved, setStateMouseMoved] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);


    const itemsContainer = useRef();

    // functions
    function handleMouseDown(e) {
        setIsDown(true);

        if (e.pageX === undefined) {
            setStartX(e.touches[0].pageX - itemsContainer.current.offsetLeft);
        } else {
            setStartX(e.pageX - itemsContainer.current.offsetLeft);
        }

        setScrollLeftState(itemsContainer.current.scrollLeft);
        setStateMouseMoved(0);
    }

    function handleMouseMove(e) {
        if (!isDown) {
            return;
        }

        const currentMousePositionInsideContainer =
            e.pageX === undefined
                ? e.touches[0].pageX - itemsContainer.current.offsetLeft
                : e.pageX - itemsContainer.current.offsetLeft;

        setStateMouseMoved(currentMousePositionInsideContainer - startX);
    }

    useEffect(() => {
        itemsContainer.current.scrollLeft = scrollLeftState - mouseMoved;
    }, [scrollLeftState, mouseMoved]);
    return (
        <section className='ad__container'>
            <Container maxWidth={'lg'}>
                <div className='ad__heading'>
                    <h1 className='ad_title'>Our Leaders</h1>
                    <p className='ad_para'>
                        Globalking Engineering Solutions is a transparent engineering company, having earned our JUST label in 2016 and improved our rating in the 2018 renewal. As a closely held corporation, our shareholders are employees who have invested in the future of our firm and are committed to our mission.
                    </p>
                    <Link className='link_button move_arrow_contain'>Meet Our Leadership<span className='moving_arrow'>→</span></Link>
                </div>
            </Container>
            <div className="ad__MainContainer">
                <div
                    className={`ad__ItemsContainer ${isDown ? 'ad__activeClass' : ''}`}
                    ref={itemsContainer}
                    // MOUSE EVENTS
                    onMouseDown={(e) => handleMouseDown(e)}
                    onMouseUp={() => setIsDown(false)}
                    onMouseLeave={() => setIsDown(false)}
                    onMouseMove={(e) => handleMouseMove(e)}
                    // TOUCH EVENTS
                    onTouchStart={(e) => handleMouseDown(e)}
                    onTouchEnd={() => setIsDown(false)}
                    onTouchCancel={() => setIsDown(false)}
                    onTouchMove={(e) => handleMouseMove(e)}
                >
                    {/* {bio_detials.map((image, i) => (
                        <div key={i} className="ad__item ad_item_m">
                            <div className='ad__item_contain'>
                                <div className='ad__img'>
                                    <LazyImage actualImageSrc={image.img_path} Alt={`Card-${image.name}`} />
                                </div>
                                <div className='ad__content'>
                                    <h1 className='ad_name'>{image.name}</h1>
                                    <p className='ad_detail_1'>{image.detial_1}</p>
                                    <p className='ad_detail_2'>{image.detial_2}</p>
                                    <div className='ad_detail_3'>
                                        <p>{image.detial_3}</p>
                                        <Button onClick={handleOpen} sx={{ fontWeight: '500', padding: 0, lineHeight: 0 }}>Read More</Button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    {image.name}
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    {description}
                                                </Typography>
                                            </Box>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} */}
                    <div className="ad__item ad_item_m">
                        <div className='ad__item_contain'>
                            <div className='ad__img'>
                                <LazyImage actualImageSrc={Slider_img_1} Alt="Slider_img_1" />
                            </div>
                            <div className='ad__content'>
                                <h1 className='ad_name'>Elangovan A</h1>
                                <p className='ad_detail_1'>BIM SPECIALIST</p>
                                <p className='ad_detail_2'>Chief Executive Officer</p>
                                <div className='ad_detail_3'>
                                    <p>Dubai, UAE</p>
                                    <Button onClick={handleOpen} sx={{ fontWeight: '500', padding: 0, lineHeight: 0 }}>Read More</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Elangovan A
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                Motivated to excel in the professional realm of mep bim, he demonstrates exceptional proficiency in 3d modeling and engineering. recognized for his steadfast dedication, he actively seeks opportunities for professional development, taking pride in consistently delivering meticulous work aligned with the nuanced requirements of mep bim processes
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ad__item ad_item_m">
                        <div className='ad__item_contain'>
                            <div className='ad__img'>
                                <LazyImage actualImageSrc={Slider_img_2} Alt="Sekar periyasamy" />
                            </div>
                            <div className='ad__content'>
                                <h1 className='ad_name'>Sekar periyasamy</h1>
                                <p className='ad_detail_1'>MEP SYSTEMS SPECIALIST</p>
                                <p className='ad_detail_2'>Technical Director</p>
                                <div className='ad_detail_3'>
                                    <p>Dubai, UAE</p>
                                    <Button onClick={handleOpen2} sx={{ fontWeight: '500', padding: 0, lineHeight: 0 }}>Read More</Button>
                                    <Modal
                                        open={open2}
                                        onClose={handleClose2}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Sekar periyasamy
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                Meet Sekar Periyasamy, an accomplished Technical Director specializing in MEP systems. With a robust background in HVAC, electrical, plumbing, and fire protection, Sekar seamlessly oversees complex projects, excelling in collaboration with clients and consultants. His adept communication skills bridge technical intricacies and client expectations. Leading with precision, Sekar ensures timely project delivery and budget adherence, fostering innovation and excellence within his teams. His commitment to excellence makes him a standout figure in the MEP industry.
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDrag
