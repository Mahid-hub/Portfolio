import React from "react";

function Contact() {
  return (<section className="bg-gray-50 flex flex-col items-center justify-center px-6 py-10">
    {/* Heading */}
    <h1 className="text-6xl font-bold text-black mb-4 text-center">Contact Me</h1>
    <a
      href="mailto:mahidwasif2004@gmail.com"
      className="text-4xl font-semibold text-blue-600 mb-3 hover:underline"
    >
      mahidwasif2004@gmail.com
    </a>
    <p className="text-gray-600 mb-12 text-center">
      Feel free to contact me with any inquiries or questions!
    </p>

    {/* Form */}
    <form
      action="#"
      method="POST"
      className="w-full max-w-4xl flex flex-col gap-10"
    >
      {/* Name + Email */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col w-full">
          <label className="text-blue-600 text-lg mb-1">Name</label>
          <input
            type="text"
            className="border-b-2 border-blue-600 bg-transparent outline-none text-lg py-2"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-blue-600 text-lg mb-1">Email Address</label>
          <input
            type="email"
            className="border-b-2 border-blue-600 bg-transparent outline-none text-lg py-2"
            required
          />
        </div>
      </div>

      {/* Message */}
      <textarea
        className="border-b-2 border-blue-600 bg-transparent outline-none text-lg py-2 h-32"
        required
        placeholder="Message"
      ></textarea>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="border-2 border-blue-600 text-blue-600 px-12 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
        >
          Submit
        </button>
      </div>
    </form>
  </section>
  )
}

export default Contact;
