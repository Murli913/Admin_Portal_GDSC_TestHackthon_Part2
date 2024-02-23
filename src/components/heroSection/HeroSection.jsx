
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
        autoplaySpeed: 1500
   
  };

  return (
    <section style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
      {/* Hero Section  */}
   
      <Slider {...settings}>
      <div className="rounded-xl h-[50vh]">
      <img
                src="https://blog.ipleaders.in/wp-content/uploads/2021/05/file-20190218-121750-os1orj.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
      </div>
      <div className="rounded-xl h-[50vh]">
      <img
                src="https://www.livelaw.in/cms/wp-content/uploads/2016/05/Homelessness-and-Crime.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
              />
      </div>
      <div className="rounded-xl h-[50vh]">
      <img
                src="https://media.newyorker.com/photos/5b353b4efdf4c046b6f74d13/master/w_2560%2Cc_limit/Burdick-TV-Crime.jpg"
                alt="image 3"
                className="h-full w-full object-cover"
              />
      </div>
      <div className="rounded-xl h-[50vh]">
      <img
                src="https://cdn.pixabay.com/photo/2016/01/15/00/11/police-1141037_640.jpg"
                alt="image 4"
                className="h-full w-full object-cover"
              />
      </div>
   
    </Slider>
    </section>
  );
}

export default HeroSection;