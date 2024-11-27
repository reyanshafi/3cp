import React from "react";

const ValuesSection = () => {
  const values = [
    {
      title: "Students",
      description:
        "IUST nurtures extraordinary talent, empowering students to excel in academics, innovation, and beyond.",
      image: "/images/students.avif", // Replace with appropriate image path
      link: "#",
    },
    {
      title: "Departments",
      description:
        "IUST is home to 20+ disciplines across Engineering, Technology, and Humanities, fostering diverse learning.",
      image: "/images/departments.jpg", // Replace with appropriate image path
      link: "#",
    },
    {
      title: "Research",
      description:
        "Our Research Centre is dedicated to advancing innovation and providing solutions to modern challenges.",
      image: "/images/research.avif", // Replace with appropriate image path
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto my-12 px-6 lg:px-12 text-center">
      <h4 className="text-blue-500 text-lg font-semibold mb-2">OUR VALUES</h4>
      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        Our Students, Departments, and Research
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={value.image}
              alt={value.title}
              className="h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600 mb-4">{value.description}</p>
            <a
              href={value.link}
              className="text-blue-500 font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
