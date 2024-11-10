import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ client, job, review }) => {
  return (
    <div className="h-[25rem] p-3 w-80 max-w-lg border text-white transition-all duration-500 ease-in-out  rounded-xl border-solid border-[#191919] hover:translate-y-[-1rem] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:scale-105 md:max-w-md md:p-6 bg-[#191919] flex flex-col gap-10">
      <div className="flex justify-start  gap-2.5 items-start ">
        <div className="text-[#e04d29] w-[70px] h-[70px] bg-[#e04d29] rounded-[50%]">
          <p></p>
        </div>
        <div className="flex flex-col gap-3">
          <h3>{client}</h3>
          <p>{job}</p>
          <span className=" flex ">
            <FaStar size={10} color="yellow" />
            <FaStar size={10} color="yellow" />
            <FaStar size={10} color="yellow" />
            <FaStar size={10} color="yellow" />
            <FaStar size={10} color="yellow" />
          </span>
        </div>
      </div>

      <div className="text-center">
        <FaQuoteLeft size={30} color="gray" />
        <hr className="quote-line" />
      </div>

      <div className="testimonial-bottom">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
