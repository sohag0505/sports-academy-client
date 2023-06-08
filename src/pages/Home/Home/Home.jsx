import EventsAndTournaments from "../../EventsAndTournaments/EventsAndTournaments";
import InstuctorSlider from "../../InstuctorSlider/InstuctorSlider";
import Slider from "../../Slider/Slider";
import TopSlider from "../TopSlider/TopSlider";

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <Slider></Slider>
      <InstuctorSlider></InstuctorSlider>
      <EventsAndTournaments></EventsAndTournaments>
    </div>
  );
};

export default Home;
