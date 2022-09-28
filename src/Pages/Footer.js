import React from 'react';
import { FaArrowUp, FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div style={{ height: '316px', maxWidth: '1400px', background: '#002C45' }} className='d-flex justify-content-between text-white p-5 mt-5'>
                <div style={{ width: '25%' }}>
                    <p style={{ textAlign: 'justify', fontSize: '10px', fontFamily: 'poppins' }}>knowledge transfer</p>
                    <p style={{ textAlign: 'justify', fontSize: '12px', fontFamily: 'poppins' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet cum, magnam exercitationem harum perspiciatis maxime velit vitae laboriosam ducimus placeat.</p>
                    <div className='p-3'>
                        <FaFacebook />
                        <p className='ms-3 me-3 d-inline'><FaTwitter /></p>
                        <FaLinkedinIn />
                    </div>
                </div>
                <div>
                    <h3 style={{ textAlign: 'justify', fontSize: '20px', fontFamily: 'poppins' }}>Quick links</h3>
                    <div style={{ textDecoration: 'none', fontFamily: 'poppins', fontSize: '14px', lineHeight: '25px' }} className='text-decoration-none'>
                        <a className='text-decoration-none d-block text-white' href="home">Home</a>
                        <a className='text-decoration-none d-block text-white' href="about">About</a>
                        <a className='text-decoration-none d-block text-white' href="training">Training</a>
                        <a className='text-decoration-none d-block text-white' href="contact">Contact</a>
                    </div>

                </div>
                <div>
                    <h3 style={{ textAlign: 'justify', fontSize: '20px', fontFamily: 'poppins' }}>Topic</h3>
                    <div style={{ textDecoration: 'none', fontFamily: 'poppins', fontSize: '14px', lineHeight: '25px' }} className='text-decoration-none'>
                        <a className='text-decoration-none d-block text-white' href="home">Blanket Topics</a>
                        <a className='text-decoration-none d-block text-white' href="about">Country Topics</a>
                        <a className='text-decoration-none d-block text-white' href="training">Product Topics</a>
                    </div>
                </div>
                <div>
                    <h3 style={{ textAlign: 'justify', fontSize: '20px', fontFamily: 'poppins' }}>Important links</h3>
                    <div style={{ textDecoration: 'none', fontFamily: 'poppins', fontSize: '14px', lineHeight: '25px' }} className='text-decoration-none'>
                        <a className='text-decoration-none d-block text-white' href="home">Privacy policy</a>
                        <a className='text-decoration-none d-block text-white' href="about">Terms & condition</a>
                        <a className='text-decoration-none d-block text-white' href="training">disclaimer</a>
                        <a className='text-decoration-none d-block text-white' href="contact">sitemap</a>
                        <div style={{ width: '37px', background: '#007CC2', textAlign: 'center', marginLeft: '120px', cursor: 'pointer' }}>
                            <p className='text-white text-end mt-5 me-2 '><FaArrowUp /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '45px', background: '#0B4668' }}>

            </div>
        </div>
    );
};

export default Footer;