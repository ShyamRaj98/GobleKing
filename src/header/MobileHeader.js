import React, { useState } from 'react'
import '../asset/style/Header.css';
import Logo from '../asset/image/GKBIM_logo.png';
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';


function MobileHeader() {
    const [isMainBoxVisible, setIsMainBoxVisible] = useState(false);

    const toggleMainBoxVisibility = () => {
        setIsMainBoxVisible(!isMainBoxVisible);
    };




    return (
        <>
            <CssBaseline />
            <AppBar component="nav" sx={{right: 0 , zIndex: 2 }}>
                <Toolbar sx={{ py: 2, justifyContent:{ xs: 'space-between' }}}>
                    <div className='navbar'>
                        <div className='navbar_menu'>
                            <div className="main_menu_box">
                                <div className='logo_sec'>
                                    <Link className="logo_box" to='/'>
                                        <img src={Logo} alt='Logo' width='' height='' />
                                    </Link>
                                </div>
                                <Link className="contact_box" to='/contact'>
                                    <h1 className='m_menu-item'>Contact</h1>
                                </Link>
                                {/* <div className='search_bar'>
                                    <FiSearch className='search_icon' />
                                </div> */}
                                <div className='nav_button'>
                                    {isMainBoxVisible
                                        ? <button className='big_bar' onClick={toggleMainBoxVisibility} ><AiOutlineClose className='nav_btn_icon' /></button>
                                        : <button className='small_bar' onClick={toggleMainBoxVisibility} ><PiDotsNineBold className='nav_btn_icon' /></button>}
                                </div>
                            </div>
                            <div className="sub_menu_box"  >
                                <ul className={`sub_menu ${isMainBoxVisible ? 'visible' : 'hidden'}`}>
                                    <li className='m_contact'><Link className="s_menu-item" to='/contact'>Contact Us</Link></li>
                                    <li><Link className="s_menu-item" to='/service'>Services</Link></li>
                                    {/* <li><Link className="s_menu-item" to='/'>Ideas</Link></li> */} 
                                    <li><Link className="s_menu-item" to='/works'>Works</Link></li>
                                    <li style={{ borderRight: 0, }}><Link className="s_menu-item" to='/about'>About</Link></li>
                                    <li className='sub_social_box' >
                                        <a className="s_menu-item" href='/#'><TiSocialYoutube className='social_icon' /></a>
                                        <a className="s_menu-item" href='/#'><TiSocialLinkedin className='social_icon' /></a>
                                        <a className="s_menu-item" href='/#'><TiSocialTwitter className='social_icon' /></a>
                                        <a className="s_menu-item" href='/#'><TiSocialFacebook className='social_icon' /></a>
                                        <a className="s_menu-item" href='/#'><TiSocialLinkedin className='social_icon' /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Toolbar>
                {/* <Box className="globe_menu globe_on" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h5" sx={{ display: {xs:'none',sm:'block'},fontWeight: 700 }}>EM</Typography>
                        <IconButton>
                            <BsGlobe />
                        </IconButton>
                    </Box> */}
            </AppBar>
        </>
    );
}

export default MobileHeader