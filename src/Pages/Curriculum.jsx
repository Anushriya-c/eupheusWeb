import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
// import duck from "../assets/curriculum/duck.png";
// import Sidebar from "../Components/Sidebar";
// import Zoom from "../Components/Curriculum/prePrimary/Zoom";
// import AlphaFun from "../Components/Curriculum/prePrimary/AlphaFun";
// import DotDash from "../Components/Curriculum/prePrimary/DotDash";
// import PrePrimary from "../Components/Curriculum/Index/PrePrimary";
import pp from "../assets/curriculum/prePrimary.png";
import cbse from "../assets/curriculum/cbse.png";
import icse from "../assets/curriculum/icse.png";
import ref from "../assets/curriculum/ref.png";
import skillDev from "../assets/curriculum/skillDev.png";
import state from "../assets/curriculum/state.png";
import banner from "../assets/curriculum/banner.png";

const Curriculum = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] flex flex-col gap-[2rem]">
        {/* <Sidebar
          sOpen={sOpen}
          setSopen={setSopen}
          type={"curriculum"}
          setPage={setPage}
        /> */}
        <img
          src={banner}
          className="w-full sm:pt-8 pt-[8rem] lg:mt-[0vh] md:mt-[15vh] sm:mt-[21vh]"
          alt=""
        />
        <div className="w-full grid sm:grid-rows-2 grid-rows-3 sm:grid-cols-3 grid-cols-2 gap-[3rem] sm:px-[3rem] px-2 pb-8">
          <span
            onClick={() => navigate("/curriculer/pre_primary")}
            className=" w-full flex justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-Pmarks"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={pp}
              alt=""
            />
          </span>
          <span
            // onClick={() => setIndex("pp")}
            className=" w-full flex justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-Pmarks"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={cbse}
              alt=""
            />
          </span>
          <span
            // onClick={() => setIndex("pp")}
            className=" w-full flex justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-Pmarks"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={icse}
              alt=""
            />
          </span>
          <span
            // onClick={() => setIndex("pp")}
            className=" w-full flex justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-Pmarks"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={ref}
              alt=""
            />
          </span>
          <span
            // onClick={() => setIndex("pp")}
            className=" w-full flex justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-Pmarks"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={skillDev}
              alt=""
            />
          </span>
          <span
            // onClick={() => setIndex("pp")}
            className=" w-full flex justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-Pmarks"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={state}
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default Curriculum;
