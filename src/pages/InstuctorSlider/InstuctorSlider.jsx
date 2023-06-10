import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./InstructorSlider.css";

const InstructorSlider = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructorsData = async () => {
      try {
        const response = await fetch("http://localhost:5000/instructor");
        const data = await response.json();
        setInstructors(data);
      } catch (error) {
        console.error("Error fetching instructors data:", error);
      }
    };

    fetchInstructorsData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 6 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true, // Enable right-to-left slide movement
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title text-3xl text-center my-10 font-semibold">
        Popular Instructors
      </h2>
      <Slider {...settings}>
        {instructors.slice(0, 6).map((instructor) => (
          <div key={instructor.id} className="card p-8">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="object-cover w-full h-[200px]"
            />
            <div className="card-content">
              <h3 className="card-title">{instructor.name}</h3>
              <p className="card-description">
                Students: {instructor.students.length}
              </p>
              <p className="font-semibold">Age: {instructor.age}</p>
              <p>
                Experience:
                <span className="text-rose-600">{instructor.experience}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstructorSlider;
