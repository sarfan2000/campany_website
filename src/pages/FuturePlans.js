import React from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Target, Zap, ChevronRight } from "lucide-react";
import Fp1 from "../assets/fp1.jpg";
import Fp2 from "../assets/fp2.jpg";
import Fp3 from "../assets/fp3.jpg";

export default function FuturePlans() {
  const plans = [
    {
      icon: <Lightbulb className="h-12 w-12 text-purple-400" />,
      title: "Robotics Research and Development",
      year: "2025",
      description:
        "Exploring cutting-edge technologies to enhance automation and efficiency across various industries.",
      image: Fp1,
      goals: ["AI Research Lab", "Robotics Innovation", "Automation Solutions"],
    },
    {
      icon: <Target className="h-12 w-12 text-purple-400" />,
      title: "Innovation Agriculture Technology",
      year: "2026",
      description:
        "Developing smart agricultural solutions for sustainable farming and improved crop yields.",
      image: Fp2,
      goals: ["Smart Farming", "Crop Monitoring", "Resource Optimization"],
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-400" />,
      title: "Research on New Technologies Using Renewable Energy",
      year: "2027",
      description:
        "Pioneering sustainable technology solutions powered by renewable energy sources.",
      image: Fp3,
      goals: ["Solar Integration", "Energy Storage", "Green Computing"],
    },
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <div className="bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 pt-52 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
            Flego Innovation | Future Plans
          </h1>
          <div className="flex items-center text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Future Plans</span>
          </div>
        </div>
      </div>

      {/* Future Plans Overview */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">Future Plans</h2>
            <p className="text-gray-300">
              Stay informed about our blogs, it's highly unlikely that they will
              stay up to date. This will be the latest blog from 2023 when it's
              already 2026, feel free to read our outdated blogs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 stagger-animation">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-purple-900/50 p-3 rounded-xl mr-4">
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {plan.title}
                        </h3>
                        <span className="text-purple-400">
                          Target: {plan.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-purple-400">
                        Key Objectives
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {plan.goals.map((goal, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
