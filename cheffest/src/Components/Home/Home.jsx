import React from "react";
import "../../App.css";

const Home = () => {
  return (
    <div className="  min-h-screen md:max-[100%]:">
      <img
        src="/src/assets/fresh-tasty-homemade-burger-wooden-table.png"
        alt="Food Image"
        className="absolute top-0 left-0 w-full h-full object-cover transform -scale-x-100 z-[-1]"
      />
      <div className=" w-[100%] h-[100vh] bg-gradient-to-r from-black/80 to-black/60 via-transparent flex  items-center justify-center ">
        <div className=" text-white flex flex-col items-start gap-5 p-5 max-w-[80%]  text-left absolute top-[20%] left-[10%] md:top-[20] md:left-[5%] md:w-full md:gap[15px] ">
          <h1 className="font-extrabold text-3xl leading-tight ">
            Welcome!<br />We Made Delicious <br />Food for You
          </h1>
          <p className="text-xl leading-relaxed ">
            At Cheffest, we’ve reimagined comfort food with a twist of quality and freshness. Our menu is a celebration of the best, from indulgent burgers to irresistible sandwiches, sides, and more.
          </p>
          <button className="px-8 py-3 text-white bg-[#FF5733] rounded-full shadow-lg hover:bg-[#C0392B] transition-colors duration-300">
            Order Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
