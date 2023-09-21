// CarouselPictureSharing.js
import React, {useState, useEffect} from 'react';
import {Carousel} from 'antd';

const images = [
    'https://m.media-amazon.com/images/I/51xh+c-8YkL._SY346_.jpg',
    'https://m.media-amazon.com/images/I/51xh+c-8YkL._SY346_.jpg',
    'https://m.media-amazon.com/images/I/51xh+c-8YkL._SY346_.jpg'
];

const CarouselPictureSharing = ({interval=3000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=> {
        const intervalId = setInterval(()=>{
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
        }, interval);

        return ()=> clearInterval(intervalId);
    }, [currentIndex, interval, images]);

    return (
        <Carousel autoplay dotPosition="bottom" dotStyle={{ bottom: '10px' }} beforeChange={() => {}}>
            {images.map((imageUrl, index) => (
            <div key={index}>
                <img src={imageUrl} alt={`Image ${index}`}/>
            </div>
            ))}
        </Carousel>
    );
}
export default CarouselPictureSharing;
