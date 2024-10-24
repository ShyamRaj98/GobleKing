import React, { useState, useEffect } from "react";
import "../../asset/style/LandingPage.css"
import banner1 from "../../asset/image/Untitled-2-01.webp";
import banner_11 from "../../asset/image/banner with txt-01.webp";
import banner_22 from "../../asset/image/banner with txt-02.webp";

function ImageMagnifier({
    src,
    src2,
    width,
    height,
    magnifierHeight = 200,
    magnifieWidth = 200,
    zoomLevel = 1
}) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                height: height,
                width: width,
            }}
        >
            <img
                src={src}
                style={{ height: height, width: width,objectFit: 'cover' }}
                onMouseEnter={(e) => {
                    const elem = e.currentTarget;
                    const { width, height } = elem.getBoundingClientRect();
                    setSize([width, height]);
                    setShowMagnifier(true);
                }}
                onMouseMove={(e) => {
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();
                    const x = e.pageX - left - window.pageXOffset;
                    const y = e.pageY - top - window.pageYOffset;
                    setXY([x, y]);
                }}
                onMouseLeave={() => {
                    setShowMagnifier(false);
                }}
                alt={"img"}
            />

            <div
                style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",
                    pointerEvents: "none",
                    height: `${magnifierHeight}px`,
                    width: `${magnifieWidth}px`,
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifieWidth / 2}px`,
                    opacity: "1",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    backgroundImage: `url('${src2}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                    backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
                }}
            ></div>
        </div>
    );
}

function ResponsiveBanner() {
    return (
        <div className="mobile_banner">
            <img src={banner1} alt="Banner" />
            <div className="overlay">
                <h1 className="heading">Leading BIM Services Provider</h1>
                <p className="description">We take pride in being the foremost BIM service provider, showcasing unparalleled expertise and innovation in delivering Building Information Modeling solutions globally.</p>
            </div>
        </div>
    );
};
export default function MainBanner() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="Main_banner_container">
            {isMobile
                ? <ResponsiveBanner />
                : <ImageMagnifier
                    width={"100%"}
                    src={banner_11}
                    src2={banner_22}
                    height={'auto'}
                />}
        <div className="clv_down-arrow"></div>
        </div>
    );
}
