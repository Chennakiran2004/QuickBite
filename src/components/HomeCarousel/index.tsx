import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

import WelcomePage from "../WelcomePage";
import AllYourFavorites from "../AllYourFavorites";
import ChooseYourFood from "../ChooseYourFood";



function HomeCarousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,  
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1 
        }
      }
    ],
    appendDots: (dots: React.ReactElement) => <div style={{ position: 'absolute', top: '79%'}}>{dots}</div>, // Customize dot position
    dotsClass: "slick-dots custom-dots"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <WelcomePage/>          
        </div>
        <div>
          <AllYourFavorites/>
        </div>
        <div>
          <ChooseYourFood/>
        </div>
      </Slider>
    </div>
  );
}

export default HomeCarousel;
