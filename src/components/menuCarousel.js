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
    src: 'assets/images/1brewkitmandy.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'assets/images/1taps.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'assets/images/1door.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'assets/images/1mandybar.png',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'assets/images/1caligtaproom.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  }
];

const Exmenu = (props) => {
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
              
            </CarouselItem>
          
    );
  });

  return (
    <div className='container'>
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
  );
}

export default Exmenu;
