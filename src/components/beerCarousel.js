import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/assets/images/classicwit.jpeg',
    altText: '',
    caption: ''
  },
  {
    src: '/assets/images/citraIPA.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '/assets/images/milkStout.jpeg',
    altText: '',
    caption: ''
  },
  {
    src: '/assets/images/coffeeStout.jpeg',
    altText: '',
    caption: ''
  }
  
];

const ExBeer = (props) => {
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

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} width="100%"  />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          
    );
  });

  return (
    <div className='container'>
      <div className='row'>
          <Carousel
            className="dark"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
      </div>
    </div>
  );
}

export default ExBeer;

