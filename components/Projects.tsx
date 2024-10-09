import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://github.com/duresaguye/ethio-lost-and-found-Backend"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/image.png"
                height={150}
                width={150}
                alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Ethiolost and found </p>
                <p className="text-gray-500 text-[10px]">
                  website for Ethiolost and found that allows users to post lost
                  and found items and search for items they have lost.

                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://hireside.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl"></p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on Next.js that allows users to
                  apply for jobs, create job posts, and manage their company
                  profiles.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://techet-blog.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/techet.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                 Techኢት 
                </p>
                <p className="text-gray-500 text-[10px]">
                  Techኢት is a website that provides users
                  <br /> with the latest tech
                  news and updates in Ethiopia. <br />
                  The website is built using
                  react js and Tailwind CSS.

                </p>
             
              </div>
            </div>
          </Link>
          <Link
            href="http://44.201.47.75/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Payoasis</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a banking website utilizing Gatsby.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
