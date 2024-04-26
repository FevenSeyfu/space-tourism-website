import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import backgroundImageLg from "/assets/technology/background-technology-desktop.jpg";
import backgroundImageMd from "/assets/technology/background-technology-tablet.jpg";
import backgroundImageSm from "/assets/technology/background-technology-mobile.jpg";
import data from "../../data.json";

const Technology = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState(0);
  const [screenSize,setScreenSize] = useState('sm')
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageSm);

  useEffect(() => {
    setTechnologies(data.technology);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setBackgroundImage(backgroundImageSm);
        setScreenSize('sm');
      } else if (window.innerWidth <= 1024) {
        setBackgroundImage(backgroundImageMd);
        setScreenSize('md');
      } else {
        setBackgroundImage(backgroundImageLg);
        setScreenSize('lg');
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTechnologyClick = (index) => {
    setSelectedTechnologyIndex(index);
  };

  return (
    <Layout backgroundImage={backgroundImage}>
      <main className="w-screen absolute lg:pl-[165px] lg:pr-[137px] top-[88px] md:top-[136px] lg:top-[198px] flex flex-col font-barlow text-center md:text-left ">
        <h1 className="font-normal text-white uppercase text-base md:text-xl  lg:text-[28px] tracking-[2.75px] md:tracking-[3.38px] lg:tracking-[4.72px] md:ml-[36px]">
          <span className="font-bold opacity-25 mr-[28px]">03</span>
          Space Launch 101
        </h1>
        <article className="flex flex-col-reverse mt-8 md:mt-[60px] lg:flex-row lg:gap-[80px] lg:h-[712px] lg:mt-[26px] text-center lg:text-left">
          {technologies[selectedTechnologyIndex] && (
            <>
              <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-[80px] lg:mt-[111px]">
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-[32px] items-center">
                  {technologies.map((technology, index) => (
                    <div
                      className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] mt-[34px] mb-[26px] md:mt-14 md:mb-[44px] lg:my-0 rounded-full cursor-pointer border border-white hover:opacity-100 flex items-center justify-center ${
                        index === selectedTechnologyIndex
                          ? "bg-white text-[#0B0D17] opacity-1"
                          : "opacity-25 text-white"
                      }`}
                      onClick={() => handleTechnologyClick(index)}
                      key={index}
                    >
                      <span
                        className=" font-bellefair font-normal text-center text-base md:text-2xl lg:text-[32px] tracking-[1px] md:tracking-[1.5px] lg:tracking-[2px]"
                      >
                        {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col font-normal lg:gap-4">
                  <h3 className="font-barlowCondensed uppercase text-[#D0D6F9] text-sm tracking-[2.36px]  md:text-base md:tracking-[2.7px] mb-2 md:mb-4 lg:mb-[11px]">
                    The terminology...
                  </h3>
                  <h2 className="font-bellefair uppercase  text-2xl md:text-[40px] lg:text-[56px] text-nowrap mb-4">
                    {technologies[selectedTechnologyIndex].name}
                  </h2>
                  <p className="lg:w-[444px] px-4 md:px-[155px] lg:px-0 font-barlow  text-[#D0D6F9]  text-[15px] leading-6 md:text-base md:leading-7 lg:text-lg lg:leading-8">
                    {technologies[selectedTechnologyIndex].description}
                  </p>
                </div>
              </div>
              <img
                src={screenSize == 'lg' ?  process.env.PUBLIC_URL + technologies[selectedTechnologyIndex].images.portrait : process.env.PUBLIC_URL + technologies[selectedTechnologyIndex].images.landscape}
                alt={`${technologies[selectedTechnologyIndex].name}'s image`}
                className="w-screen h-[170px] md:h-[310px] lg:w-[515px] lg:h-[527px]"
              />
            </>
          )}
        </article>
      </main>
    </Layout>
  );
};

export default Technology;
