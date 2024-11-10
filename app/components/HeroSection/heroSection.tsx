import React from 'react'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center border-4 border-blue-900 border-dotted bg-gradient-to-r from-green-500 via-purple-500 to-green-500 py-16 px-4 md:px-20">
      
      {/* Left Side Text Content */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello, My name is Sumera Hashim
        </h1>
        <p className="text-lg md:text-xl text-justify">
          My projects showcase my growing skills in JavaScript, TypeScript, HTML, and CSS.
          The real-time updating feature enhances user experience, while the responsive design
          ensures it looks great on any device. By building this project, I've been able to apply
          the concepts I've learned in React and explore the powerful capabilities of Next.js,
          further enriching my web development journey.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/sum 1.png" 
          alt="portfolio image" 
          className="w-48 h-48 md:w-80 md:h-80 rounded-full object-ful shadow-lg" 
        />
      </div>
      
    </section>
  );
}

export default HeroSection;