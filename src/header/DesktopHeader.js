import React, { useState, useEffect } from 'react'
import '../asset/style/Header.css';
import Logo from '../asset/image/GKBIM_logo.png';
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { BsGlobe } from "react-icons/bs";

function DesktopHeader() {
    const [isMainBoxVisible, setIsMainBoxVisible] = useState(false);
    useEffect(() => {
        const delay = 5000; // 5 seconds delay

        const showButtonAfterDelay = setTimeout(() => {
            setIsMainBoxVisible(false);
        }, delay);

        return () => clearTimeout(showButtonAfterDelay); // Cleanup to prevent memory leaks
    }, []);
    const toggleMainBoxVisibility = () => {
        setIsMainBoxVisible(!isMainBoxVisible);
    };




    return (
        <>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar sx={{ py: 2 }}>
                    <div className='navbar'>
                        <div className='navbar_menu'>
                            <div className="main_menu_box">
                                <div className='logo_sec'>
                                    <Link className="logo_box" to='/'>
                                        <img src={Logo} alt='Logo' width='' height='' />
                                    </Link>
                                </div>
                                <div className={`social_icon_box ${isMainBoxVisible ? 'visible' : 'hidden'}`}>
                                    <ul>
                                        <li><TiSocialYoutube className='social_icon' /></li>
                                        <li><TiSocialLinkedin className='social_icon' /></li>
                                        <li><TiSocialTwitter className='social_icon' /></li>
                                        <li><TiSocialFacebook className='social_icon' /></li>
                                        <li><TiSocialLinkedin className='social_icon' /></li>
                                    </ul>
                                </div>
                                <Link className="contact_box" to='/contact'>
                                    <h1 className='m_menu-item'>Contact</h1>
                                </Link>
                                {/* <div className='search_bar'>
                                    <FiSearch className='search_icon' />
                                </div> */}
                                <div className={`nav_button big ${isMainBoxVisible ? 'visible' : 'hidden'}`}>
                                    <button className='big_bar' onClick={toggleMainBoxVisibility} ><AiOutlineClose className='nav_btn_icon' /></button>
                                </div>
                                <div className={`nav_button small ${!isMainBoxVisible ? 'visible' : 'hidden'}`}>
                                    <button className='small_bar' onMouseOver={() => { setIsMainBoxVisible(true); }} ><PiDotsNineBold className='nav_btn_icon' /></button>
                                </div>
                            </div>
                            <div className="sub_menu_box"  >
                                <ul className={`sub_menu ${isMainBoxVisible ? 'visible' : 'hidden'}`}>
                                    <li><Link className="s_menu-item" to='/service'>Services</Link></li>
                                    {/* <li><Link className="s_menu-item" href='/#'>Ideas</Link></li> */}
                                    <li><Link className="s_menu-item" to='/works'>Works</Link></li>
                                    <li style={{ borderRight: 0, }}><Link className="s_menu-item" to='/about'>About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Box sx={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000, display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>EN</Typography>
                <IconButton>
                    <BsGlobe />
                </IconButton>
            </Box>
        </>
    );
}

export default DesktopHeader