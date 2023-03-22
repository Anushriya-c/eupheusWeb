import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GoToTop from "../Components/Top";
import Banner_1 from "../assets/eventBanner.png";
import power from "../assets/power.png";
import grayBg from "../assets/grayBg.png";
import isfo from "../assets/iso.png";
import c2w from "../assets/code2win.png";
import eventLast from "../assets/img01.png";
import winner from "../assets/wiiner.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import class1 from "../assets/class1.png";
import img1 from "../assets/eventAsset1.png";
import img2 from "../assets/eventAsset2.png";
import { useNavigate } from "react-router-dom";

export default function Code2Win() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Competitions - Eupheus";
  }, []);
  return (
    <>
      <div
        className="bg-[#dbdbdb] overflow-hidden"
        style={{ backgroundImage: `url(${grayBg})` }}
      >
        <Navbar highlight={"events"} />

        <div className="mt-[10rem] mb-[1rem] flex items-start gap-8 relative">
          <div>
            <div className="text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] flex flex-col md:text-5xl text-base">
              <span className="font-bold ">GAMIFIED WAY OF</span>
              <span className="font-extrabold ">LEARNING TO CODE</span>
            </div>

            <div className=" mt-[2rem] text-black-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] flex flex-col md:text-4xl text-base">
              <span className="font-bold ">CODE2WIN by ROBOGARDEN</span>
              <span className=" ">National Coding Competition</span>
            </div>

            <div className=" mt-[1rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-base">
              Code2Win is a National-level Coding Competition for
              <br />
              students from Grade 1 to 12. This gamified environment
              <br />
              enables young minds to develop their competency and
              <br />
              encourages them to ‘learn’, ‘participate’, ‘win scholarships’
              <br />
              and ‘get certificate’. Needless to mention that they can
              <br />
              choose Coding as a life skill too.
            </div>
          </div>
          <img
            src={img1}
            className="w-[20vw] h-auto object-cover absolute sm:-top-[6rem] -top-[4rem] lg:right-[30vw] md:right-[15vw] right-[25vw]"
            alt=""
          />
          <img
            src={img2}
            className="w-[25vw] h-auto object-cover sm:mr-0 mr-8"
            alt=""
          />
        </div>
        <div className="w-[100vw] my-[2rem] flex justify-center items-center">
          <iframe
            className="sm:w-[60vw] w-[90vw] sm:h-[60vh] h-[30vh] shadow-3xl"
            src="https://www.youtube.com/embed/xK7cPVGKajQ"
          ></iframe>
        </div>

        <div className="sm:my-[5rem]">
          <div className="grid lg:grid-cols-2">
            <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-base">
              <div className=" sm:my-[3rem] my-[1rem] text-black-700 lg:w-[50vw] md:w-[70vw]  flex flex-col md:text-4xl text-xl">
                <span className="font-bold ">FOR GRADES 1-4</span>
              </div>
              Game-based course in which missions
              <br />
              are achieved by a program written by
              <br />
              Blocks. While preparing for a birthday
              <br />
              party, students will learn repeat loop
              <br />
              and Robo sensors of colors and text.
            </div>

            <div className="flex justify-center">
              <img src={class1} className="sm:h-[70vh] h-[30vh]" alt="" />
            </div>
          </div>
        </div>

        <div className="sm:my-[5rem]">
          <div className="grid lg:grid-cols-2">
            <div className="flex justify-center">
              <img src={java} className="sm:h-[70vh] h-[30vh]" alt="" />
            </div>
            <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-base">
              <div className=" sm:my-[3rem] my-[1rem] text-black-700 lg:w-[50vw] md:w-[70vw]  flex flex-col md:text-4xl text-xl">
                <span className="font-bold ">FOR GRADES 5-8</span>
              </div>
              Game-based course in which missions
              <br />
              are achieved by a program written by
              <br />
              Blocks. While preparing for a birthday
              <br />
              party, students will learn repeat loop
              <br />
              and Robo sensors of colors and text.
            </div>
          </div>
        </div>

        <div className="sm:my-[5rem] my-[1rem]">
          <div className="grid lg:grid-cols-2">
            <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-base">
              <div className=" sm:my-[3rem] my-[1rem] text-black-700 lg:w-[50vw] md:w-[70vw]  flex flex-col md:text-4xl text-xl">
                <span className="font-bold ">FOR GRADES 9-12</span>
              </div>
              Game-based course in which missions
              <br />
              are achieved by a program written by
              <br />
              JavaScript. Students will start their first
              <br />
              steps to JavaScript as a textual language
              <br />
              and its relation to Blocks programs.
            </div>

            <div className="flex justify-center">
              <img src={python} className="sm:h-[70vh] h-[40vh]" alt="" />
            </div>
          </div>
        </div>

        {/* <div className="sm:my-[5rem] my-[1rem]">
          <img
            src={isfo}
            className="sm:w-[430px] w-[16rem] my-[2rem]  md:ml-[12vw] ml-[5vw] h-auto"
            alt=""
          />
          <div className=" mt-[2rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] flex flex-col md:text-5xl text-base">
            <span className="font-bold ">OLYMPIAD THROUGH ISFO</span>
            <span className="font-extrabold ">(FOR GRADES 1 – 10)</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-2">
            <div>
              <p
                className="
             md:ml-[12vw] ml-[5vw] sm:my-[3rem] my-[1rem] font-semibold md:text-2xl"
              >
                Empowering Children to become
                <br />
                Global Olympiad Champions
              </p>
              <div className=" my-[2rem] text-gray-700  md:ml-[12vw] ml-[5vw] md:text-2xl text-base pr-4 sm:pr-0">
                International Society for Olympiad (ISFO), registered as a
                non-profit organisation in India and UAE, aims to identify,
                encourage and promote students with a creative bent of mind and
                affinity towards the disciplines of Maths, Science, English and
                General Knowledge. It aims to nurture &amp; enhance the latent
                genius in students through tests &amp; competitive exams of
                exemplary global quality and standard. ISFO aims to create an
                army of global learners who challenge the boundaries of the
                existing educational structure &amp; emerge as international
                olympiad champions.
              </div>

              <div className=" my-[2rem] text-gray-700  md:ml-[12vw] ml-[5vw] md:text-2xl text-base pr-4 sm:pr-0">
                ISFO is not just a series of tests—it’s a way of life!
              </div>
            </div>
            <img
              src={eventLast}
              className="sm:h-[100vh] h-[35vh] lg:mt-[-10vh]"
              alt=""
            />
          </div>
        </div>

        <div className=" sm:my-[5rem] my-[1rem] lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] flex flex-col md:text-4xl text-lg">
          <span className="">
            PAST <span className="font-bold "> OLYMPIAD WINNERS</span>
          </span>
        </div>

        <div className="flex justify-center">
          <img src={winner} className="sm:w-auto w-[100vw]" alt="" />
        </div> */}

        <Footer />
        <GoToTop />
      </div>
    </>
  );
}
