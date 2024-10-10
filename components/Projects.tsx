import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      
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
                height={300}
                width={300}
                alt="First Project"
                 className="rounded-lg"
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
                height={300}
                width={300}
                className="rounded-lg"
                alt="TechetBlog"
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
         
        </div>
      </div>
    </section>
  );
};

export default Projects;
