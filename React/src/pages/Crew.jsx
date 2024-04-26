import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import backgroundImageLg from "../assets/crew/background-crew-desktop.jpg";
import backgroundImageMd from "../assets/crew/background-crew-desktop.jpg";
import backgroundImageSm from "../assets/crew/background-crew-desktop.jpg";
import data from "../../data.json";

const Crew = () => {
  const [crews, setCrews] = useState([]);
  const [selectedCrewIndex, setSelectedCrewIndex] = useState(0);
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
    setCrews(data.crew);
  }, []);

  const handleCrewClick = (index) => {
    setSelectedCrewIndex(index);
  };

  return (
    <Layout backgroundImage={backgroundImage}>
      <main
        className="font-barlow flex flex-col px-6 gap-8 md:px-9 md:top-[136px] md:gap-[60px]
      lg:gap-4 top-[88px] items-center justify-center md:items-start absolute  text-center lg:text-left w-full lg:pl-[165px] lg:pr-[136px] lg:w-screen   lg:top-[198px]"
      >
        <h1 className="font-normal text-white uppercase text-base md:text-xl lg:text-3xl lg:tracking-[4.72px] tracking-wider opacity-100">
          <span className="font-bold opacity-25 mr-4 lg:mr-7">02</span>
          Meet your crew
        </h1>
        <article className="flex flex-col-reverse md:flex-col w-full items-center lg:flex-row lg:gap-[80px]  lg:h-[712px]">
          {crews[selectedCrewIndex] && (
            <>
              <div className="flex flex-col-reverse md:flex-col w-full items-center lg:items-start font-bellefair font-normal gap-4 md:px-28 lg:px-0 lg:w-[488px]">
                <div className=" flex flex-col  lg:gap-4">
                  <h3 className="text-base md:text-2xl lg:text-[32px] uppercase opacity-[.5] mb-2 lg:mb-0">
                    {crews[selectedCrewIndex].role}
                  </h3>
                  <h2 className="uppercase text-nowrap text-2xl md:text-[40px] lg:text-[56px] lg:w-[532px] mb-4 lg:mb-0">
                    {crews[selectedCrewIndex].name}
                  </h2>
                  <p className="font-barlow  text-[#D0D6F9] text-[15px] lg:text-[18px] leading-6 lg:leading-7  lg:w-[444px] lg:mb-[120px]">
                    {crews[selectedCrewIndex].bio}
                  </p>
                </div>
                <div className="flex flex-row gap-[24px] items-center">
                  {crews.map((crew, index) => (
                    <div
                      className={`w-[15px] h-[15px] rounded-full cursor-pointer transition-opacity duration-200 hover:opacity-50 bg-white my-8 md:my-[40px] lg:my-0  ${
                        index === selectedCrewIndex ? "opacity-1" : "opacity-15"
                      }`}
                      onClick={() => handleCrewClick(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="border-b-[1px] border-[#383B4B] md:border-0  w-full flex justify-center lg:justify-start">
                <img
                  src={`url(${crews[selectedCrewIndex].images.png})`}
                  alt={`${crews[selectedCrewIndex].name}'s image`}
                  className="h-[223px] md:h-[454px] lg:h-auto"
                />
              </div>
            </>
          )}
        </article>
      </main>
    </Layout>
  );
};

export default Crew;
