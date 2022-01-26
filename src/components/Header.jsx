import React from 'react';

function Header() {
  return (
    <header className="relative h-64 m-8 overflow-hidden rounded-lg bg-indigo-500">
      <div className="absolute z-30 flex w-full h-full">
        <div className="relative z-30 w-5/7 px-6 py-8 text-white md:py-10 md:w-1/2">
          <h1 className="text-6xl">Star Wars Planets</h1>
          <span />
        </div>
        <div className="absolute top-0 right-0 flex w-full h-full">
          <div className="w-1/6 h-full bg-gray-500" />
          <div className="relative w-1/3">
            <svg
              fill="currentColor"
              viewBox="0 0 100 100"
              className="absolute inset-y-0 z-20 h-full text-gray-500"
            >
              <polygon
                id="diagonal"
                points="0,0 100,0 50,100 0,100"
              />
            </svg>
            <svg
              fill="currentColor"
              viewBox="0 0 100 100"
              className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
            >
              <polygon points="0,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 block w-9/12 h-full">
        <img
          alt="Snowy mountain lake"
          className="object-cover min-w-full h-full"
          src="https://wallpapercave.com/dwp1x/wp3614448.jpg"
        />
      </div>
    </header>
  );
}

export default Header;
