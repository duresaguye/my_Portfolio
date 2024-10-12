import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9)" }} // Fixed the scale transformation syntax
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="text-gray-200 text-center text-xl">
          i am Duresa, a full stack developer specializing in React, Next.js, Node.js, and Django. I create user-friendly, scalable applications that solve real-world problems. My projects include Ethio Lost and Found, a platform for reconnecting users with lost items, and AAUHub, an app tailored for students at Addis Ababa University.
          <br /> 
          I enjoy tackling challenges with clean code and exploring new technologies to enhance user experiences. Let&apos;s connect and create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
