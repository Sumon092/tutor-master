import React from 'react';
import Card from 'react-bootstrap/Card';
import heratImage from '../assets/heart.jpg'
const PlayVideo = () => {
    return (
        <div className='p-3 m-5'>
            <Card className="">
            <Card.Img src={heratImage} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
        </div>
    );
};


export default PlayVideo;