import React from "react";
import MenuCard from "./MenuCard";
import image1 from "../../assets/naan_burger-removebg-preview.png";
import image2 from "../../assets/taco-removebg-preview.png";
import image3 from "../../assets/Burger-removebg-preview.png";
import image4 from "../../assets/Chese_chicken_naan-removebg-preview (1).png";
import image5 from "../../assets/3_layer_burger-removebg-preview (2).png";
import image6 from "../../assets/sandwich-removebg-preview.png";

import "../../App.css";

const Menu = () => {
  return (
    <div id="Menu" className="menu-container text-white flex flex-wrap w-full justify-center items-center px-0 py-[50px] md:max-w-full md:m-0 bg-black">
      <h1 className="text-4xl font-bold text-center text-white py-8 md:text-5xl">
        Our Best & Delicious Menu
      </h1>
      <div className="flex flex-wrap  gap-5 justify-center px-8 py-12 ">
        {/* Menu Item 1 */}
       {/* Menu Item 1 */}
       <MenuCard
          title="Naan Burger"
          description="A delicious naan burger made with fresh ingredients."
          price="$10.5"
          image={image1}
        />

        {/* Menu Item 2 */}
        <MenuCard
          title="Butter Chicken Taco"
          description="A tasty taco with buttery chicken and a special sauce ."
          price="$15.00"
          image={image2}
        />

        {/* Menu Item 3 */}
        <MenuCard
          title="Classic Burger"
          description="Juicy beef patty with all the classic toppings."
          price="$13.5"
          image={image3}
        />

        {/* Menu Item 4 */}
        <MenuCard
          title="Cheese Chicken Naan"
          description="A cheesy chicken naan that will leave you craving more."
          price="$14.00"
          image={image4}
        />

        {/* Menu Item 5 */}
        <MenuCard
          title="3 Layer Burger"
          description="A 3-layer burger with extra toppings and flavor."
          price="$10.5"
          image={image5}
        />

        {/* Menu Item 6 */}
        <MenuCard
          title="Sandwich"
          description="A crispy sandwich filled with fresh veggies and meat."
          price="$9.00"
          image={image6}
        />
      </div>
  <div className="shadow-[0px_4px_14px_rgba(255,255,255,0.15)] border px-10 py-[15px] rounded-[40px] border-solid border-white bg-white xs:hidden lg:block md:block w-">
        <button className="text-black text-[15px] xs:hidden lg:block md:block">
          See All
        </button>
      </div>
    </div>
  );
};

export default Menu;
