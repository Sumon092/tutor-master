import React from 'react';
import cardAvatar from '../assets/avatar.jpg'

const Trainer = () => {
    return (
        <section className='mt-0'>
            <div className='mt-5 p-3'>
                <h2 style={{ color: '#007CC2', fontFamily: 'poppins', fontSize: '35px' }} className='text-center mb-0'>Who will train you?</h2>
                <p style={{ color: '#3E3E3E 93%', fontSize: '16px' }} className='text-center lh-0 mt-0 text-sm'>Tutor master will cover the following topics..</p>
            </div>
            <div className='d-flex justify-content-center'>
                <div style={{ width: '404px', height: '167px', backgroundColor: 'white' }} className='d-flex justify-content-start align-items-center me-3'>
                    <div style={{}}>
                        <img style={{ width: '165px', }} src={cardAvatar} alt="" />
                    </div>
                    <div className='ms-3'>
                        <p style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '18px' }}>James William</p>
                        <span style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }}>Bsc Msc</span>
                        <p style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }}>Cardiology</p>
                        <p style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }} className='text-end text-primary ms-5'>Know more</p>
                    </div>
                </div>
                <div style={{ width: '404px', height: '167px', backgroundColor: 'white' }} className='d-flex justify-content-start align-items-center ms-3'>
                    <div style={{ width: '404px', height: '167px', backgroundColor: 'white' }} className='d-flex justify-content-start align-items-center me-3'>
                        <div style={{}}>
                            <img style={{ width: '165px', background: '#C4C4C4' }} src={cardAvatar} alt="" />
                        </div>
                        <div className='ms-3'>
                            <p style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '18px' }}>James William</p>
                            <span style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }}>Bsc Msc</span>
                            <p style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }}>Cardiology</p>
                            <p style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }} className='text-end text-primary ms-5'>Know more</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 d-flex justify-content-center'>
                <div style={{ width: '404px', height: '167px', backgroundColor: 'white' }} className='d-flex justify-content-start align-items-center me-3'>
                    <div style={{}}>
                        <img style={{ width: '165px', }} src={cardAvatar} alt="" />
                    </div>
                    <div className='ms-3'>
                        <p style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '18px' }}>James William</p>
                        <span style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }}>Bsc Msc</span>
                        <p style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }}>Cardiology</p>
                        <p style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }} className='text-end text-primary ms-5'>Know more</p>
                    </div>
                </div>
                <div style={{ width: '404px', height: '167px', backgroundColor: 'white' }} className='d-flex justify-content-start align-items-center ms-3'>
                    <div style={{ width: '404px', height: '167px', backgroundColor: 'white' }} className='d-flex justify-content-start align-items-center me-3'>
                        <div style={{}}>
                            <img style={{ width: '165px', background: '#C4C4C4' }} src={cardAvatar} alt="" />
                        </div>
                        <div className='ms-3'>
                            <p style={{ fontFamily: 'poppins', fontWeight: '500', fontSize: '18px' }}>James William</p>
                            <span style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }}>Bsc Msc</span>
                            <p style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }}>Cardiology</p>
                            <p style={{ fontFamily: 'poppins', fontWeight: '400', fontSize: '16px' }} className='text-end text-primary ms-5'>Know more</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trainer;