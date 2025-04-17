import React, { useRef } from "react";
import { Mail, Send, User, FileText } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/support@arkaglobal.co.uk",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (res.ok) {
        alert("Mail sent!");
        formRef.current.reset();
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong.");
    }
  };
  return (
    <div className="py-20 px-4 bg-midnight text-white">
      <h2 className="text-3xl sm:text-4xl md:text-[45px] font-semibold tracking-wide md:font-[600] py-4 md:tracking-[-2px] text-center text-yellow-400">
        We are here to help you
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Left Info Section */}
        <div className="p-8 md:p-12 md:w-2/5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Let’s Create Together
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Struggling with intricate system integrations, aiming to
              streamline enterprise workflows, or imagining a smarter business
              landscape? We're your bridge from where you are to
              where you want to be.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-0 lg:space-x-4">
                <div className="hidden lg:flex bg-yellow-400 w-12 h-12 items-center justify-center rounded-full">
                  <Mail className="w-5 h-5 text-midnight" />
                </div>
                <div>
                  <p className="text-sm text-white">Email</p>
                  <a
                    href="mailto:info@example.com"
                    className="text-white font-medium hover:underline"
                  >
                    support@arkaglobal.co.uk
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

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for reaching out! We'll get back to you shortly."
            />

            <div>
              <label className="text-sm block mb-1">Your Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  required
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
                  name="email"
                  placeholder="your@email.com"
                  required
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
                  name="subject"
                  placeholder="How can we help you?"
                  required
                  className="w-full pl-12 pr-4 py-2 rounded-sm bg-midnight border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your project or question..."
                rows={4}
                required
                className="w-full p-4 rounded-sm bg-midnight border border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-48 rounded-sm bg-yellow-400 px-6 py-2 text-midnight font-medium hover:bg-yellow-500 flex items-center justify-center space-x-2 transition-colors"
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
