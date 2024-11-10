import React from "react";

const Franchies = () => {
  return (
    <div className="bg-black px-0 py-[150px]">
      <div className="text-white flex flex-col items-center text-center gap-[60px] lg:mx-40 xs:mx-0 my-0">
        <h1 className="text-4xl md:text-3xl font-bold">
          Start The Adventure Today And <br />
          Become a Franchisee
        </h1>
        <p className="text-lg md:text-[15px]">
          Are you passionate about delicious food and exceptional service? Join
          our growing family and bring our one-of-a-kind dining experience to
          your community. As a franchisee, you’ll be part of a renowned brand
          that’s committed to quality, innovation, and customer satisfaction.By
          becoming a franchisee, you’ll have access to our proven business
          model, a comprehensive support system, and an established reputation
          in the restaurant industry. Whether you're an experienced restaurateur
          or a first-time business owner, we provide you with all the tools,
          training, and ongoing assistance to ensure your success.
        </p>
        <div className="flex justify-center">
          <button className="gap-2.5 w-[294px] h-[68px] shadow-[0px_4px_14px_rgba(255,255,255,0.15)] px-[54px] py-5 rounded-[40px] bg-white text-black">
            Become a Franchisee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Franchies;
