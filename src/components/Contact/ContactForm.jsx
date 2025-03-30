import React from "react";
import { Mail, Send, User, FileText, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="bg-blue-900 text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let’s Create Together</h2>
            <p className="text-blue-100 text-lg mb-10">
              Have a big idea or brand to develop? We’re excited to hear about
              your project and help bring it to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 w-12 h-12 flex items-center justify-center rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <a
                    href="mailto:info@example.com"
                    className="text-white font-medium hover:underline"
                  >
                    info@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 w-12 h-12 flex items-center justify-center rounded-full">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Live Chat</p>
                  <a
                    href="#"
                    className="text-white font-medium hover:underline"
                  >
                    Start a conversation
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-blue-200 mt-10 border-t border-blue-800 pt-6">
            We typically respond within 24 hours during business days.
          </p>
        </div>

        <div className="p-8 md:p-12 md:w-3/5">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a message
          </h3>

          <form className="space-y-6">
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Subject
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 text-white font-medium hover:bg-yellow-500 flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
