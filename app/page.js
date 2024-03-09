"use client";
import React from "react";
import Navbar from "@/Components/Navbar";
import Landingpage from "@/Components/Landingpage";
import Aboutus from "@/Components/Aboutus";

const page = () => {
  return (
    <>
      <Navbar />
      <Landingpage/>
      <Aboutus/>
    </>
  );
};

export default page;
