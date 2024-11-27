import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/images/iust.webp')" }} // Replace with your actual image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col items-center text-center gap-8 p-3">
        {/* Logo */}
        <div>
          <img
            src="/images/1.svg" // Replace with your 3CP logo
            alt="3CP Logo"
            className="h-90 w-auto"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:placement@admin.iitd.ac.in"
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white px-6 py-3  shadow-md transition"
          >
            <span>Email Us</span>
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="tel:01126591731"
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white px-6 py-3 shadow-md transition"
          >
            <span>Call Us</span>
            <i className="fas fa-phone"></i>
          </a>
          <a
            href="#notification-app"
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3  shadow-md transition"
          >
            Notification App
            <i className="fas fa-arrow-right"></i>
          </a>
          <a
            href="#ios-app"
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 shadow-md transition"
          >
            iOS Notification App
            <i className="fas fa-cloud"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
