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
    src: 'assets/images/menu.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'assets/images/menu1.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'assets/images/menu2.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'assets/images/menu3.png',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'assets/images/menu4.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/menu5.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/menu6.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/menu7.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/menu8.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/menu9.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/mexico.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'assets/images/mexico3.png',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'assets/images/mexico4.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/mexico5.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/mexico6.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/mexico7.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/mexico8.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/mexico9.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/mexico10.png',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'assets/images/mexico11.png',
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
      <div className='col-md-1'></div>
      <div className='col-md-10'>
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
      <div className='col-md-1'></div> 
    </div>
  );
}

export default Exmenu;
