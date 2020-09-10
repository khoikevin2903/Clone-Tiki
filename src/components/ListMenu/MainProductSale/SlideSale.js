import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

const items = [
    'https://salt.tikicdn.com/cache/w584/ts/banner/58/6e/f3/bf84705bfdfb562d53cca53aef392cd6.png'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/59/7f/bd/2f8ed5d3fff002dbc1bae4a2cc8e7b57.jpg'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/f8/20/5b/f57e8c4b7bf668bbf6345a6ca2369f68.jpg'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/f4/c7/b8/ce56edc169a66b3b548575e538ad2adc.jpg'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/7c/18/52/8f8e00d7364c320a5b8146dbd253be76.jpg'
    ,
    'https://salt.tikicdn.com/cache/w584/ts/banner/f5/29/81/3d06d118b136d658fadd7bf01fa3e3c5.jpg'
]

const SlideSale = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item,index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img src={item} alt="" />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="mt-4 ml-2 pl-2 mb-4"
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default SlideSale;