import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="w-full h-[30rem] bg-[#FEEEEF] flex justify-evenly item-center gap-3">
        <div className="bg-yellow-400  relative ">
          <img
            className="w-[40rem] h-70 object-cover  relative "
            src="https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <h1 className="absolute top-30 bottom-10 left-10 right-10">
            {" "}
            Rights & Entitlement Programs
          </h1>
        </div>
        <div className="bg-purple-400 w-[40rem] h-60">
          <img src="https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="bg-green-400  w-[40rem] h-60">
          <img src=" https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
