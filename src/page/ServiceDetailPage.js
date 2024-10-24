import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
// import service_img from '../asset/image/service_id_img.jpg';
import GK_drag_1 from '../asset/image/home-drag/gk-drag-1.webp';
import GK_drag_2 from '../asset/image/home-drag/gk-drag-2.webp';
import GK_drag_3 from '../asset/image/home-drag/gk-drag-3.webp';
import GK_drag_4 from '../asset/image/home-drag/gk-drag-4.webp';
import GK_drag_5 from '../asset/image/home-drag/gk-drag-5.webp';
import GK_drag_6 from '../asset/image/home-drag/gk-drag-6.webp';
import GK_drag_7 from '../asset/image/home-drag/gk-drag-7.webp';
import GK_drag_8 from '../asset/image/home-drag/gk-drag-8.webp';
import GK_drag_9 from '../asset/image/home-drag/gk-drag-9.webp';
import slide_img_1 from '../asset/image/sevice-detail/gk-service-1.webp';
import slide_img_2 from '../asset/image/sevice-detail/gk-service-2.webp';
import slide_img_3 from '../asset/image/sevice-detail/gk-service-3.webp';
import slide_img_4 from '../asset/image/sevice-detail/gk-service-4.webp';
import slide_img_5 from '../asset/image/sevice-detail/gk-service-5.webp';
import slide_img_6 from '../asset/image/sevice-detail/gk-service-6.webp';
import slide_img_7 from '../asset/image/sevice-detail/gk-service-7.webp';
// import Slider_img_1 from '../asset/image/Staff_Pic.webp';
import LazyImage from '../components/loader/LazyImage';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const contentData = {
    "mepf-bim-services": {
        title: 'MEPF BIM Services',
        subtitle: 'Maximizing construction efficiency through advanced modeling solutions',
        description1: "BIM services represent a cutting-edge solution in the construction industry, leveraging Building Information Modeling to optimize the planning, design, and implementation of MEP systems within buildings. These services involve the creation of detailed 3D models that integrate mechanical, electrical, and plumbing components, providing a comprehensive digital representation of a building's infrastructure.",
        description2: "MEPF BIM services revolutionize the landscape of construction projects by integrating Mechanical, Electrical, Plumbing, and Fire Protection systems seamlessly into Building Information Modeling (BIM). These services foster unparalleled collaboration among architects, engineers, and contractors, ensuring the efficient and coordinated layout of MEPF systems. By incorporating intelligent data into the models, MEPF BIM services facilitate precise analysis of system performance, energy efficiency, and compliance with industry standards.",
        description3: "From HVAC systems to intricate plumbing networks, MEPF BIM services streamline design and installation processes, reducing errors and enhancing overall project efficiency. The adoption of MEPF BIM not only elevates project coordination but also contributes to the development of sustainable and energy-efficient buildings, aligning with the progressive requirements of the contemporary construction industry.",
        imgPath: slide_img_1,
    },
    "library-creation": {
        title: 'Library Creation',
        subtitle: 'Elevating construction efficiency with state-of-the-art modeling solutions library creation',
        description1: "Library creation stands as a forefront solution in the design landscape, employing advanced methodologies to curate comprehensive digital repositories. This process ensures seamless integration and optimization, serving as a pivotal element in enhancing efficiency throughout the construction industry",
        description2: "Library creation emerges as a cornerstone in modern design methodologies, offering a pioneering solution to streamline processes. Through meticulous curation and integration of diverse components, this advanced approach ensures a comprehensive digital repository.",
        description3: "By optimizing the utilization of libraries, it significantly enhances efficiency within the construction industry, providing a robust foundation for precise planning, design, and implementation across various projects.",
        imgPath: slide_img_2,
    },
    "bim-coordinator": {
        title: 'BIM Coordinator',
        subtitle: 'construction efficiency through sophisticated modeling solutions: Your dedicated BIM Coordinator.',
        description1: "BIM coordination stands as a pioneering solution in the construction sector, harnessing the power of Building Information Modeling to enhance the coordination and execution of MEP systems in buildings. This role involves crafting detailed 3D models that seamlessly integrate mechanical, electrical, and plumbing components, offering a holistic digital depiction of a building's infrastructure.",
        description2: "BIM coordination serves as an avant-garde solution within the construction realm, capitalizing on Building Information Modeling to optimize the planning, design, and execution of MEP systems in buildings.",
        description3: "The essence of this role lies in crafting intricate 3D models that seamlessly integrate mechanical, electrical, and plumbing components, providing a comprehensive and accurate digital representation of a building's infrastructure. As a BIM Coordinator, the focus is on leveraging these advanced modeling techniques to streamline collaboration and enhance overall project efficiency in the dynamic landscape of construction.",
        imgPath: slide_img_3,
    },
    "model-based-value-engineering": {
        title: 'Model – Based Value Engineering',
        subtitle: 'Enhancing construction efficiency through sophisticated modeling solutions: Model-Based Value Engineering.',
        description1: "Model-Based Value Engineering (MBVE) stands as a pioneering solution in the construction realm, harnessing advanced modeling techniques to optimize the value engineering process. Utilizing detailed 3D models, MBVE seamlessly integrates diverse elements, facilitating a comprehensive digital representation of a project's value-driven modifications.",
        description2: "Model-Based Value Engineering (MBVE) emerges as a forefront solution in the construction landscape, employing advanced modeling techniques to refine the value engineering process. Through intricate 3D models, MBVE integrates diverse project elements, providing a comprehensive digital representation for value-driven modifications.",
        description3: " This approach not only streamlines planning, design, and implementation but also introduces an innovative perspective on optimizing value within the construction industry. MBVE serves as a catalyst for maximizing efficiency and cost-effectiveness throughout the project lifecycle.",
        imgPath: slide_img_4,
    },
    "structural-bim-services": {
        title: 'Structural BIM Services',
        subtitle: 'Ensuring precision and resilience in construction projects',
        description1: " When integrated with BIM, structural services leverage advanced modeling tools to create accurate 3D representations of the building's structural components.",
        description2: "This includes beams, columns, foundations, and other structural elements. BIM technology enhances collaboration between structural engineers, architects, and other stakeholders, allowing for seamless coordination and early detection of potential clashes or design conflicts. By employing structural services within a BIM framework, projects benefit from improved accuracy, reduced errors, and streamlined communication, ultimately contributing to the successful execution of robust and efficient structural systems.",
        description3: "",
        imgPath: slide_img_5,
    },
    "architectural-bim-services": {
        title: 'Architectural BIM Services',
        subtitle: 'Transforming creative visions into reality',
        description1: "When integrated with BIM, architectural services leverage advanced modeling and visualization tools to bring designs to life in a digital environment.",
        description2: "BIM technology enables architects to create detailed 3D models that incorporate not only the visual aspects of a building but also crucial data related to materials, dimensions, and construction methods. This collaborative approach enhances communication between architects, engineers, and other project stakeholders, fostering a more integrated and efficient design process.",
        description3: "Architectural services within a BIM framework contribute to improved design accuracy, better decision-making, and a more seamless transition from concept to construction.",
        imgPath: slide_img_6,
    },
    "document-control-services": {
        title: 'Document Control Services',
        subtitle: 'Optimizing project documentation through meticulous control',
        description1: "Efficiently managing and optimizing project documentation is at the core of our Document Control Service. Our dedicated Document Controller specializes in organizing and updating business documents using state-of-the-art Electronic Document Management Systems (EDMS). Collaborating seamlessly with project teams and stakeholders, we ensure the quality of deliverables aligns with client needs and promptly address any concerns.",
        description2: "Our services encompass diverse sectors, including Construction on Buildings and properties, Infrastructure, Power and Water, and procurement management. We excel in Documents collaboration, fostering increased adoption and data sharing, capturing a complete project record in one system to ensure accountability and minimize disputes.",
        description3: "professionals are adaptable to any EDMS client base applications and proficient in supporting various cloud-based applications and EDMS platforms such as Aconex, BIM360, Primavera Unifier, Power BI, SharePoint, Asite, and more. Count on our Document Control Service to streamline your documentation processes and enhance overall project efficiency.",
        imgPath: slide_img_7,
    },
};
const images = [
    {
        id: 1,
        count: '1 of 9',
        label: 'HOSPITALITY',
        para: 'Hospitality BIM seamlessly combines precision and warmth for unparalleled guest experiences',
        imgPath: GK_drag_1,
    },
    {
        id: 2,
        count: '2 of 9',
        label: 'CORPORATE/COMMERCIAL',
        para: 'Corporate and commercial projects with advanced BIM services, ensuring precision and innovation',
        imgPath: GK_drag_2
    },
    {
        id: 3,
        count: '3 of 9',
        label: 'RESTAURANTS & BARS',
        para: "Restaurants and bars with Globalking's cutting-edge BIM services, ensuring seamless project execution",
        imgPath: GK_drag_3
    },
    {
        id: 4,
        count: '4 of 9',
        label: 'RESIDENTIAL',
        para: 'Seamlessly integrating innovative technology to enhance the design and construction process',
        imgPath: GK_drag_4
    },
    {
        id: 5,
        count: '5 of 9',
        label: 'INSTITUTIONAL',
        para: 'Institutional BIM service stands as a pinnacle of precision, seamlessly integrating cutting-edge technology',
        imgPath: GK_drag_5
    },
    {
        id: 6,
        count: '6 of 9',
        label: 'MIXED - USE',
        para: 'Mixed-use BIM services, integrating architectural, structural, and MEP models',
        imgPath: GK_drag_6
    },
    {
        id: 7,
        count: '7 of 9',
        label: 'RETAIL',
        para: 'Advanced technology to optimize store layouts and enhance customer engagement',
        imgPath: GK_drag_7
    },
    {
        id: 8,
        count: '8 of 9',
        label: 'SPECIAL BUILDINGS',
        para: 'Innovative technology and expert craftsmanship to elevate architectural precision and project efficiency',
        imgPath: GK_drag_8
    },
    {
        id: 9,
        count: '9 of 9',
        label: 'HEALTHCARE',
        para: 'Fostering a transformative approach to healthcare facility design and construction',
        imgPath: GK_drag_9
    }
];


