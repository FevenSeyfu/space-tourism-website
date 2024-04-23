import React from "react";
import '../assets/Style/Home.css'

const Home = () => {
  return (
    <div className=" bg-[url('/src/assets/home/background-home-desktop.jpg')] bg-no-repeat bg-cover bg-center w-screen h-screen text-white">
      <main className=" flex flex-row">
        <article className="flex flex-col absolute top-[387px] left-[165px] w-[480px] h-[382px] gap-[24px]">
          <p className="font-barlow uppercase text-[28px] tracking-[4.72px] text-[#D0D6F9]">So, you want to travel to</p>
          <h1 className="home-heading">SPACE</h1>
          <p className="home-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
          </p>
        </article>
        <button class="CTA-button">Explore</button>
      </main>
    </div>
  );
};

export default Home;
