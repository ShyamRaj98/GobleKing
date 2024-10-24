import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import "./App.css"
import AboutPage from "./page/AboutPage";
import { PageTransitions } from "@14islands/react-page-transitions";
import MainHeader from "./header/Header";
import Footer from "./footer/Footer";
import SmoothScroll from "./SmoothScroll/SmoothScroll";
import ServicePage from "./page/ServicePage";
import ContactPage from "./page/ContactPage";
import SplashScreen from "./components/loader/SplashScreen";
import ThankPage from "./page/ThankPage";
import ServiceDetailPage from "./page/ServiceDetailPage";
import WorkDetailPage from "./page/WorkDetailPage";
import CarrerPage from "./page/CarrerPage";
import { MdCall } from "react-icons/md";

function App() {
  let location = useLocation();
  // const { serviceId } = useParams()
  // const BLOG_KEYS = {
  //   TITLE: `/service/${serviceId}`,
  //   CONTENT: 'content',
  // };

  // const map = {
  //   "/": "home",
  //   "/about": "about",
  //   "/service": "service",
  //   "/service/1": "/service/1",
  //   [BLOG_KEYS.TITLE]: `/service/${serviceId}`,
  //   "/success": "success",
  // };
  // console.log("param",location)
  // console.log("map-array",map[BLOG_KEYS.TITLE])
  //   // "/service/:serviceId": "/service/:serviceId",

  const [splashFinished, setSplashFinished] = useState(false);
  console.log(splashFinished)
  const handleSplashFinish = () => {
    setSplashFinished(true);
  };

  return (
    <div className="app_container">
      <SplashScreen onFinish={handleSplashFinish} />
      <PageTransitions pageName={location.pathname}>
        <MainHeader />
        <SmoothScroll>
          <Routes location={location}>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/service/:id" element={<ServiceDetailPage />} />
            <Route path="/works" element={<WorkDetailPage />} />
            <Route path="/carrer" element={<CarrerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/success" element={<ThankPage />} />
          </Routes>
          <Footer />
        </SmoothScroll>
        <div className="gk_whatsapp_link">
        <a
          href="https://api.whatsapp.com/send/?phone=+971508320253&text=Hi&type=phone_number&app_absent=0" rel="noreferrer" target="_blank" class="whatsapp_button"
        >
          <svg width="20.8" height="20.8" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" class="icon_whatsapp">
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          <span class="text_whatsapp">Whatsapp</span>
        </a>
        <a href="tel:+971508320253" aria-label="phone" class="gk_phone_link">
          <MdCall className="icon_phone" />
        </a>
      </div>
      </PageTransitions>
    </div>
  );
}

export default App;