// const bio_detials = [
//     {
//         name: 'Elangovan A',
//         img_path: Slider_img_1,
//         detial_1: 'BIM SPECIALIST',
//         detial_2: 'Chief Executive Officer',
//         detial_3: 'Dubai, UAE',
//     },
//     {
//         name: 'Elangovan A',
//         img_path: Slider_img_1,
//         detial_1: 'BIM SPECIALIST',
//         detial_2: 'Chief Executive Officer',
//         detial_3: 'Dubai, UAE',
//     },
//     {
//         name: 'Elangovan A',
//         img_path: Slider_img_1,
//         detial_1: 'BIM SPECIALIST',
//         detial_2: 'Chief Executive Officer',
//         detial_3: 'Dubai, UAE',
//     },
//     {
//         name: 'Elangovan A',
//         img_path: Slider_img_1,
//         detial_1: 'BIM SPECIALIST',
//         detial_2: 'Chief Executive Officer',
//         detial_3: 'Orlando, Florida',
//     }];
function DragSlider() {

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(null);
    const [mouseMoved, setStateMouseMoved] = useState(0);

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

    const handleArrowClick = (direction) => {
        const container = itemsContainer.current;
        const scrollAmount = 500; // You can adjust the scroll amount as needed
    
        if (direction === 'right') {
          container.scrollLeft += scrollAmount;
        } else if (direction === 'left') {
          container.scrollLeft -= scrollAmount;
        }
      };
    return (
        <>
            <div className="ds_MainContainer sd_drag_sec">
                <div
                    className={`ds_ItemsContainer ${isDown ? 'ds_activeClass' : ''}`}
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
                    {
                        images.map((item, _i) => (
                            <div
                                key={_i}
                                className='ds_item sd_img_drag'>
                                <div className='ds_item_box'>
                                    <div className="drag_img">
                                        {item.imgPath.length !== 0 ? <LazyImage actualImageSrc={item.imgPath} Alt={item.label} /> : ''}
                                    </div>
                                    <h5 className="drag_count">{item.count}</h5>
                                    <h1 className="drag_title">{item.label}</h1>
                                    <div className="drag_para">{item.para}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='ds_btn_box'>
                    <button className="ds_arrow_button" onClick={() => handleArrowClick('left')}>
                        <BsArrowLeft style={{ fontSize: '15px' }} />
                    </button>
                    <button className="ds_arrow_button" onClick={() => handleArrowClick('right')}>
                        <BsArrowRight style={{ fontSize: '15px' }} />
                    </button>
                </div>
            </div>
        </>
    )
}

// function AboutDrag() {
//     const [isDown, setIsDown] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeftState, setScrollLeftState] = useState(null);
//     const [mouseMoved, setStateMouseMoved] = useState(0);

//     const itemsContainer = useRef();

//     // functions
//     function handleMouseDown(e) {
//         setIsDown(true);

//         if (e.pageX === undefined) {
//             setStartX(e.touches[0].pageX - itemsContainer.current.offsetLeft);
//         } else {
//             setStartX(e.pageX - itemsContainer.current.offsetLeft);
//         }

//         setScrollLeftState(itemsContainer.current.scrollLeft);
//         setStateMouseMoved(0);
//     }

//     function handleMouseMove(e) {
//         if (!isDown) {
//             return;
//         }

//         const currentMousePositionInsideContainer =
//             e.pageX === undefined
//                 ? e.touches[0].pageX - itemsContainer.current.offsetLeft
//                 : e.pageX - itemsContainer.current.offsetLeft;

//         setStateMouseMoved(currentMousePositionInsideContainer - startX);
//     }

//     useEffect(() => {
//         itemsContainer.current.scrollLeft = scrollLeftState - mouseMoved;
//     }, [scrollLeftState, mouseMoved]);

//     return (
//         <section className='ad__container sd_p_drag_sec'>
//             <div className='ad__heading' style={{ border: 0, marginBottom: '50px', }}>
//                 <h1 className='ad_title' style={{ border: 0, margin: 0, textAlign: 'center', color: 'white' }}>Our Technology Leadership</h1>
//             </div>
//             <div className="ad__MainContainer">
//                 <div
//                     className={`sd_prof_contain ad__ItemsContainer ${isDown ? 'ad__activeClass' : ''}`}
//                     ref={itemsContainer}
//                     // MOUSE EVENTS
//                     onMouseDown={(e) => handleMouseDown(e)}
//                     onMouseUp={() => setIsDown(false)}
//                     onMouseLeave={() => setIsDown(false)}
//                     onMouseMove={(e) => handleMouseMove(e)}
//                     // TOUCH EVENTS
//                     onTouchStart={(e) => handleMouseDown(e)}
//                     onTouchEnd={() => setIsDown(false)}
//                     onTouchCancel={() => setIsDown(false)}
//                     onTouchMove={(e) => handleMouseMove(e)}
//                 >
//                     {bio_detials.map((image, i) => (
//                         <div key={i} className="ad__item sd_drag_item">
//                             <div className='ad__item_contain'>
//                                 <div className='ad__img'>
//                                     <LazyImage actualImageSrc={image.img_path} Alt={`Card-${image.name}`} />
//                                 </div>
//                                 <div className='ad__content'>
//                                     <h1 className='ad_name'>{image.name}</h1>
//                                     <p className='ad_detail_1'>{image.detial_1}</p>
//                                     <p className='ad_detail_2' style={{ marginBottom: '10px' }}>{image.detial_2}</p>
//                                     <p className='ad_detail_3' style={{ marginTop: '10px' }}>{image.detial_3}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

function ServiceDetailPage() {
    const { id } = useParams();
    const cardContent = contentData[id] || {};

    return (
        <div className='sd__container'>
            <div className='sd_sec_1'>
                <div className='sd_content_box'>
                    <div className='sd_content_1'>
                        <div className='sd_c1_header'>
                            <div className='sd_c1_title'>
                                <div className='sd_c1_t'>
                                    <p>service</p>
                                    <h1>{cardContent.title || 'Content Page'}</h1>
                                </div>
                            </div>
                            <div className='sd_c1_para'>
                                <p>{cardContent.subtitle || 'No content available.'}</p>
                            </div>
                        </div>
                        <div className='sd_c1_img'>
                            <img src={cardContent.imgPath} alt='service_img' width='' height='' />
                        </div>
                    </div>
                    <div className='sd_content_2'>
                        <div className='sd_c2_para_1'>
                            <p>{cardContent.description1 || 'No content available.'}</p>
                        </div>
                        <div className='sd_c2_para_2'>
                            <p>{cardContent.description2 || 'No content available.'}</p>
                            <p>{cardContent.description3 || 'No content available.'}</p>
                        </div>
                    </div>
                    <div className='sd_shadow_box'></div>
                </div>
            </div>
            <div className='sd_main_head'>
                <h1 className='sd_main_title'>Selected Projects</h1>
            </div>
            <div className='sd_drag_container'>
                <DragSlider />
            </div>
            {/* <div className='sd_profile_drag'>
                <AboutDrag />
            </div> */}
        </div>
    )
}

export default ServiceDetailPage

