import React from "react";

const MenuCard = ({ image, title, description, price }) => {
  return (
    <div className="w-80 max-w-lg border text-white transition-all duration-500 ease-in-out p-3 rounded-xl border-solid border-[#191919] hover:translate-y-[-1rem] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:scale-105 md:max-w-md md:p-6 bg-[#191919]">
      <img className="w-full object-cover p-4" src={image} alt={title} />
      <h3 className="text-xl font-bold leading-6 px-4">{title}</h3>
      <p className="text-base leading-6 p-4">{description}</p>
      <div className="card-bottom">
        <h3 className="mx-0 my-4">{price}</h3>
      </div>
    </div>
  );
};

export default MenuCard;
