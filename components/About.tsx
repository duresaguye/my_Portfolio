import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1> 
        <p className="text-gray-200 text-center text-xl">
I’m Duresa, a software engineer passionate about blending creativity with technology. I specialize in developing user-friendly applications and enjoy tackling challenges that push the boundaries of innovation. Always eager to learn and collaborate, I believe in the power of technology to transform ideas into impactful solutions.

Feel free to connect with me!</p>

      </div>
    </section>
  );
};

export default About;
