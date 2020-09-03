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
    src: 'assets/images/vvcombo.png',
    altText: 'vv',
    caption: 'Early Days:',
    caption2: 'Vice Versa 2014'
  },
  {
    src: 'assets/images/nwInstallcombo.png',
    altText: 'nw install1',
    caption: 'Early Days: Install',
    caption2: 'Near Wall Bar 2014'
  },
  {
    src: 'assets/images/nwInstallcombo1.png',
    altText: 'nw install2',
    caption: 'Early Days: Install',
    caption2: 'Near Wall Bar 2014'
  },
  {
    src: 'assets/images/nwWatermelon.png',
    altText: 'watermelon wheat',
    caption: 'Early Days: Near Wall Bar',
    caption2: 'Watermelon Wheat 2014'
  },
  {
    src: 'assets/images/nw1.png',
    altText: 'The team',
    caption: 'Early Days: Near Wall Bar',
    caption2: 'The Team 2014'
  },
];

const ExmyCar = (props) => {
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
              <CarouselCaption captionText={item.caption2} captionHeader={item.caption} />
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

export default ExmyCar;

