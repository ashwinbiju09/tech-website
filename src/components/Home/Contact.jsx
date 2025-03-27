import React from "react";
import { Mail, Send, User, FileText, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative z-20 py-20 px-4 ">
      <h2 className="text-4xl font-semibold tracking-wide md:text-[50px] md:font-[700] pb-4 md:tracking-[-2px] text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-950 to-blue-900">
        We are here to help you{" "}
      </h2>
      <div className="max-w-6xl mx-auto overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className=" text-blue-800 p-8 md:p-12 md:w-2/5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let’s Create Together</h2>
            <p className="text-black text-lg mb-10">
              Have a big idea or brand to develop? We’re excited to hear about
              your project and help bring it to life.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 w-12 h-12 flex items-center justify-center rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-black">Email</p>
                  <a
                    href="mailto:info@example.com"
                    className="text-black font-medium hover:underline"
                  >
                    info@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="p-8 md:p-12 md:w-3/5">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a message
          </h3>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Subject
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project or inquiry..."
                rows={1}
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-sm bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-2 text-white font-medium hover:bg-yellow-500 flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
