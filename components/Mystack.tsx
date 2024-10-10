import React from 'react';

const Mystack: React.FC<{}> = () => {
  return (
    <div className="my-10 text-white">
      <h1 className="font-bold text-green-500 text-5xl text-center"> Technology I Use </h1>

      {/* Programming Languages */}
      <h2 className="font-semibold text-3xl text-center mt-10">Programming Languages</h2>
      <div className="flex flex-wrap justify-center items-center mt-5 space-x-6 space-y-4">
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/python.svg" alt="Python" className="w-12 h-12" />
          <p className="mt-2">Python</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/javascript.svg" alt="JavaScript" className="w-12 h-12" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/typescript.svg" alt="TypeScript" className="w-12 h-12" />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/php.svg" alt="PHP" className="w-12 h-12" />
          <p className="mt-2">PHP</p>
        </div>
      </div>

      {/* Frameworks */}
      <h2 className="font-semibold text-3xl text-center mt-10">Frameworks</h2>
      <div className="flex flex-wrap justify-center items-center mt-5 space-x-6 space-y-4">
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/react-js.svg" alt="React.js" className="w-12 h-12" />
          <p className="mt-2">React.js</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/react-js.svg" alt="React Native" className="w-12 h-12" />
          <p className="mt-2">React Native</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/nodejs.svg" alt="Node.js" className="w-12 h-12" />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/django1.svg" alt="Django" className="w-12 h-12" />
          <p className="mt-2">Django</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
           <img src="/icons/nextjs.svg" alt="Next.js" className="w-12 h-12" />
          <p className="mt-2">Next.js</p>
        </div>
      </div>

      {/* Databases */}
      <h2 className="font-semibold text-3xl text-center mt-10">Databases</h2>
      <div className="flex flex-wrap justify-center items-center mt-5 space-x-6 space-y-4">
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/postgresql1.svg" alt="PostgreSQL" className="w-12 h-12" />
          <p className="mt-2">PostgreSQL</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/mongodb.svg" alt="MongoDB" className="w-12 h-12" />
          <p className="mt-2">MongoDB</p>
        </div>
      </div>

 

      {/* Tools */}
      <h2 className="font-semibold text-3xl text-center mt-10">Tools</h2>
      <div className="flex flex-wrap justify-center items-center mt-5 space-x-6 space-y-4">
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/Github.svg" alt="Git" className="w-12 h-12" />
          <p className="mt-2">Git</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          <img src="/icons/postman1.svg" alt="Postman" className="w-12 h-12" />
          <p className="mt-2">Postman</p>
        </div>
        <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max transform transition-transform duration-200 hover:-translate-y-1">
          <img src="/icons/docker.svg" alt="Docker" className="w-12 h-12" />
          <p className="mt-2">Docker</p>
        </div>
      </div>
    </div>
  );
};

export default Mystack;
