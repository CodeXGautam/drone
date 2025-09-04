import React from 'react'
import { ChevronRight } from "lucide-react";

const DoraMessage = () => {
  return (
    <div className="w-full">
      

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
          <p>
            Dear Alumni,
          </p>
          <p>
            Greetings from your Alma Mater!
          </p>
          <p>
            The mission of the DORA Office is to foster and strengthen the bond between alumni, students, and the institute which forms a “golden triangle”. Please browse through the DORA Office <a href="https://alumni.iitr.ac.in/home" className="text-blue-600">website</a> and learn about various <a href="https://alumni.iitr.ac.in/donate/avenue" className="text-blue-600">avenues</a> of institute-alumni connect. In addition, there are also a number of schemes available to promote excellence among students, faculty, and departments. You may choose one or more ways to connect with your alma mater and help it progress and built upon the strong foundation of 175 years.
          </p>
          <p>
            We at IIT Roorkee would be extremely delighted to have you in the campus.  Please do make it convenient to visit your alma mater any time you wish to cherish the golden memories from your stay in the campus. The DORA office would be more than happy to help you have a comfortable stay in the campus.
          </p>
          <p>
           If you have any queries, please feel free to contact us by email (dora.office@iitr.ac.in).
          </p>
          <p>
            Yours truly, <br /><br />
            Prof. Rahul Dev Garg <br />
            Dean of Resources & Alumni Affairs <br />
            India Institute of Technology Roorkee <br />
            Email:<a href="mailto:dora.office@iitr.ac.in" className="text-blue-600 hover:underline">
    dora.office@iitr.ac.in
  </a>; 
  <a href="mailto:dora@iitr.ac.in" className="text-blue-600 hover:underline">
    dora@iitr.ac.in
  </a> 
  <br />
  Website: 
  <a href="https://alumni.iitr.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
    https://alumni.iitr.ac.in
  </a>
          </p>
        </div>

        {/* Right Column - Important Links */}
        <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Important Links</h2>
          <ul className="space-y-3">
            {[
              { label: "About DORA", href: "/about-dora" },
              { label: "IITR Home", href: "https://www.iitr.ac.in/" },
              // { label: "Message to DORA", href: "#" },
              { label: "DORA Team", href: "/dora-staff" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 border-b border-white/20 hover:text-yellow-300 transition"
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
};


export default DoraMessage