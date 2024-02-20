import React from 'react';
const Hero = () => {
  return (
    <>
    {/* component */}
    <div className="lg:h-screen h-80 md:h-96 bg-gray-50 flex items-center">
      <section
        className="bg-cover bg-center py-16 md:py-24 lg:py-32 w-full h-full"
        style={{ backgroundImage: 'url("https://image.lexica.art/full_jpg/4e3ce879-4074-49b1-be8e-52216a7f08f9")' }}
      >
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center px-2">
            <div className="w-3/4 md:w-1/2 md:px-8 lg:px-12">
              <h1 className="text-2xl lg:text-5xl font-medium mb-6 md:text-3xl">Step into Harmony Within</h1>
              <p className="md:text-md lg:text-xl md:mb-8 lg:mb-12 mb-6 text-sm">
              where understanding meets support. 
              Embrace a journey of self-discovery and well-being, because your mental health matters
              </p>
              <a
                href="#discover"
                className="bg-fuchsia-900 text-white py-2 px-6 md:py-4 md:px-12 rounded-full hover:bg-fuchsia-800 transition duration-300 ease-in-out"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  
  );
};

export default Hero;