import React from 'react';
import storyImage from '../assets/story.png'

const Story = () => {
    return (
        <div className='m-5 d-flex justify-content-between align-items-center'>
            <div style={{ width: '386px', fontFamily: 'poppins' }}>
                <h3 style={{ fontSize: '35px', fontWeight: '600' }}>The Story of Tutor
                    <br />
                    Master?
                </h3>
                <p style={{ fontSize: '15px', fontWeight: '300', textAlign: 'justify', color: '#383838 70%', width: '386px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati natus quae deserunt, nobis accusantium inventore! Atque incidunt vero quos esse, quia doloremque commodi repudiandae. Tempora nobis vitae tempore nisi rerum natus.</p>
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