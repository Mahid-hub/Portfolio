import React from "react";
import NavBar from "./components/NavBar";

function Home() {
  return (
    <>
      <div>
        <NavBar logo="M" name="Mahid" bgClr="bg-gray-200" />

        <div className="bg-gray-50 px-8 py-16 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Hello, I'm <br />{" "}
                <span className="leading-loose">Mahid Wasif</span>
              </h1>
              <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                I'm a <span className="font-semibold">UI/UX Designer</span> and{" "}
                <span className="font-semibold">Developer</span>
                based in Lahore, Pakistan. I strive to build immersive and
                beautiful web applications through carefully crafted code and
                user-centric design.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
                <a
                  href="mailto:mahidwasif2004@gmail.com"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
                >
                  Say Hello!
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center">
              <img
                src="/img/MyImage.jpg"
                alt="MyImage"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
