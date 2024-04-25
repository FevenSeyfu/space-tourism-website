import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import backgroundImage from "../assets/technology/background-technology-desktop.jpg";
import data from "../../data.json";

const Technology = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState(0);

  useEffect(() => {
    setTechnologies(data.technology);
  }, []);

  const handleTechnologyClick = (index) => {
    setSelectedTechnologyIndex(index);
  };
  return (
    <Layout backgroundImage={backgroundImage}>
      <main className="absolute ml-[165px] mr-[137px] top-[198px] flex flex-col font-barlow ">
        <h1 className="font-normal text-white uppercase  text-[28px] leading-34 tracking-widest">
          <span className="font-bold opacity-25 mr-[28px]">03</span>
          Space Launch 101
        </h1>
        <article className="flex flex-row gap-[80px] h-[712px] mt-[26px]">
          {technologies[selectedTechnologyIndex] && (
            <>
              <div className="mt-[111px] flex flex-row gap-[80px]">
                <div className="flex flex-col gap-[32px] items-center">
                  {technologies.map((technology, index) => (
                    <div
                      className={`w-[80px] h-[80px] rounded-full cursor-pointer  text-white border border-white hover:opacity-100 flex items-center justify-center ${
                        index === selectedTechnologyIndex
                          ? "bg-white text-[#0B0D17] opacity-1"
                          : "opacity-25"
                      }`}
                      onClick={() => handleTechnologyClick(index)}
                    >
                      <span
                        className=" font-bellefair font-normal text-center text-[32px] leading-9 tracking-wider"
                        style={{ letterSpacing: "2px" }}
                      >
                        {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col font-bellefair font-normal ">
                  <h3 className=" text-[16px] uppercase text-[#D0D6F9] tracking-[2.7px] mb-[11px]">
                    The terminology...
                  </h3>
                  <h2 className="uppercase text-[56px] text-nowrap">
                    {technologies[selectedTechnologyIndex].name}
                  </h2>
                  <p className="w-[444px] font-barlow  text-[#D0D6F9] text-[18px] leading-7 tracking-widest">
                    {technologies[selectedTechnologyIndex].description}
                  </p>
                </div>
              </div>
              <img
                src={technologies[selectedTechnologyIndex].images.portrait}
                alt={`${technologies[selectedTechnologyIndex].name}'s image`}
                className="w-[515px] h-[527px]"
              />
            </>
          )}
        </article>
      </main>
    </Layout>
  );
};

export default Technology;
