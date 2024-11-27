import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Office Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Office of Career Services</h3>
          <p>
            1-University Avenue, Awantipora,
            <br />
            Pulwama, Jammu and Kashmir
            <br />
            Pin: 192122
          </p>
          <p className="mt-4">
            Phone: +91 (01933) 247954 / 247955
            <br />
            Email:{" "}
            <a
              href="mailto:info@islamicuniversity.edu.in"
              className="text-blue-400 hover:underline"
            >
              info@islamicuniversity.edu.in
            </a>
          </p>
          {/* Social Media */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h3 className="text-lg font-bold mb-4">Amenities</h3>
          <ul className="space-y-2">
            {["Hostel", "Banking Facility", "Guest House", "Transport Services", "Medical Facilities", "Sports"].map(
              (item, index) => (
                <li key={index} className="hover:text-blue-400 transition">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {[
              "Phone Directory",
              "Career Counselling",
              "Forms & Proforma",
              "e-Scholarship Portal",
              "Alumni",
              "Procurement Manual",
              "Shodhganga@INFLIBNET",
              "National Digital Library",
              "GIAN Portal",
              "Vidya Lakshmi Portal",
            ].map((link, index) => (
              <li key={index} className="hover:text-blue-400 transition">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and Map */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>For UG and PG placements:</p>
          <a
            href="mailto:placement@islamicuniversity.edu.in"
            className="text-blue-400 hover:underline"
          >
            placement@islamicuniversity.edu.in
          </a>
          <p className="mt-4">For Internship/Training:</p>
          <a
            href="mailto:internship@islamicuniversity.edu.in"
            className="text-blue-400 hover:underline"
          >
            internship@islamicuniversity.edu.in
          </a>
          <p className="mt-4">For PhD placements:</p>
          <a
            href="mailto:phd_placement@islamicuniversity.edu.in"
            className="text-blue-400 hover:underline"
          >
            phd_placement@islamicuniversity.edu.in
          </a>
          {/* Map */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-gray-300">
        <p>
          Copyright © 2024 <span className="font-bold">Islamic University of Science and Technology</span>. All Rights Reserved.
        </p>
        <p>
          Developed by{" "}
          <a
            href="#"
            className="text-blue-400 hover:underline"
          >
            IUST Technical Team
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
