import React, { useState, useEffect } from 'react';
import Splash_img from '../../asset/image/GKBIM_logo.png'

const SplashScreen = ({ onFinish }) => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const splashImage = document.querySelector(".splash__image");

        const splashExit = el => {
            el.classList.add("splash__image--exit");
            el.parentNode.classList.add("splash--exit");
        };

        window.setTimeout(function () {
            splashExit(splashImage);
        }, 3000);

        const splashTimer = setTimeout(() => {
            setShowSplash(false);
            onFinish(); // Notify the parent component that the splash screen has finished
        }, 3500); // Set the duration for 5 seconds

        return () => clearTimeout(splashTimer); // Clear the timer on component unmount
    }, [onFinish]);

    return (
        <div className="splash_container" style={{ display: showSplash ? 'block' : 'none' }}>
            <section className="splash">
                {/* <svg
                    className="splash__image"
                    xmlns="http://www.w3.org/2000/svg"
                    height="56"
                    viewBox="0 0 171 80"
                >
                    <defs />
                    <g fill="#00A9DC" fill-rule="evenodd">
                        <path
                            d="M147.1963 0L43.3735 80h24.5472l87.6746-67.5583.0698 55.107-25.9961-19.948-12.2584 9.4584L147.1963 80h23.4061V0h-23.4061M23.4061 80L127.229 0h-24.5472L15.007 67.5583l-.0698-55.107 25.9955 19.948 12.259-9.4584L23.4061 0H0v80h23.4061"
                        />
                    </g>
                </svg> */}
                <img className="splash__image" src={Splash_img} alt='splash screen' width='250px' height='auto' />
            </section>
        </div>
    );
};

export default SplashScreen;