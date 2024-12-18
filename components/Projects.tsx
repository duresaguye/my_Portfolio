"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

// Reusable ProjectCard Component
interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="flex flex-col items-center mb-10 relative">
      {/* Image Section */}
      <div className="w-full max-w-[300px] z-0">
        <Image
          src={imageSrc}
          height={300}
          width={300}
          alt={title}
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full text-center mt-4 z-10">
        <h3 className="text-white font-semibold text-xl">{title}</h3>
        <p className="text-white text-sm mt-2">{description}</p>
        <div className="flex justify-center mt-4 space-x-4">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-400 text-sm cursor-pointer"
          >
            <FaGithub className="text-gray-500" />
            <span>View Code</span>
          </Link>
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm cursor-pointer"
            >
              Visit Website
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<{}> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section id="projects" className="py-16">
      <h2 className="text-white font-semibold text-center text-4xl mb-12">
        PROJECTS
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Project Cards */}
        <ProjectCard
          imageSrc="/image.png"
          title="Ethiolost and Found"
          description="A website that allows users to post lost and found items."
          githubLink="https://github.com/duresaguye/ethiolostfound-frontend"
          liveLink="https://ethiolostandfound.com"
        />
        <ProjectCard
          imageSrc="/techeth.png"
          title="Techኢት"
          description="Techኢት Digital Solutions is a company that provides digital solutions."
          githubLink="#"
          liveLink="https://techeth-digital-soultion.vercel.app/"
        />
          <ProjectCard
          imageSrc="/smartjobs.png"
          title="Smart Jobs"
          description="SmartJobs is a web-based platform designed to simplify job searching and recruitment. Built using HTML, CSS, and TailwindCSS, the platform offers a modern and responsive interface."
          githubLink="https://github.com/duresaguye/job-portal-"
          liveLink="https://job-searching-wbsite.netlify.app/"
        />
        <ProjectCard
          imageSrc="/AAUhub.png"
          title="AAUHub"
          description="AAHub is a mobile app built using React Native, designed for Addis Ababa University (AAU). It centralizes departmental information, course details, and study resources."
          githubLink="https://github.com/duresaguye/aau-info-app"
          liveLink="#"
        />
      
      </div>
    </section>
  );
};

export default Projects;
