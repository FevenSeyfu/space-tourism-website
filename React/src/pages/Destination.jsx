import React, { useState, useEffect } from "react";
import moonImage from "../assets/destination/image-moon.png";
import data from '../../data.json';
import Layout from "../components/Layout";
import backgroundImage from '../assets/destination/background-destination-desktop.jpg';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    setDestinations(data.destinations);
    setSelectedDestination(data.destinations[0]);
  }, []);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <Layout backgroundImage={backgroundImage}>
      <main className="absolute left-[166.5px] top-[23.55%] flex flex-col font-barlow ">
        <h1 className="font-normal text-white uppercase  text-[28px] leading-34 tracking-widest">
          <span className="font-bold opacity-25 mr-[28px]">01</span>
          Pick your destination
        </h1>
        <article className="flex flex-row items-end justify-evenly h-[472px] mt-[4rem] pb-4">
          <img
            src={moonImage}
            alt="moon Image"
            className="w-[27.8rem] h-[27.8rem] ml-[63.5px]"
          />
          {selectedDestination && (
          <div className="w-[445px] h-[472px]  ml-[157px] flex flex-col gap-[1rem]">
            <ul className="flex flex-row w-[285.5px] h-[24px] gap-[35px] font-normal text-[#D0D6F9] text-[16px] leading-[19px] tracking-wider uppercase">
            {destinations.map((destination) => (
                    <li
                      key={destination.name}
                      className={`hover:underline underline-offset-[12px] decoration-[3px] hover:text-[#D0D6F9] hover:cursor-pointer hover:opacity-[0.5] ${
                        destination.name === selectedDestination.name
                          ? "underline text-white"
                          : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDestinationClick(destination);
                        }}
                      >
                        {destination.name}
                      </a>
                    </li>
                  ))}
            </ul>
            <h2 className="font-bellefair  uppercase font-normal text-white text-[100px] leading-[115px] ">
            {selectedDestination.name}
            </h2>
            <p className="h-[128px] w-[444px] font-barlow font-normal text-[#D0D6F9] text-[18px] leading-[32px] text-wrap tracking-widest">
            {selectedDestination.description}
            </p>
            <div className="w-[444px] h-[1px] bg-[#383B4B] mb-[28px]"/>
            <div className="flex flex-row gap-[79px] ">
              <p className="flex flex-col font-normal text-[#D0D6F9] text-[14px] leading-[17px] tracking-wider uppercase">
                Avg. distance
                <span className="uppercase font-bellefair font-normal text-[28px] text-white leading-[32px] mt-[12px]">
                {selectedDestination.distance}
                </span>  
              </p>
              <p className="flex flex-col font-normal text-[#D0D6F9] text-[14px] leading-[17px] tracking-wider uppercase">
                Est. travel time
                <span className="uppercase font-bellefair font-normal text-[28px] text-white leading-[32px] mt-[12px]">
                {selectedDestination.travel}
                </span>
              </p>
            </div>
          </div>
           )}
        </article>
      </main>
    </Layout>
  );
};

export default Destination;
