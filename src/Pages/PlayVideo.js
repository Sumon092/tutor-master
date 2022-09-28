import React from 'react';
import Card from 'react-bootstrap/Card';
import heratImage from '../assets/heart.jpg'
import { FaPlay, FaPlayCircle, FaVolumeUp, FaQrcode } from 'react-icons/fa'
const PlayVideo = () => {
    return (
        <section className='p-0'>
            <div>
                <h2 style={{ color: '#007CC2', fontFamily: 'poppins', fontSize: '35px' }} className='text-center mb-0'>Training Overview</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ width: '800px' }} className=' m-5'>
                    <Card className="rounded-0">
                        <Card.Img src={heratImage} alt="Card image" />
                    </Card>
                    <div style={{ transform: 'translate(0px,-70px)' }} className='d-flex justify-content-between p-3'>
                        <div style={{ height: '15px' }}>
                            <div class="progress rounded-0">
                                <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className='d-flex justify-content-between' style={{ width: "300px" }}>
                                <div>
                                    <p ><FaPlay /></p>
                                </div>
                                <div>
                                    <p>00/3:45</p>
                                </div>
                            </div>
                            <p style={{ transform: 'translate(370px,-200px)', fontSize: '25px', color: 'blue' }}><FaPlayCircle /></p>
                        </div>
                        <div style={{ width: '200px' }} className='d-flex justify-content-between'>
                            <div>
                                <FaVolumeUp />
                            </div>
                            <div>
                                <FaQrcode />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default PlayVideo;