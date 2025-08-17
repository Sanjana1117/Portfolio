import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Replace these with your actual EmailJS IDs from the dashboard
  const SERVICE_ID = "service_47sylsc";
  const TEMPLATE_ID = "template_f0gbd7g";
  const USER_ID = "7PXDt3DwcwMqtHf5Q"; // Public key

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      })
      .catch((error) => {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS error:", error);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
    >
      {/* Background colorful blobs */}
      <div className="absolute -top-36 -left-36 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-72 h-72 bg-gradient-to-tr from-pink-500/20 to-cyan-400/20 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-64 h-64 bg-gradient-to-br from-green-400/10 via-cyan-400/20 to-pink-300/10 rounded-full blur-2xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Get In{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div className="space-y-10 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect!
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities,
                collaborating on projects, or just having a conversation about
                technology and innovation. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "sanjanacx117@gmail.com",
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "+91 70108 54923",
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Chennai, Tamil Nadu, India",
                },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center space-x-6 rounded-xl p-4 bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm shadow-md transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={26} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{label}</h4>
                    <p className="text-gray-400">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View Resume */}
            <div>
              <a
                href="/Sanjana.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-tr from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-green-400/70 border border-green-700"
              >
                <Download size={22} />
                View Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="about-card bg-slate-800/70 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/60 shadow-2xl transition-all duration-300 hover:shadow-purple-500/50 hover:border-purple-500">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                {
                  id: "name",
                  label: "Your Name",
                  type: "text",
                  placeholder: "Enter your name",
                  name: "name",
                  value: formData.name,
                },
                {
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "Enter your email",
                  name: "email",
                  value: formData.email,
                },
                {
                  id: "subject",
                  label: "Subject",
                  type: "text",
                  placeholder: "What's this about?",
                  name: "subject",
                  value: formData.subject,
                },
              ].map(({ id, label, type, placeholder, name, value }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-gray-300 font-medium mb-2"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    className="w-full px-5 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  className="w-full px-5 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-tr from-purple-600 to-purple-800 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <Send size={22} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Styling for about-card container and hover pop */}
      <style>{`
        .about-card {
          border-radius: 1.5rem;
          transition-property: box-shadow, border, transform;
          transition-timing-function: cubic-bezier(.16,1,.32,1);
          transition-duration: 0.3s;
        }
        .about-card:hover {
          box-shadow: 0 12px 50px 8px rgba(139, 92, 246, 0.5);
          border-color: rgba(139, 92, 246, 0.8);
          transform: translateY(-8px);
          z-index: 20;
        }
      `}</style>
    </section>
  );
};

export default Contact;
