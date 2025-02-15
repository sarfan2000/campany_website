import React from "react";
import { Link } from "react-router-dom";
import { Settings, Cloud, Shield, Database, ChevronRight } from "lucide-react";
import S1 from "../assets/s1.jpg";
import S2 from "../assets/s2.jpg";
import S3 from "../assets/s3.jpg";
import S4 from "../assets/s4.jpg";

export default function Services() {
  const services = [
    {
      icon: <Settings className="h-12 w-12 text-purple-400" />,
      title: "Custom Software Development",
      description:
        "Flego Innovation specializes in crafting bespoke software solutions to address the unique challenges of businesses. From conceptualization to deployment, our team collaborates closely with clients to develop scalable, secure, and intuitive software applications that drive efficiency and innovation.",
      image: S1,
    },
    {
      icon: <Cloud className="h-12 w-12 text-purple-400" />,
      title: "Mobile App Development",
      description:
        "Flego Innovation excels in creating dynamic mobile applications that captivate audiences and elevate user experiences. Whether it's iOS, Android, or cross-platform development, we leverage cutting-edge technologies to deliver seamless and feature-rich apps that resonate with users and achieve your business objectives.",
      image: S2,
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-400" />,
      title: "Web Development",
      description:
        "Flego Innovation delivers captivating web solutions tailored to your brand's identity and objectives. Our expertise in front-end design, back-end development, and content management ensures that your website not only attracts visitors but also converts them into loyal customers.",
      image: S3,
    },
    {
      icon: <Database className="h-12 w-12 text-purple-400" />,
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with our advanced analytics services. We help businesses make data-driven decisions through comprehensive analysis and visualization solutions.",
      image: S4,
    },
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <div className="bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 pt-52 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
            Flego Innovation | Services
          </h1>
          <div className="flex items-center text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Services</span>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-gray-300">
              We offer a comprehensive range of software solutions to propel
              your business forward. From custom software development and web
              application design to mobile app development and IT consulting,
              our team is committed to delivering high-quality, tailored
              solutions that address your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-lg animate-image w-full h-[500px] object-cover mb-6"
                  />
                </div>{" "}
                <div className="bg-purple-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
