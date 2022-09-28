import React from 'react';
import './tutor.css'
import conversation from '../assets/conversation.png'
import reactIcon from '../assets/react.png'
import lightIcon from '../assets/light.png'
import beakerIcon from '../assets/beaker.png'
import chemIcon from '../assets/chemistry.png'


const Banner = () => {
    return (
        <div class="container-fluid bg-banner text-white text-center">
            <div className='d-flex justify-content-between align-center mb-5 p-2'>
                <div className='absolute top-icon-left'>
                    <div className='position-absolute '><img src={conversation} alt='' /></div>
                    <img style={{ width: '28px' }} className='position-relative ms-3 mt-2' src={reactIcon} alt="" />
                </div>
                <div className='absolute top-icon-right'>
                    <div className='position-absolute'><img src={conversation} alt='' /></div>
                    <img style={{ width: '28px' }} className='position-relative ms-3 mt-2' src={lightIcon} alt="" />
                </div>
            </div>
            <h1 className='banner-title'>Grow your mind and better
                <br />
                opportunities you will find
            </h1>
            <p className='banner-subtitle'>Be a good achiever, Shape your career!</p>
            <div className='d-flex justify-content-between align-center mt-5'>
                <div className='absolute bottom-icon-left'>
                    <div className='position-absolute'><img src={conversation} alt='' /></div>
                    <img style={{ width: '28px' }} className='position-relative ms-3 mt-2' src={beakerIcon} alt="" />
                </div>
                <div className='absolute bottom-icon-right'>
                    <div className='position-absolute'><img src={conversation} alt='' /></div>
                    <img style={{ width: '28px' }} className='position-relative ms-3 mt-2' src={chemIcon} alt="" />
                </div>
            </div>
            <div className='ms-0 d-flex justify-start align-items-start pb-1 ps-0'>
                <div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}>
                    </div>
                </div>
                <div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}>
                    </div>
                </div>
                <div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}>
                    </div>
                </div>
                <div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                    <div style={{ background: 'white', height: '5px', width: '5px', borderRadius: '40%', marginRight: '10px', marginBottom: '15px' }}></div>
                </div>

            </div>
        </div>
    );
};

export default Banner;