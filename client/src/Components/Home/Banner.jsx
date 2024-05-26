import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../Constants/data'; // Ensure you have banner data

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
    <div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} slidesToSlide={1}>
        {bannerData.map((item, index) => (
          <img key={index} src={item.url} alt={`banner-${index}`} style={{ width: '100%', height: '13rem' }} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

