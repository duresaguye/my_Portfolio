"use client";
import Image from "next/image";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa"; 

const Projects: React.FC<{}> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

 
  if (!isMounted) {
    return null;
  }

  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      
      <div className="container mx-auto">
        {/* First Project */}
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://github.com/duresaguye/ethio-lost-and-found-Backend"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] flex-row flex mb-5"
          >
            <Image
              src="/image.png"
              height={300}
              width={300}
              alt="Ethiolost and Found"
              className="rounded-lg"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">Ethiolost and Found</p>
              <p className="text-gray-500 text-[10px]">
                A website that allows users to post lost and found items.
              </p>
              <div className="flex items-center mt-2">
                <FaGithub className="text-gray-500 mr-1" />
                <Link
                  href="https://github.com/duresaguye/ethiolostfound-frontend"
                  className="text-gray-500 text-xs"
                >
                  View Code
                </Link>
              </div>
            </div>
          </Link>
        </div>

        {/* Second Project */}
        <div className="flex-col flex md:flex-row">
          <Link
            href="https://techet-blog.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] flex-row flex mb-5"
          >
            <Image
              src="/techet.png"
              height={300}
              width={300}
              alt="TechetBlog"
              className="rounded-lg"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">Techኢት</p>
              <p className="text-gray-500 text-[10px]">
                Techኢት is a website that provides users with the latest tech
                news and updates in Ethiopia.
              </p>
              <div className="flex items-center mt-2">
                <FaGithub className="text-gray-500 mr-1" />
                <Link
                  href="https://github.com/duresaguye/techet-blog"
                  className="text-gray-500 text-xs"
                >
                  View Code
                </Link>
              </div>
            </div>
          </Link>
        </div>

        {/* Third Project */}
        <div className="flex-col flex md:flex-row">
          <Link
            href="https://github.com/duresaguye/aau-info-app"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] flex-row flex mb-5"
          >
            <Image
              src="/AAUhub.png"
              height={100}
              width={300}
              alt="AAUHub"
              className="rounded-lg"
            />
            <div className="p-3">
              <p className="text-white font-semibold text-xl">AAUhub</p>
              <p className="text-gray-500 text-[10px]">
                AAHub is a mobile app built using React Native,
                designed for Addis Ababa University (AAU).
                It centralizes departmental information, course details, and study resources.
              </p>
              <div className="flex items-center mt-2">
                <FaGithub className="text-gray-500 mr-1" />
                <Link
                  href="https://github.com/duresaguye/aau-info-app"
                  className="text-gray-500 text-xs"
                >
                  View Code
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
