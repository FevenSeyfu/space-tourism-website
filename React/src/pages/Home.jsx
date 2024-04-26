import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import backgroundImageSm from "/assets/home/background-home-mobile.jpg";
import backgroundImageMd from "/assets/home/background-home-tablet.jpg";
import backgroundImageLg from "/assets/home/background-home-desktop.jpg";

const Home = () => {
  const navigate = useNavigate();
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
  const handleClick = () => {
    navigate("/destination");
  };

  return (
    <Layout backgroundImage={backgroundImage}>
      <main className=" flex flex-col items-center lg:flex-row lg:items-end lg:justify-between text-center px-6 md:px-[162px] lg:text-left lg:px-[165px] w-full absolute top-[112px] md:top-[202px]  lg:top-[378px] ">
        <article className="font-barlow font-normal  flex flex-col  w-full lg:w-[480px] lg:h-[382px] md:gap-6 text-[#D0D6F9]">
          <p className="font-barlowCondensed uppercase text-base md:text-[20px] lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
            So, you want to travel to
          </p>
          <h1 className="font-bellefair  text-white text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] lg:leading-[172px] uppercase">
            space
          </h1>
          <p className="text-center text-[15px] md:text-base leading-[25px] md:leading-7  lg:leading-8 lg:tracking-widest">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <button
          className="w-[150px] h-[150px] mt-[81px] md:w-[242px] md:h-[242px] md:mt-[156px] lg:w-[274px] lg:h-[274px] rounded-full uppercase  font-bellefair font-normal text-[20px] md:text-[32px]  tracking-wider bg-white text-[#0b0d17] hover:shadow-lg hover:ring-sm md:hover:ring-md lg:hover:ring-lg hover:ring-[#979797]/10"
          onClick={handleClick}
        >
            EXPLORE
        </button>
      </main>
    </Layout>
  );
};

export default Home;
