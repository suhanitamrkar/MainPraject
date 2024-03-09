import React from "react";

const Landingpage = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[#FEEEEF] pt-1 text-black">
        <div className="w-full h-full bg-[#FEEEEF] flex  justify-between item-center">
          <div className="  w-50">
            <h1 className="pt-40 pl-15 text-8xl text-bold text-[#7D5C5D] ">
              Empowering Happiness
            </h1>
            <p className="p-10 text-[#7D5C5D]   ">
              Welcome to happy elders: where age embraces joy !<br /> discover a
              vibrant online community dedicated to seniors,
              <br /> their families and caregivers.
            </p>
            <button className=" border-2 border-[#7D5C5D] text-[#7D5C5D] ml-10 p-3 rounded-md   ">
              See More
            </button>
          </div>
          <div className="  mt-20">
            <img
              className="w-[50rem] h-100"
              src="https://i.pinimg.com/564x/91/e6/a1/91e6a1db82de9dcf4d483953eb25a618.jpg"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landingpage;
