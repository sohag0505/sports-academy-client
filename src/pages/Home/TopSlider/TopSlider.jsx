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
          src="https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/305636900_601871211385177_8862301353325299851_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFDn4U5EVjH1CdO09OMvqXUTWnjKTQ3OEtNaeMpNDc4S7vOC11dZuR1Kzr5LIA6wVw92788CFJLjwgwY0MadgVS&_nc_ohc=KjNFG09e6m8AX8lz9Bv&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AfAK93BnE0g0iJvS2aMeMU7hAWR_TALvh1Au8h4lVmOxaA&oe=64AD4147"
          alt="Slide 1"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">
              Manarat International University
            </h2>
            <p className="text-sm">Ashulia,Savar</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full h-[600px]"
          src="https://lh3.googleusercontent.com/p/AF1QipNcFEKFTBXEaUgttD2zglw8NEGkOtQrt6BbUXyO=w768-h768-n-o-v1"
          alt="Slide 2"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">
              Manarat International University
            </h2>
            <p className="text-sm">Gulshan, Dhaka</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full h-[600px]"
          src="https://manarat.ac.bd/wp-content/uploads/2021/06/Website-header-cover-2.jpg"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">
              Manarat International University
            </h2>
            <p className="text-sm">Admission Fair</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TopSlider;
