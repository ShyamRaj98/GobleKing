import React from "react";
import { useSwipeable } from "react-swipeable";
import {
    Wrapper,
    CarouselContainer,
    CarouselSlot,
    SlideButton,
    PREV,
    NEXT
} from "../style-components/carouselStyle";
import "../asset/style/carousel.css"

const getOrder = ({ index, pos, numItems }) => {
    return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: NEXT };

const Carousel = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const numItems = React.Children.count(props.children);
    const slide = dir => {
        dispatch({ type: dir, numItems });
        setTimeout(() => {
            dispatch({ type: "stopSliding" });
        }, 50);
    };
    const handlers = useSwipeable({
        onSwipedLeft: () => slide(NEXT),
        onSwipedRight: () => slide(PREV),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    return (
        <div className="carousel_content_sec">
            <div {...handlers}>
                <Wrapper>
                    <CarouselContainer dir={state.dir} sliding={state.sliding}>
                        {React.Children.map(props.children, (child, index) => (
                            <CarouselSlot
                                key={index}
                                order={getOrder({ index: index, pos: state.pos, numItems })}
                            >
                                {child}
                            </CarouselSlot>
                        ))}
                    </CarouselContainer>
                </Wrapper>
                <SlideButton onClick={() => slide(PREV)} float="left">
                    Prev
                </SlideButton>
                <SlideButton onClick={() => slide(NEXT)} float="right">
                    Next
                </SlideButton>
            </div>
            <div>

            </div>
        </div>
    );
};

function reducer(state, { type, numItems }) {
    switch (type) {
        case "reset":
            return initialState;
        case PREV:
            return {
                ...state,
                dir: PREV,
                sliding: true,
                pos: state.pos === 0 ? numItems - 1 : state.pos - 1
            };
        case NEXT:
            return {
                ...state,
                dir: NEXT,
                sliding: true,
                pos: state.pos === numItems - 1 ? 0 : state.pos + 1
            };
        case "stopSliding":
            return { ...state, sliding: false };
        default:
            return state;
    }
}

export default Carousel;



// import React, { useState, useEffect } from 'react';
// import Swipeable from 'react-swipeable';
// import '../asset/style/carousel.css';

// const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your image URLs
// const content = [
//   {
//     title: 'Content 1',
//     description: 'Description for Content 1.',
//   },
//   {
//     title: 'Content 2',
//     description: 'Description for Content 2.',
//   },
//   {
//     title: 'Content 3',
//     description: 'Description for Content 3.',
//   },
// ];

// const SwipeableCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleSwipe = (direction) => {
//     clearInterval(autoSwipeInterval); // Clear auto-swipe interval on manual swipe

//     if (direction === 'left') {
//       setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     } else if (direction === 'right') {
//       setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//     }
//   };

//   useEffect(() => {
//     const autoSwipeInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     }, 5000); // Auto-swipe every 5 seconds

//     return () => clearInterval(autoSwipeInterval);
//   }, []);

//   return (
//     <Swipeable
//       onSwipedLeft={() => handleSwipe('left')}
//       onSwipedRight={() => handleSwipe('right')}
//     >
//       <div className="swipeable-carousel">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${image})` }}
//           >
//             <div className="content">
//               <h1>{content[index].title}</h1>
//               <p>{content[index].description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Swipeable>
//   );
// };

// export default SwipeableCarousel;