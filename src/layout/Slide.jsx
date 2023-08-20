
import { useState, useEffect } from 'react';
import Controller from '@/components/Controller';

function Slide() {

  const slideImg = [
    "src/assets/macdonalds/slide1.jpg",
    "src/assets/macdonalds/slide2.jpg",
    "src/assets/macdonalds/slide3.jpg",
    "src/assets/macdonalds/slide4.jpg",
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