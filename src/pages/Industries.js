import React from "react";
import { Codesandbox, TabletSmartphone, AppWindow } from "lucide-react";
import Software from "../assets/Software.jpg";
import Mobile from "../assets/mobile.jpg";
import Web from "../assets/webde.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Codesandbox className="h-12 w-12 text-purple-400" />,
      title: "Software Development",
      description:
        "At Flego Innovation, we specialize in custom software development tailored to meet the unique needs of your business. Whether you're looking to streamline internal processes, enhance customer experiences, or launch a new digital product, our team of expert developers is here to turn your ideas into reality.",
      features: [
        "From initial concept to final deployment, we provide end-to-end solutions that are scalable, secure, and user-friendly.",
      ],
      image: Software,
    },
    {
      icon: <TabletSmartphone className="h-12 w-12 text-purple-400" />,
      title: "Mobile App Development",
      description:
        "In today's mobile-driven world, having a presence on smartphones and tablets is essential for reaching and engaging with your target audience. Flego Innovation offers comprehensive mobile app development services, spanning across iOS, Android, and cross-platform technologies.",
      features: [
        "Whether you need a native app built from scratch or want to optimize your existing application for mobile devices, our experienced team will work closely with you to deliver high-quality solutions that drive results.",
      ],
      image: Mobile,
    },
    {
      icon: <AppWindow className="h-12 w-12 text-purple-400" />,
      title: "Web Development",
      description:
        "Your website is often the first point of contact between your business and potential customers. At Flego Innovation, we understand the importance of creating a visually appealing, responsive, and functional website that not only attracts visitors but also converts them into loyal customers.",
      features: [
        "Our web development services encompass everything from front-end design and user experience optimization to back-end integration and content management systems. Whether you're launching a new site or revamping an existing one, we have the expertise to bring your vision to life on the web.",
      ],
      image: Web,
    },
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <div className="bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 pt-52 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
            Flego innovation | Industries
          </h1>
          <div className="flex items-center text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Industries</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Industries
          </h1>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div>
                  <div className="mb-6">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <div className="space-y-2 mb-6">
                    {industry.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="rounded-xl shadow-lg animate-image animate-live"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
