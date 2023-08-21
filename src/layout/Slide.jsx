import slide1 from './../assets/macdonalds/slide1.jpg';
import slide2 from './../assets/macdonalds/slide2.jpg';
import slide3 from './../assets/macdonalds/slide3.jpg';
import slide4 from './../assets/macdonalds/slide4.jpg';


import { useState, useEffect } from 'react';
import Controller from '@/components/Controller';

function Slide() {

  const slideImg = [
    slide1,
    slide2,
    slide3,
    slide4,
  ]

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const changeImg = () => {
    const newIndex = (currentImgIndex + 1) % slideImg.length;
    setCurrentImgIndex(newIndex);
  };


  useEffect(() => {
    const interval = setInterval(changeImg, 5000);

    return () => clearInterval(interval);
  },[currentImgIndex]);

  const changeBanner = (index) => {
    setCurrentImgIndex(index);
  }

  return (
    <div className='slide'>
      <Controller changeBanner={changeBanner} currentImgIndex={currentImgIndex} slideImg={slideImg}/>
      <img src={slideImg[currentImgIndex]} alt="배너" className='banner'></img>
    </div>
  )
}

export default Slide