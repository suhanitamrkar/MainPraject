import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className='fixed z-[999] w-full  px-20 py-3 font-["oswald] tracking-tight   flex justify-between items-center text-[#7D5C5D]'>
        <div className="logo">
          <img
            className="w-50 h-20 rounded-full "
            src="https://cdn.vectorstock.com/i/preview-1x/58/05/adult-care-logo-design-old-couple-with-heart-vector-46505805.webp"
          />
        </div>
        <div className="links flex gap-10 ">
          {["How we work?", "Our contact", "About Us", "Care provider"].map(
            (item, index) => (
              <a
                key={index}
                className={`text-lg capitalize font-bold  ${
                  index === 4 && "ml-32"
                }`}
              >
                {item}
              </a>
            )
          )}
        </div>
        <div className=" ">
          <button className="border-2 rounded-md text-md text-bold border-[#7D5C5D] p-3 flex  items-center gap-3">
            Donation
            <span className=" ">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
