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
          src="https://d12eu00glpdtk2.cloudfront.net/public/images/local/Future-Sports-Academy-football-photo.jpeg"
          alt="Slide 1"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">Football Academy</h2>
            <p className="text-sm">
              Football is a team sport played with a spherical ball between two
              teams of 11 players. It is the most popular sport in the world.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full h-[600px]"
          src="https://sport360.com/wp-content/uploads/2016/05/PSSA-2.jpg"
          alt="Slide 2"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">Badminton Academy</h2>
            <p className="text-sm">
              Badminton is a racquet sport played using racquets to hit a
              shuttlecock across a net. It is a popular recreational and
              competitive sport and cosly game.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full h-[600px]"
          src="https://piggy-rider.s3.ap-south-1.amazonaws.com/cricket-coaching-for-boys-girls-all-days-avni-sports-academy-primary-image-wZmOYfqoBVxkpVTO.jpg"
          alt="Slide 3"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">Cricket Academy</h2>
            <p className="text-sm">
              Cricket is a bat-and-ball game played between two teams of eleven
              players. It is widely regarded as the second most popular sport in
              the world.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TopSlider;
