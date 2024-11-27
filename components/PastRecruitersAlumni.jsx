import React from "react";

const PastRecruitersAlumni = () => {
  return (
    <div className="container mx-auto my-12 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Past Recruiters & Alumni
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center">
        {/* Left Image Section */}
        <div className="lg:w-1/2">
          <img
            src="/images/recruiters.png" // Replace with your image path
            alt="Past Recruiters and Alumni"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          {/* Past Recruiters */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <i className="fas fa-layer-group text-blue-500 text-3xl"></i>
              <h3 className="text-xl font-bold text-blue-900">
                Past Recruiters
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Recruiters from some of the best companies in India and across the
              world have trusted the departments and students of IUST to bring
              them to great heights.
            </p>
            <a
              href="#past-recruiters"
              className="inline-block border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              Past Recruiters
            </a>
          </div>

          {/* Alumni */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <i className="fas fa-star text-blue-500 text-3xl"></i>
              <h3 className="text-xl font-bold text-blue-900">Alumni</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Alumni of IUST have excelled and acquired positions of eminence
              across various fields—from Engineering to Finance to Management
              to the Arts. They continue to demonstrate social responsibility
              and contribute to their alma mater.
            </p>
            <a
              href="#our-alumni"
              className="inline-block border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              Our Alumni
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastRecruitersAlumni;
