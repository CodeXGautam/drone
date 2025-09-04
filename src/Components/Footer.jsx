// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-9 px-0">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {/* About */}
          <div>
            <h2 className="text-lg font-bold mb-3">Drone4S Lab</h2>
            <ul className="space-y-1 text-base">
              <li>
                <p>Drone for Susatainability</p>
              </li>
              {/* <li>
                                <a
                                    href="https://alumni.iitr.ac.in/contactus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Contact Us
                                </a>
                            </li> */}
            </ul>
          </div>

          {/* Dean's Corner */}
          <div>
            <h2 className="text-lg font-bold mb-3">Quick Links</h2>
            <ul className="space-y-1 text-base">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="https://www.americanexpress.com/en-in/">
                  Sponsered by AMEX
                </a>
              </li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h2 className="text-lg font-bold mb-3">Contact Info</h2>
            <ul className="space-y-1 text-base">
              <li>
                Email:{" "}
                <a
                  href="mailto:droneiitr.lab@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  droneiitr.lab@gmail.com
                </a>
              </li>
              <li>Phone : +91 9391125740</li>
              <li>Address : Drone4S Lab, Geospatial Building, IITR</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-blue-950 pt-2 pb-2 text-center text-base text-slate-100 opacity-90">
        © 2025 Drone4S Lab, IIT Roorkee.
      </div>
      <div className="bg-blue-950 pt-2 pb-2 text-center text-base text-slate-100 opacity-90">
        Developed By : Harsh & Puneet
      </div>
    </footer>
  );
};

export default Footer;
