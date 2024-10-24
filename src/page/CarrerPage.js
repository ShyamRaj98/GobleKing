import React from 'react';
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Contact_banner from '../asset/image/contact_img.webp';
import { Container } from '@mui/material';
// import { Link } from 'react-router-dom';
import '../asset/style/ContactPage.css'
import LazyImage from '../components/loader/LazyImage';

function CarrerPage() {

    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('send')

        emailjs
            .sendForm(
                "service_9n4uh0k",
                "template_t68jaaf",
                e.target,
                "W01g2L7yFk4FMouER"
            )
            .then(
                (result) => {
                    navigate("/success");
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (

        <section className='contact_section'>
            <div className='c_title_box'>
                <h1 className='c_title'>Reach Our Experts.</h1>
            </div>
            <Container maxWidth={'lg'}>
                <div className='c__banner'>
                    <div className='c_img'>
                        <LazyImage actualImageSrc={Contact_banner} Alt='contact banner' />
                    </div>
                </div>
                <div className='contact_form'>
                    <h1 className='cf_title'>How Can We Elevate Your Career?</h1>
                    <p className='cf_para'>Dynamic Career Journey with GlobalKing! Join our innovative team at the forefront of BIM service and documentation. Shape the future of construction and design as we leverage cutting-edge technology to redefine industry standards. Elevate your career with us as we create, collaborate, and build a better tomorrow together.</p>
                    {/* <p className='cf_small_para'>Press inquiry? Visit our <Link className='under_line'>Press Center</Link>.</p> */}
                    <form onSubmit={sendEmail}>
                    <input id="form-type" className='hidden_field' type='text' required name="form-type" value="Carrer" />
                        <div className='cf_input_field'>
                            <label className='cf_label'>Name *</label>
                            <div className='cf_field'>
                                <input id="name-first" type='text' required name="name-first" placeholder='First and Last Name' />
                            </div>
                        </div>
                        <div className='cf_input_field'>
                            <label className='cf_label'>Email *</label>
                            <div className='cf_field'>
                                <input id="email" type='text' name="user-email" placeholder='Email ID' pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" required />
                            </div>
                        </div>
                        {/* <div className='cf_input_field'>
                            <label className='cf_label'>Company</label>
                            <div className='cf_field'>
                                <input id="company" type='text' placeholder='Company Name' name="user-checkbox" required />
                            </div>
                        </div> */}
                        <div className='cf_input_field'>
                            <label className='cf_label'>Phone</label>
                            <div className='cf_field'>
                                <input type='tel' name="user-phone" placeholder='(555) 555-5555' required />
                            </div>
                        </div>
                        {/* <div className='cf_input_field'>
                            <label className='cf_label'>Massage</label>
                            <div className='cf_field'>
                                <textarea type='text' placeholder='How can we help?' rows={10} cols={50} required></textarea>
                            </div>
                        </div> */}
                        <div className='cf_btn_field'>
                            <input type="submit" className='cf_btn' value="Apply Now" />
                        </div>
                    </form>
                    {/* <form onSubmit={sendEmail}>
                        <div className="contactform">
                            <div className="nameform ">
                                <div className="mb-3 nametitle">
                                    <label className="namelabel">
                                        Name<span>*</span>
                                    </label>
                                    <input
                                        id="namefirst"
                                        className="form-control"
                                        placeholder="eg. Donald"
                                        name="name-first"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="nameform1">
                                <div className="mb-3 nametitle1">
                                    <label className="emaillabel">
                                        Email Address<span>*</span>
                                    </label>
                                    <input
                                        id="Email"
                                        className="form-control"
                                        placeholder="eg. donald@us.com"
                                        name="user-email"
                                        pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                                        required=""
                                    ></input>
                                </div>
                                <div className="mb-3 nametitle1 ">
                                    <label className="phonelabel">
                                        Phone<span>*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="Phone"
                                        className="form-control"
                                        name="user-phone"
                                        maxLength="10"
                                        required=""
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="contactbtn">
                            <input
                                type="submit"
                                value="SUBMIT"
                                className="btn btn-primary"
                                name="user-submit"
                                required
                            ></input>
                        </div>
                    </form> */}
                </div>
            </Container>
        </section>

    )
}

export default CarrerPage
