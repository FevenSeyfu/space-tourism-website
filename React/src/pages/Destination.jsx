import React, { useState, useEffect } from "react";
import data from "../../data.json";
import Layout from "../components/Layout";
import backgroundImageLg from "../assets/destination/background-destination-desktop.jpg";
import backgroundImageMd from "../assets/destination/background-destination-tablet.jpg";
import backgroundImageSm from "../assets/destination/background-destination-mobile.jpg";
import {getImageURL} from "../utils/image-util";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageSm);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setBackgroundImage(backgroundImageSm);
      } else if (window.innerWidth <= 1024) {
        setBackgroundImage(backgroundImageMd);
      } else {
        setBackgroundImage(backgroundImageLg);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setDestinations(data.destinations);
  }, []);

  const handleDestinationClick = (index) => {
    setSelectedDestinationIndex(index);
  };

  return (
    <Layout backgroundImage={backgroundImage}>
      <main
        className="font-barlow flex flex-col px-6 gap-8 md:px-9 md:top-[136px] md:gap-[60px]
      lg:gap-4 top-[88px] items-center justify-center md:items-start absolute lg:left-[166.5px] lg:top-[23.55%] text-center lg:text-left w-full"
      >
        <h1 className="font-normal text-white uppercase text-base md:text-xl lg:text-3xl lg:leading-[4.72px] tracking-wider opacity-100">
          <span className="font-bold opacity-25 mr-4 lg:mr-7">01</span>
          Pick your destination
        </h1>
        <article className="flex flex-col w-full items-center  gap-6 lg:gap-4 lg:flex-row lg:items-end lg:justify-evenly lg:h-[472px] lg:w-auto lg:mt-[4rem] lg:pb-4">
          {destinations[selectedDestinationIndex] && (
            <>
              <img
                src={getImageURL(destinations[selectedDestinationIndex].images.png)}
                alt={`${destinations[selectedDestinationIndex].name} Image`}
                className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[27.8rem] lg:h-[27.8rem] lg:ml-[63.5px]"
              />
              <div className="flex flex-col md:mx-[60px] lg:w-[444px] lg:ml-[157px] lg:gap-4">
                <ul className="flex flex-row px-10 md:px-32  lg:p-0 justify-evenly lg:w-[285.5px] lg:h-[24px] lg:gap-[35px] font-normal text-[#D0D6F9] text-sm tracking-[2.36px] md:text-base md:tracking-[2.7px]  uppercase ">
                  {destinations.map((destination,index) => (
                    <li
                      key={index}
                      className={`hover:underline underline-offset-[12px] decoration-[3px] hover:text-[#D0D6F9] hover:cursor-pointer hover:opacity-[0.5] mb-5 md:mb-8 font-barlowCondensed  ${
                        index === selectedDestinationIndex
                          ? "underline text-white"
                          : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDestinationClick(index);
                          
                        }}
                      >
                        {destinations[selectedDestinationIndex].name}
                      </a>
                    </li>
                  ))}
                </ul>
                <h2 className="font-bellefair  uppercase font-normal text-white text-[56px] md:text-[80px] lg:text-[100px]">
                  {destinations[selectedDestinationIndex].name}
                </h2>
                <p className=" font-barlow font-normal text-[#D0D6F9] text-[15px] md:text-base lg:text-lg leading-6 md:leading-7  lg:leading-8 lg:tracking-widest  lg:mx-0 ">
                  {destinations[selectedDestinationIndex].description}
                </p>
                <div className="w-full h-[1px] bg-[#383B4B] my-8 md:mt-12 md:mb-7  lg:mt-[54px] lg:mb-0" />
                <div className="flex flex-col gap-8 md:flex-row md:justify-evenly lg:justify-start lg:gap-[79px] font-normal font-barlowCondensed tracking-wider  uppercase">
                  <p className="flex flex-col gap-3  text-[#D0D6F9] text-sm ">
                    Avg. distance
                    <span className="font-bellefair  text-[28px] text-white">
                      {destinations[selectedDestinationIndex].distance}
                    </span>
                  </p>
                  <p className="flex flex-col gap-3 text-[#D0D6F9] text-sm">
                    Est. travel time
                    <span className="font-bellefair text-[28px] text-white">
                      {destinations[selectedDestinationIndex].travel}
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
        </article>
      </main>
    </Layout>
  );
};

export default Destination;
