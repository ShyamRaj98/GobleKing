import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-touch-drag-slider";
import GK_drag_1 from '../../asset/image/home-drag/gk-drag-1.webp';
import GK_drag_2 from '../../asset/image/home-drag/gk-drag-2.webp';
import GK_drag_3 from '../../asset/image/home-drag/gk-drag-3.webp';
import GK_drag_4 from '../../asset/image/home-drag/gk-drag-4.webp';
import GK_drag_5 from '../../asset/image/home-drag/gk-drag-5.webp';
import GK_drag_6 from '../../asset/image/home-drag/gk-drag-6.webp';
import GK_drag_7 from '../../asset/image/home-drag/gk-drag-7.webp';
import GK_drag_8 from '../../asset/image/home-drag/gk-drag-8.webp';
import GK_drag_9 from '../../asset/image/home-drag/gk-drag-9.webp';
import LazyImage from '../loader/LazyImage';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
// import slide_img from '../asset/image/service image.webp';

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
        {images.map((step, index) => (
          <div key={index} className='ds_item_box'>
            <h5 className="drag_count">{step.count}</h5>
            <h1 className="drag_title">{step.label}</h1>
            <div className="drag_para">{step.para}</div>
            <div className="drag_img">
              {step.imgPath.length !== 0 ? <LazyImage actualImageSrc={step.imgPath} Alt={step.label} /> : ''}
            </div>
          </div>
        ))}
      </Slider>
      <div className='ds_btn_box'>
        <button className='ds_arrow_button' onClick={previous} disabled={index === 0}>
          <BsArrowLeft className='carsosel_btn_icon' />
        </button>
        <button className='ds_arrow_button' onClick={next} disabled={index === images.length - 1}>
          <BsArrowRight className='carsosel_btn_icon' />
        </button>
      </div>
    </div>
  );
}
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

    <div className="ds_MainContainer">
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
              className='ds_item'>
              <div className='ds_item_box'>
                <h5 className="drag_count">{item.count}</h5>
                <h1 className="drag_title">{item.label}</h1>
                <div className="drag_para">{item.para}</div>
                <div className="drag_img">
                  {item.imgPath.length !== 0 ? <LazyImage actualImageSrc={item.imgPath} Alt={item.label} /> : ''}
                </div>
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
  )
}

function DragSliderSection() {
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
    <div className='drag_slider'>
      <div className='drag_head'>
        <div className='small__header'>
          <h1>EXPERTISE</h1>
        </div>
        <div className='main_header'>
          <h1>At Globalking, we are proud to house some of the most brilliant minds in the industry</h1>
        </div>
      </div>
      {isMobile ? <MobileCardService />
        : <DragSlider />
      }
    </div>
  )
}

export default DragSliderSection;