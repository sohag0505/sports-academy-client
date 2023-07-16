import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const TopSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <img
          className="object-cover w-full h-[600px]"
          src="https://cdn.firstcry.com/education/2022/05/04111910/522565846.jpg"
          alt="Slide 1"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">Football Playground</h2>
            <p className="text-sm">Ashulia,Savar</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full h-[600px]"
          src="https://media.gettyimages.com/id/183256716/photo/ball-and-basketball-court.jpg?s=612x612&w=gi&k=20&c=j4n2xknaJ-tL-tGZyvUxXpjhBFEteP0nx9L7ZMk0oZI="
          alt="Slide 2"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">Basketball Playground</h2>
            <p className="text-sm">Gulshan, Dhaka</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full h-[600px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcVtIHdlHn_v7sNjQScot5qEjhHZGGBdaQffJj-5OaqTO6CC609OOCc1NIrBJHPf40MoU&usqp=CAU"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">Cricket Playground</h2>
            <p className="text-sm">Permanent Academy</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TopSlider;
