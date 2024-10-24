import React from 'react';
import Header from '../header/Header';
import { Outlet} from 'react-router-dom';
import Footer from '../footer/Footer';
import Loader from '../components/loader/LoaderPage';
import '../asset/style/RootLayout.css';

function RootLayout() {


  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default RootLayout