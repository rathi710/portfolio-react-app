import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Vishesh Rathi
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I Develop for the Web.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          A Web Developer with a passion for solving problems and learning new technologies.
        </p>
        <Link
              to="work"
              smooth
              duration={500}
              className=" text-white group border-2 w-fit px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            >
              View Work
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;