import React, { useState } from 'react';
import {CarouselContainer, CarouselImage, DivButton, CarouselSlide, CarouselButton} from './Carousel.style'

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const width = 500;

  const handlePrevClick = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <>
        <CarouselContainer>
            <CarouselSlide index={index} width={width}>
                {images.map((image, i) => (
                    <CarouselImage key={i} src={image} 
                        alt={`Slide ${i + 1}`} 
                    />
                ))}
            </CarouselSlide>
        </CarouselContainer>
        <DivButton>
            <CarouselButton onClick={handlePrevClick}>
                &#10094;
            </CarouselButton>
            <CarouselButton onClick={handleNextClick}>
                &#10095;
            </CarouselButton>
        </DivButton>
    </>
  );
};

export default Carousel;