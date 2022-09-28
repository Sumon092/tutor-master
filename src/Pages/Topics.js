import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaBloggerB } from 'react-icons/fa'
import { FaLaptop } from 'react-icons/fa'

const Topics = () => {
    return (
        <section style={{ maxHeight: '100vh' }}>
            <div>
                <h2 style={{ color: '#007CC2', fontFamily: 'poppins', fontSize: '35px' }} className='text-center mb-0'>On what you will be trained!</h2>
                <p style={{ color: '#3E3E3E 93%', fontSize: '16px' }} className='text-center lh-0 mt-0 text-sm'>Tutor master will cover the following topics..</p>
            </div>
            <div className='d-flex justify-content-between m-5'>
                <div style={{ maxHeight: '600px' }}>
                    <div>
                        <div style={{ width: '128px', height: '128px', background: '#007CC2', borderRadius: '50%', zIndex: '2' }}>
                        </div>
                        <div style={{ fontSize: '63px', zIndex: '1', position: 'relative', transform: 'translate(30px,-170px)' }} className=' mt-5 text-white'> <FaGlobeAmericas />
                        </div>
                        <div className='text-center text-white' style={{ width: '322px', height: '332px', background: '#007CC2', borderRadius: '10px', transform: 'translate(25px,-230px)', zIndex: '3' }}>
                            <div style={{ transform: 'translate(0px,80px)' }}>
                                <h3 style={{ fontFamily: 'poppins', fontSize: '29px', fontWeight: '500' }} className='text-center text-white'>Country Topics</h3>
                                <p style={{ fontFamily: 'poppins', fontSize: '16px', fontWeight: '500', marginTop: '20px' }} className=''>usp #1 showcased here
                                    <br />
                                    <span>with brief as needed</span></p>
                                <p ><Button style={{ width: '206px' }} className='btn-light rounded-0 text-primary fw-bold mt-3'>Know More</Button></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ maxHeight: '600px' }}>
                    <div>
                        <div style={{ width: '128px', height: '128px', background: '#007CC2', borderRadius: '50%', zIndex: '2' }}>
                        </div>
                        <div style={{ fontSize: '63px', zIndex: '1', position: 'relative', transform: 'translate(30px,-170px)' }} className=' mt-5 text-white'> <FaLaptop />
                        </div>
                        <div className='text-center text-white' style={{ width: '322px', height: '332px', background: '#007CC2', borderRadius: '10px', transform: 'translate(25px,-230px)', zIndex: '3' }}>
                            <div style={{ transform: 'translate(0px,80px)' }}>
                                <h3 style={{ fontFamily: 'poppins', fontSize: '29px', fontWeight: '500' }} className='text-center text-white'>Product Topics</h3>
                                <p style={{ fontFamily: 'poppins', fontSize: '16px', fontWeight: '500', marginTop: '20px' }} className=''>usp #1 showcased here
                                    <br />
                                    <span>with brief as needed</span></p>
                                <p ><Button style={{ width: '206px' }} className='btn-light rounded-0 text-primary fw-bold mt-3'>Know More</Button></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ maxHeight: '600px' }}>
                    <div>
                        <div style={{ width: '128px', height: '128px', background: '#007CC2', borderRadius: '50%', zIndex: '2' }}>
                        </div>
                        <div style={{ fontSize: '63px', zIndex: '1', position: 'relative', transform: 'translate(30px,-170px)' }} className=' mt-5 text-white'> <FaBloggerB />
                        </div>
                        <div className='text-center text-white' style={{ width: '322px', height: '332px', background: '#007CC2', borderRadius: '10px', transform: 'translate(25px,-230px)', zIndex: '3' }}>
                            <div style={{ transform: 'translate(0px,80px)' }}>
                                <h3 style={{ fontFamily: 'poppins', fontSize: '29px', fontWeight: '500' }} className='text-center text-white'>Country Topics</h3>
                                <p style={{ fontFamily: 'poppins', fontSize: '16px', fontWeight: '500', marginTop: '20px' }} className=''>usp #1 showcased here
                                    <br />
                                    <span>with brief as needed</span></p>
                                <p ><Button style={{ width: '206px' }} className='btn-light rounded-0 text-primary fw-bold mt-3'>Know More</Button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Topics;