import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import Hom from "../assets/home.webp";
import Hom2 from "../assets/hero1.jpg";
import Hom3 from "../assets/hero2.jpg";
import Hom4 from "../assets/hero3.jpeg";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(Hom);
  const imageIndex = useRef(0);

  const images = useMemo(() => [Hom, Hom2, Hom3, Hom4], []);

  useEffect(() => {
    setIsVisible(true);

    const timer = setInterval(() => {
      imageIndex.current = (imageIndex.current + 1) % images.length;
      setBackgroundImage(images[imageIndex.current]);
    }, 2000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [images]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with reduced brightness */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: "brightness(0.3)",
          }}
        />

        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80" />

        <div className="relative container mx-auto px-6">
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in">
              Flego Innovation
            </h1>
            <p
              className="text-lg sm:text-xl text-gray-300 mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              We harness the power of cutting-edge technology to innovate and
              streamline solutions for businesses worldwide.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center stagger-animation">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About Us
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  At Flego Innovation, we're not just a tech company. We're
                  innovators with a vision to redefine the way people interact
                  with technology.
                </p>
                <p>
                  Our mission is to enhance the power of innovation and
                  technology to enrich lives and create a sustainable world to
                  live in.
                </p>
                <p>
                  Our vision is to be a leading innovative software company and
                  progress in our current position in the market. We believe
                  that our stakeholders' growth is our growth, and we are
                  committed to helping them achieve their goals.
                </p>
                <p>
                  At Flego, we are passionate about leveraging the latest
                  advancements in technology to solve real-world problems and
                  make a positive impact on society. With a focus on innovation,
                  reliability, and user-friendliness, we aim to exceed
                  expectations and set new standards in the industry.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
                >
                  Find Out More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-in">
            Services
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl animate-fade-in">
            We offer a comprehensive range of software solutions to propel your
            business forward. From custom software development and web
            application design to mobile app development and IT consulting, our
            team is committed to delivering high-quality, tailored solutions
            that address your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Software Development
              </h3>
              <p className="text-gray-300">
                Flego Innovation specializes in crafting bespoke software
                solutions to address the unique challenges of businesses. From
                conceptualization to deployment, our team collaborates closely
                with clients to develop scalable, secure, and intuitive software
                applications.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Mobile App Development
              </h3>
              <p className="text-gray-300">
                Flego Innovation excels in creating dynamic mobile applications
                that captivate audiences and elevate user experiences. Whether
                it's iOS, Android, or cross-platform development, we leverage
                cutting-edge technologies to deliver seamless apps.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Web Development
              </h3>
              <p className="text-gray-300">
                Flego Innovation delivers captivating web solutions tailored to
                your brand's identity and objectives. Our expertise ensures that
                your website not only attracts visitors but also converts them
                into loyal customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Future Plans
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl">
            We're committed to shaping the future through pioneering research
            and development initiatives. Our focus areas include Robotics
            Research and Development, where we explore cutting-edge technologies
            to enhance automation and efficiency across various industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                alt="Robotics Research"
                className="rounded-2xl h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Robotics Research and Development
                </h3>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80&w=800"
                alt="Agriculture Technology"
                className="rounded-2xl h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Innovation Agriculture Technology
                </h3>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
                alt="Renewable Energy"
                className="rounded-2xl h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Research on New Technologies Using Renewable Energy
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Our Projects On Last Months
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&q=80&w=800"
                alt="Ko Sri Solutions"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ko Sri Solutions
                </h3>
                <p className="text-gray-300">
                  Ko Sri Solutions specializes in logistics services bridging
                  Korea and Sri Lanka. With a profound understanding of both
                  markets, they offer customized solutions for efficient
                  transportation of goods between these two countries.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Business Management System"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Business Management System
                </h3>
                <p className="text-gray-300">
                  Step into the future of business management with Lanka Bill -
                  your ultimate solution for seamless operations and soaring
                  success. This cutting-edge platform manages invoices, sales,
                  payments and everything to manage your business.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
                alt="A/L Helper"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  A/L Helper
                </h3>
                <p className="text-gray-300">
                  Dive into the world of exam preparation with confidence, as
                  A/L Helper revolutionizes the way you study for your A/L
                  exams. Generate complete, authentic papers featuring MCQs,
                  structured, and essay questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Subscribe for latest updates
            </h2>
            <form className="flex gap-4 flex-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center"
              >
                Subscribe
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Reach us
            </h2>
            <p className="text-gray-300 mb-8">
              Ready to transform your ideas into reality? Our team of experts is
              here to help you achieve your technological goals. Let's create
              something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
