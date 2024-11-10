import React from "react";
import AboutVideo from "../../assets/chef-video.mp4";

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-wrap w-full h-auto flex-col text-center bg-black text-white px-5 py-[50px]"
    >
      <h1 className="text-2xl text-center mt-[50px]">Why We are Best Food Maker</h1>
      <p className="text-base leading-[1.6] mt-5 mb-[50px]">
      Over the years, we have refined our offerings, constantly evolving to <br /> meet the ever-changing tastes of our guests.
      </p>
      <div className="flex flex-wrap md:flex-col xs:flex-col justify-center items-center gap-[50px] lg:mx-20 xs:mx-0 my-0 ">
        <div className="flex-1  text-left xs:text-center  text-[1.2rem] xs:p-[0] px-5 py-0 ">
          <p className="text-base leading-[1.6] mt-5 mb-[50px]">
          It is a long-established fact that a great dining experience begins with a welcoming atmosphere. At our restaurant, we prioritize quality, service, and ambiance to ensure that every guest feels special. Our menu features a diverse selection of dishes, crafted with the freshest ingredients and inspired by both classic and contemporary flavors. Whether you’re enjoying a casual meal with family or celebrating a special occasion, we strive to provide an unforgettable experience.
          </p>
        </div>
        <div className="flex-1 text-center w-full">
          <video src={AboutVideo} className="w-full h-auto rounded-[10px]"></video>
        </div>
      </div>
    </div>
  );
};

export default About;
