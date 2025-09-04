import React from 'react'
import { ChevronRight } from "lucide-react";

const AboutDora = () => {
  return (
    <div className="w-full">
      

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
          <p>
            Prof. R.D. Garg is a Professor of Civil Engineering at the Indian
            Institute of Technology Roorkee. He also holds the responsibility
            of Dean of Resources and Alumni Affairs (DORA) since 01 May 2023.
            Prof. Rahul Dev Garg, a distinguished academician and expert in
            Geomatics Engineering, has made profound contributions to the
            realm of remote sensing, GIS, and related fields. Holding the
            esteemed position of Professor at the Indian Institute of
            Technology Roorkee (IITR), he has significantly advanced the
            frontiers of geospatial sciences.
          </p>
          <p>
            Prof. Garg’s academic journey is marked by excellence. He earned
            his Ph.D. in Civil Engineering from IIT Roorkee in 2004,
            complementing his foundation in the field. His remarkable
            educational trajectory began with a B.Tech. in Civil Engineering
            and a subsequent M.Tech. in Remote Sensing, both from the
            University of Roorkee, now IIT Roorkee.
          </p>
          <p>
            Throughout his illustrious career, Prof. Garg has garnered
            numerous accolades and awards, testifying to his outstanding
            contributions. Notably, he received the Netherlands Government
            Fellowship for Sandwich Ph.D. in 1998 and the Excellence Award
            from The Institute of Engineers (India) in 2017, among other
            prestigious recognitions.
          </p>
          <p>
            Prof. Garg’s scholarly pursuits extend beyond accolades, as
            evidenced by his extensive journal publications, demonstrating
            his commitment to the dissemination of knowledge and innovative
            research. He has played a pivotal role in advancing geospatial
            technologies, particularly in the fields of land surveying,
            remote sensing, and GIS.
          </p>
          <p>
            His dedication to academia and his pivotal role in shaping the
            future of geomatics engineering make Prof. R.D. Garg a prominent
            figure at IIT Roorkee and a leader in his field, inspiring the
            next generation of geospatial scientists and engineers.
          </p>
          <p>
            As DORA, Prof. R.D. Garg is dedicated to improve and strengthen
            the institutional support system for alumni engagement.
          </p>
        </div>

        {/* Right Column - Important Links */}
        <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Important Links</h2>
          <ul className="space-y-3">
            {[
            //   { label: "About DORA", href: "/about-dora" },
              { label: "IITR Home", href: "https://www.iitr.ac.in/" },
              { label: "Message Form DORA", href: "/message-dora" },
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


export default AboutDora