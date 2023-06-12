import { animated, useSpring } from "@react-spring/web";
import React from "react";
const SectionTittle = ({ heading, subHeading }) => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0, fontSize: "4px" },
      to: { opacity: 1, fontSize: "40px" },
      delay: 1000,
    }),
    []
  );
  return (
    <div className="text-center my-10">
      {subHeading && <p className="text-gray-500 mb-2 ">{subHeading}</p>}
      <animated.div style={props}>
        <h2 className=" font-bold uppercase text-2xl">{heading}</h2>
      </animated.div>
    </div>
  );
};

export default SectionTittle;
