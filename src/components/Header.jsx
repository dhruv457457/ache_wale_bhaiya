import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  const [festName, setFestName] = useState("Adhar");
  const [fade, setFade] = useState(true); // State to manage fading effect

  // Animation for fest name change every 3 seconds with fade effect
  useEffect(() => {
    const names = ["Aadhar", "Udaan", "Zircon"];
    let index = 0;
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        index = (index + 1) % names.length;
        setFestName(names[index]); // Update fest name
        setFade(true); // Start fading in
      }, 500); // 500ms for fading out before changing text
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <div
                className={`transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {festName}
              </div>{" "}
              Tech Fest Essentials
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Get all your essential components for {festName}, our college tech
              fest, including stationery like drafters, sheet holders, and more.
              Equip yourself for success and stand out at the fest!
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {/* Image group */}
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {/* Clickable and hover effect on images */}
                      <Link to="/category">
                        <div className="h-64 w-44 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                          <img
                            alt=""
                            src="https://ideogram.ai/assets/image/lossless/response/zwY8uw6FSwS7aPU5WdzBvQ"
                            className="h-full w-full object-cover object-center transition-transform duration-300"
                          />
                        </div>
                      </Link>
                      <Link to="/category">
                        <div className="h-64 w-44 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                          <img
                            alt=""
                            src="https://ideogram.ai/assets/image/lossless/response/TkKQ4ZsdQJqbKflTHFZaOg"
                            className="h-full w-full object-cover object-center transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    </div>

                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <Link to="/category">
                        <div className="h-64 w-44 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                          <img
                            alt=""
                            src="https://ideogram.ai/assets/image/lossless/response/xPjOgNMZSfKFKWkqIzedAA"
                            className="h-full w-full object-cover object-center transition-transform duration-300"
                          />
                        </div>
                      </Link>
                      <Link to="/category">
                        <div className="h-64 w-44 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                          <img
                            alt=""
                            src="https://ideogram.ai/assets/progressive-image/balanced/response/_-Vf9kqjR1uMznxKU5zxRQ"
                            className="h-full w-full object-cover object-center transition-transform duration-300"
                          />
                        </div>
                      </Link>
                      <Link to="/category">
                        <div className="h-64 w-44 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                          <img
                            alt=""
                            src="https://ideogram.ai/assets/progressive-image/balanced/response/2yvxjWHnR-iaBZdljr1V3g"
                            className="h-full w-full object-cover object-center transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    </div>

                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <Link to="/category">
                        <div className="h-64 w-44 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                          <img
                            alt=""
                            src="https://ideogram.ai/assets/progressive-image/balanced/response/BuyJDCf2SxOKaAi0JMM2Ug"
                            className="h-full w-full object-cover object-center transition-transform duration-300"
                          />
                        </div>
                      </Link>
                      <Link to="/category">
                        <div className="h-64 w-44 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                          <img
                            alt=""
                            src="https://ideogram.ai/assets/progressive-image/balanced/response/hs_E43FVTye7TcbHd_4P6A"
                            className="h-full w-full object-cover object-center transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Correct usage of Link component */}
              <Link to="/category">
                <span className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                  Shop Collection
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
