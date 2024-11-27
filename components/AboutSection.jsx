import React from "react";

const AboutSection = () => {
  return (
    <div className="container mx-auto my-12 px-6 lg:px-12 flex flex-wrap lg:flex-nowrap items-center gap-12">
      {/* Text Section */}
      <div className="lg:w-1/2 bg-blue-50 p-8 rounded-lg shadow-md">
        <h4 className="text-blue-500 text-lg font-semibold mb-2">WHO WE ARE</h4>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Office of Career Services
        </h2>
        <p className="text-gray-700 leading-relaxed">
          IIT Delhi's Office of Career Services (OCS) is a facilitating body
          conducting training and placement activities for the brightest young
          minds of the country. IIT Delhi believes in creating professionals
          with a sense of integrity, awareness & excellence. We are committed
          to bridging the gap between these students and the world outside
          their campus to help them pursue their dreams. Apart from providing
          job and internship opportunities, OCS also offers guidance to
          students to shape their careers through various workshops and
          industrial tours.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/images/alumni.jpg" // Replace with your image path
          alt="Group of Students"
          className="rounded-lg shadow-lg w-full lg:w-4/5"
        />
      </div>
    </div>
  );
};

export default AboutSection;
