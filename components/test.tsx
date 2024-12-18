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
    <section id="projects" className="bg-gray-900 py-10">
      <h2 className="text-white font-semibold text-center text-6xl mb-10">
        PROJECTS
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Project */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Link
            href="https://github.com/duresaguye/ethio-lost-and-found-Backend"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/image.png"
              height={300}
              width={400}
              alt="Ethiolost and Found"
              className="w-full h-64 object-cover"
            />
          </Link>
          <div className="p-4">
            <h3 className="text-white font-bold text-xl mb-2">Ethiolost and Found</h3>
            <p className="text-gray-400 text-sm mb-4">
              A website that allows users to post lost and found items.
            </p>
            <div className="flex items-center">
              <FaGithub className="text-gray-400 mr-2" />
              <Link
                href="https://github.com/duresaguye/ethiolostfound-frontend"
                className="text-gray-400 hover:text-white text-sm"
              >
                View Code
              </Link>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Link
            href="https://techet-blog.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/techet.png"
              height={300}
              width={400}
              alt="TechetBlog"
              className="w-full h-64 object-cover"
            />
          </Link>
          <div className="p-4">
            <h3 className="text-white font-bold text-xl mb-2">Techኢት</h3>
            <p className="text-gray-400 text-sm mb-4">
              Techኢት is a website that provides users with the latest tech news and updates in Ethiopia.
            </p>
            <div className="flex items-center">
              <FaGithub className="text-gray-400 mr-2" />
              <Link
                href="https://github.com/duresaguye/techet-blog"
                className="text-gray-400 hover:text-white text-sm"
              >
                View Code
              </Link>
            </div>
          </div>
        </div>

        {/* Third Project */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Link
            href="https://github.com/duresaguye/aau-info-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/AAUhub.png"
              height={300}
              width={400}
              alt="AAUHub"
              className="w-full h-64 object-cover"
            />
          </Link>
          <div className="p-4">
            <h3 className="text-white font-bold text-xl mb-2">AAUhub</h3>
            <p className="text-gray-400 text-sm mb-4">
              AAHub is a mobile app built using React Native, designed for Addis Ababa University (AAU). It centralizes departmental information, course details, and study resources.
            </p>
            <div className="flex items-center">
              <FaGithub className="text-gray-400 mr-2" />
              <Link
                href="https://github.com/duresaguye/aau-info-app"
                className="text-gray-400 hover:text-white text-sm"
              >
                View Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
