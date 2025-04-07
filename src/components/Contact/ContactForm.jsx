import React from "react";
import { Mail, Send, User, FileText, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="py-20 px-4 bg-midnight text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Left Info Section */}
        <div className="p-8 md:p-12 md:w-2/5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Let’s Create Together
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Have a big idea or brand to develop? We’re excited to hear about
              your project and help bring it to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white">Email</p>
                  <a
                    href="mailto:info@example.com"
                    className="text-white font-medium hover:underline"
                  >
                    info@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-8 md:p-12 md:w-3/5">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
            Send us a message
          </h3>

          <form className="space-y-6">
            <div>
              <label className="text-sm block mb-1">Your Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full pl-12 pr-4 py-2 rounded-sm bg-midnight border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-2 rounded-sm bg-midnight border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1">Subject</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full pl-12 pr-4 py-2 rounded-sm bg-midnight border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1">Message</label>
              <textarea
                placeholder="Tell us about your enterprise integration needs, challenges, or project vision..."
                rows={4}
                className="w-full p-4 rounded-sm bg-midnight border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-yellow-400 hover:text-midnight px-6 py-2 text-white font-medium hover:bg-yellow-500 flex items-center justify-center space-x-2 transition-colors"
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

export default ContactForm;
