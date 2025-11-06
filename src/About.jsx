import React from "react";
// import NavBar from "./components/NavBar";

function About() {
  return (
    <>
      {/* <NavBar logo="M" name="Mahid" bgClr="bg-gray-200" /> */}
      <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-16 md:px-20 lg:px-32">
        {/* Main Heading */}
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-900">
          About Me
        </h1>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Who I Am */}
          <section className="bg-white p-10 rounded-3xl shadow-lg xl:hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-6">
              Who I Am
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Hi, I’m <span className="font-bold text-gray-900">Mahid Wasif</span>
              , a passionate UI/UX Frontend Developer based in
              Lahore, Pakistan. I specialize in creating user-friendly,
              responsive, and visually appealing websites that provide seamless
              experiences.
            </p>
          </section>

          {/* What I Do */}
          <section className="bg-white p-10 rounded-3xl shadow-lg xl:hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-6">
              What I Do
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                <span className="font-bold text-gray-900">
                  Frontend Development –
                </span>{" "}
                Bringing ideas to life using React.js, Tailwind CSS, HTML, CSS,
                and JavaScript.
              </li>
              <li>
                <span className="font-bold text-gray-900">
                  Responsive Web Design –
                </span>{" "}
                Ensuring designs adapt smoothly across all devices and screen
                sizes.
              </li>
              <li>
                <span className="font-bold text-gray-900">
                  Performance & Accessibility –
                </span>{" "}
                Delivering fast, optimized, and inclusive digital experiences.
              </li>
            </ul>
          </section>

          {/* My Approach */}
          <section className="bg-white p-10 rounded-3xl shadow-lg xl:hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-6">
              My Approach
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I believe that design is not just about how something looks, but how
              it works. Every project I take is guided by core principles:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
              <li>
                <span className="font-bold text-gray-900">
                  User-Centered Thinking –
                </span>{" "}
                Putting the end-user first.
              </li>
              <li>
                <span className="font-bold text-gray-900">
                  Attention to Detail –
                </span>{" "}
                Crafting interfaces with precision and care.
              </li>
              <li>
                <span className="font-bold text-gray-900">
                  Continuous Learning –
                </span>{" "}
                Staying updated with the latest design and development trends.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
