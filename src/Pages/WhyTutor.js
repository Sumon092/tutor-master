import React from 'react';
import { FaHandHoldingUsd, FaKhanda, FaHandshake } from 'react-icons/fa'

const WhyTutor = () => {
    return (
        <section className='p-2'>
            <div>
                <h2 style={{ color: '#007CC2', fontFamily: 'poppins', fontSize: '35px' }} className='text-center mb-0'>Why tutor master?</h2>
                <p style={{ color: '#3E3E3E 93%', fontSize: '16px' }} className='text-center lh-0 mt-0 text-sm'>Tutor master will cover the following topics..</p>
            </div>
            <div className='d-flex justify-content-between m-5'>
                <div style={{ width: '350px' }} className='d-flex justify-content-between'>
                    <div style={{ color: '#007CC2', fontSize: '35px', marginRight: '25px', marginTop: '0' }}>
                        <FaHandHoldingUsd />
                    </div>
                    <div>
                        <div>
                            <h3 style={{ fontFamily: 'poppins', fontSize: '18px', color: '#383838', fontWeight: '500' }}>The only source of learning pre-
                                <br />
                                <span>solves activities</span>
                            </h3>
                            <p style={{ fontFamily: 'poppins', fontWeight: '400px', fontSize: '15px', textAlign: 'justify', color: 'gray', marginTop: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio nihil mollitia ipsum rerum ducimus!</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '350px' }} className='d-flex justify-content-between'>
                    <div style={{ color: '#007CC2', fontSize: '35px', marginRight: '25px', marginTop: '0' }}>
                        <FaKhanda />
                    </div>
                    <div>
                        <div>
                            <h3 style={{ fontFamily: 'poppins', fontSize: '18px', color: '#383838', fontWeight: '500' }}>The only source of learning pre-
                                <br />
                                <span>solves activities</span>
                            </h3>
                            <p style={{ fontFamily: 'poppins', fontWeight: '400px', fontSize: '15px', textAlign: 'justify', color: 'gray', marginTop: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio nihil mollitia ipsum rerum ducimus!</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '350px' }} className='d-flex justify-content-between'>
                    <div style={{ color: '#007CC2', fontSize: '35px', marginRight: '25px', marginTop: '0' }}>
                        <FaHandshake />
                    </div>
                    <div>
                        <div>
                            <h3 style={{ fontFamily: 'poppins', fontSize: '18px', color: '#383838', fontWeight: '500' }}>The only source of learning pre-
                                <br />
                                <span>solves activities</span>
                            </h3>
                            <p style={{ fontFamily: 'poppins', fontWeight: '400px', fontSize: '15px', textAlign: 'justify', color: 'gray', marginTop: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio nihil mollitia ipsum rerum ducimus!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyTutor;