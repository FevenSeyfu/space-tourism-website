import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import backgroundImage from "../assets/crew/background-crew-desktop.jpg";
import data from "../../data.json";

const Crew = () => {
  const [crews, setCrews] = useState([]);
  const [selectedCrewIndex, setSelectedCrewIndex] = useState(0);

  useEffect(() => {
    setCrews(data.crew);
  }, []);

  const handleCrewClick = (index) => {
    setSelectedCrewIndex(index);
  };

  return (
    <Layout backgroundImage={backgroundImage}>
      <main className="absolute ml-[165px] mr-[137px] top-[198px] flex flex-col font-barlow ">
        <h1 className="font-normal text-white uppercase  text-[28px] leading-34 tracking-widest">
          <span className="font-bold opacity-25 mr-[28px]">02</span>
          Meet your crew
        </h1>
        <article className="flex flex-row gap-[80px] h-[712px]">
          {crews[selectedCrewIndex] && (
            <>
              <div className="mt-[154px] flex flex-col font-bellefair font-normal ">
                <h3 className=" text-[32px] uppercase opacity-[.5] mb-[15px]">
                  {crews[selectedCrewIndex].role}
                </h3>
                <h2 className="uppercase text-[56px] w-[532px]">
                  {crews[selectedCrewIndex].name}
                </h2>
                <p className="w-[444px] h-[128px] font-barlow  text-[#D0D6F9] text-[18px] leading-7 tracking-widest mb-[120px]">
                  {crews[selectedCrewIndex].bio}
                </p>
                <div className="flex flex-row gap-[24px] items-center">
                  {crews.map((crew, index) => (
                      <div
                        className={`w-[15px] h-[15px] rounded-full cursor-pointer transition-opacity duration-200 hover:opacity-50 bg-white  ${
                          index === selectedCrewIndex
                            ? "opacity-1"
                            : "opacity-15"
                        }`}
                        onClick={() => handleCrewClick(index)}
                      />
                  ))}
                </div>
              </div>
              <img
                src={crews[selectedCrewIndex].images.png}
                alt={`${crews[selectedCrewIndex].name}'s image`}
              />
            </>
          )}
        </article>
      </main>
    </Layout>
  );
};

export default Crew;
