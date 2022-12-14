import React from 'react';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            // style={{ backgroundImage: `url(${})` }}
            className='shadow-lg shadow-[#040c16] group container bg-blue-500 rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */} 
            {/* <div className='opacity-0 group-hover:opacity-100'> */}
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                Netflix Clone
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/rathi710/netflix-clone'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              {/* </div> */}
            </div>
          </div>




          <div
            // style={{ backgroundImage: `url(${})` }}
            className='shadow-lg shadow-[#040c16] group container bg-blue-500 rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'> */}
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                Shoes Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://rathi710.github.io/myShoes/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/rathi710/myShoes'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            {/* </div> */}
          </div>


            {/* Grid Item */}
          <div
            // style={{ backgroundImage: `url(${})` }}
            className='shadow-lg shadow-[#040c16] group container bg-blue-500 rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'> */}
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                Web Chat Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://wechat-b4a7b.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/rathi710/wechat'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            {/* </div> */}
          </div>


          <div
            // style={{ backgroundImage: `url(${})` }}
            className='shadow-lg shadow-[#040c16] group container bg-blue-500 rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'> */}
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                Food Delivery Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://rathi710.github.io/food-delivery-web/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/rathi710/food-delivery-web'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            {/* </div> */}
          </div>

          <div
            // style={{ backgroundImage: `url(${})` }}
            className='shadow-lg shadow-[#040c16] group container bg-blue-500 rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'> */}
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                Gym Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://rathi710.github.io/Gym-website/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/rathi710/Gym-website'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            {/* </div> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;