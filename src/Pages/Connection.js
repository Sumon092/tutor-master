import React from 'react';
import avatar from '../assets/avatar.jpg'

const Connection = () => {
    return (
        <section>
            <div>
                <h2 style={{ color: '#007CC2', fontFamily: 'poppins', fontSize: '35px' }} className='text-center mb-0'>Why tutor master?</h2>
                <p style={{ color: '#3E3E3E 93%', fontSize: '16px' }} className='text-center lh-0 mt-0 text-sm'>Tutor master will cover the following topics..</p>
            </div>
            <div className='d-flex justify-content-between align-items-center m-5 p-3'>
                <div class="box">

                    <div class="center">
                        <div class="dialog-box">
                            <div class="top-point"></div>
                            <p className='mt-3 ms-3 fw-bold'>Notification
                                <span className='ms-5 fw-normal text-primary'>Mark as read</span>
                            </p>
                            <div className='mt-5'>
                                <div className='d-flex justify-content-start'>
                                    <div className='ms-2 me-3'>
                                        <img style={{ width: '30px', height: '30px', borderRadius: '50px' }} src={avatar} alt="" />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: '500', fontFamily: 'poppins', fontSize: '14px', marginBottom: '10px' }}>Thomas added a new course
                                            <br /><b>Cardiology</b>
                                        </p>
                                        <span style={{ fontWeight: '400', fontFamily: 'poppins', fontSize: '11px', color: 'gray' }}>3mins ago</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-start mt-3'>
                                    <div className='ms-2 me-3'>
                                        <img style={{ width: '30px', height: '30px', borderRadius: '50px' }} src={avatar} alt="" />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: '500', fontFamily: 'poppins', fontSize: '14px', marginBottom: '10px' }}>Thomas added a new course
                                            <br /><b>Cardiology</b>
                                        </p>
                                        <span style={{ fontWeight: '400', fontFamily: 'poppins', fontSize: '11px', color: 'gray' }}>3mins ago</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div style={{ border: '1px solid #c4c4c4', width: '730px', height: '314px', backgroundColor: '#f9f7f7' }}>


                    <div className='d-flex justify-content-between p-3 mt-5'>
                        <div className='d-flex justify-content-start mt-3'>
                            <div className='ms-2 me-3'>
                                <img style={{ width: '30px', height: '30px', borderRadius: '50px' }} src={avatar} alt="" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h5 style={{ fontFamily: 'poppins', fontSize: '14px' }}>James</h5>
                                    <p style={{ fontWeight: '500', fontFamily: 'poppins', fontSize: '14px', marginBottom: '10px' }}>lorem ipsum dolor sit amit, lorem ipsum dolor sit amet de costa dsuza</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontWeight: '400', fontFamily: 'poppins', fontSize: '11px', color: 'gray' }}>3mins ago</span>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between p-3'>
                        <div className='d-flex justify-content-start mt-3'>
                            <div className='ms-2 me-3'>
                                <img style={{ width: '30px', height: '30px', borderRadius: '50px' }} src={avatar} alt="" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h5 style={{ fontFamily: 'poppins', fontSize: '14px' }}>James</h5>
                                    <p style={{ fontWeight: '500', fontFamily: 'poppins', fontSize: '14px', marginBottom: '10px' }}>lorem ipsum dolor sit amit, lorem ipsum dolor sit amet de costa dsuza,</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontWeight: '400', fontFamily: 'poppins', fontSize: '11px', color: 'gray' }}>3mins ago</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Connection;