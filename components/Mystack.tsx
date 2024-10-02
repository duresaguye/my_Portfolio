import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faHtml5, faCss3Alt, faPython, faPhp, faReact, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import { faCogs } from '@fortawesome/free-solid-svg-icons'; 

const Mystack: React.FC<{}> = () => {
  return (
    <div className="my-10">
      <h1 className="text-white font-semibold text-6xl text-center">My Tech Stacks</h1>
      
      {/* Programming Languages */}
      <h2 className="text-white font-semibold text-4xl text-center mt-10">Programming Languages</h2>
      <div className="flex flex-wrap justify-center items-center mt-5 space-x-6 space-y-4">
        <div className="flex flex-col items-center p-4 bg-red-600 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faCogs} className="text-white text-5xl" />
          <p className="text-white mt-2">C++</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faPython} className="text-white text-5xl" />
          <p className="text-white mt-2">Python</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faJsSquare} className="text-white text-5xl" />
          <p className="text-white mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-orange-500 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faHtml5} className="text-white text-5xl" />
          <p className="text-white mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-blue-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faCss3Alt} className="text-white text-5xl" />
          <p className="text-white mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faPhp} className="text-white text-5xl" />
          <p className="text-white mt-2">PHP</p>
        </div>
      </div>

      {/* Frameworks */}
      <h2 className="text-white font-semibold text-4xl text-center mt-10">Frameworks</h2>
      <div className="flex flex-wrap justify-center items-center mt-5 space-x-6 space-y-4">
        <div className="flex flex-col items-center p-4 bg-blue-600 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faReact} className="text-white text-5xl" />
          <p className="text-white mt-2">React.js</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-green-600 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faNodeJs} className="text-white text-5xl" />
          <p className="text-white mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-green-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        
          <p className="text-white mt-2">Django</p>
        </div>
      </div>

      {/* Tools */}
      <h2 className="text-white font-semibold text-4xl text-center mt-10">Tools</h2>
      <div className="flex flex-wrap justify-center items-center mt-5 space-x-6 space-y-4">
        <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faGitAlt} className="text-white text-5xl" />
          <p className="text-white mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-orange-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faNodeJs} className="text-white text-5xl" />
          <p className="text-white mt-2">Postman</p>
        </div>
      </div>
    </div>
  );
};

export default Mystack;
