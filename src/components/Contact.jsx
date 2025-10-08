import React from "react";

function Contact() {
  return (
    <section className="bg-gray-50 flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-12 md:py-20">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 text-center">
        Contact Me
      </h1>

      <a
        href="mailto:mahidwasif2004@gmail.com"
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600 mb-3 hover:underline text-center"
      >
        mahidwasif2004@gmail.com
      </a>

      <p className="text-gray-600 mb-10 text-center max-w-2xl">
        Feel free to contact me with any inquiries or questions!
      </p>

      {/* Form */}
      <form
        action="#"
        method="POST"
        className="w-full max-w-3xl flex flex-col gap-8 sm:gap-10"
      >
        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
          {/* Name Field */}
          <div className="flex flex-col w-full">
            <label className="text-blue-600 text-lg mb-1">Name</label>
            <input
              type="text"
              className="border-b-2 border-blue-600 bg-transparent outline-none text-base sm:text-lg py-2 focus:border-blue-800 transition-all"
              required
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col w-full">
            <label className="text-blue-600 text-lg mb-1">Email Address</label>
            <input
              type="email"
              className="border-b-2 border-blue-600 bg-transparent outline-none text-base sm:text-lg py-2 focus:border-blue-800 transition-all"
              required
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="text-blue-600 text-lg mb-1">Message</label>
          <textarea
            className="border-b-2 border-blue-600 bg-transparent outline-none text-base sm:text-lg py-2 h-32 focus:border-blue-800 transition-all"
            required
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center sm:justify-end">
          <button
            type="submit"
            className="border-2 border-blue-600 text-blue-600 px-10 sm:px-12 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
