import React from 'react';
import storyImage from '../assets/story.png'
import { FaCheck } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Story = () => {
    return (
        <div style={{ margin: '120px' }} className='d-flex justify-content-between'>
            <div style={{ width: '400px', fontFamily: 'poppins', marginTop: '50px', color: 'gray' }}>
                <h3 style={{ fontSize: '35px', fontWeight: '600', color: 'black' }}>The Story of Tutor
                    <br />
                    Master?
                </h3>
                <p style={{ fontSize: '15px', fontWeight: '300', textAlign: 'justify', color: '#383838 70%', width: '386px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati natus quae deserunt, nobis accusantium inventore! Atque incidunt vero quos esse, quia doloremque commodi repudiandae. Tempora nobis vitae tempore nisi rerum natus.</p>
                <p style={{ fontSize: '15px' }}><span className='text-primary me-2 fs-6'><FaCheck /></span>usp #1 showcase here with a brief as needed</p>
                <p style={{ fontSize: '15px' }}><span className='text-primary me-2'><FaCheck /></span>usp #1 showcase here with a brief as needed</p>
                <p style={{ fontSize: '15px', color: 'gray' }}><span className='text-primary me-2'><FaCheck /></span>usp #1 showcase here with a brief as needed</p>
                <Button className='btn-primary rounded-0'>know more</Button>
            </div>
            <div>
                <div style={{
                    width: '408px', height: '438px', border: '5px solid #007CC2', borderRadius: '0 150px 0 0'
                }}>
                </div>
                <div style={{ width: '408px', height: '438px', transform: 'translate(-60px,-380px)', borderRadius: '0 150px 0 0' }}>
                    <img style={{ width: '100%', borderRadius: '0 150px 0 0' }} src={storyImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Story;