import { div } from "framer-motion/client";
import React from "react";

const EventsSection = () => {
  const Container = ({ children, className = "" }) => (
    <div
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
  const events = [
    {
      id: 1,
      title: "Drone Innovation for Sustainability",
      spon: "Sponsor by : American Express",
      image: `${process.env.PUBLIC_URL}/dji3.jpg`,
      link: "/american-express",
    },
    {
      id: 2,
      title:
        "Empowering Rural Communities: Sustainable Planing for Futrue Development in Meerpur and Beladi-Salhapur Villages, Haridwar, Uttarakhand",
      spon: "Sponsor by : NHPC Limited",
      image: `${process.env.PUBLIC_URL}/dji2.webp`,
      link: "/nhpc",
    },
    // {
    //   id: 3,
    //   title: "Alumni Meetup",
    //   image: "",
    // },
    // {
    //   id: 4,
    //   title: "Innovation Summit",
    //   image: "",
    // },
  ];

  return (
    <div>
      <section aria-labelledby="dora-title" className="pt-10 sm:pt-12">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr]">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-md overflow-hidden bg-gray-200">
              {/* Replace with actual image src */}
              <img
                src={`${process.env.PUBLIC_URL}/RD.jpg`}
                alt="Prof. R. D. Garg"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-slate-900 text-xl sm:text-2xl font-semibold leading-snug">
                Prof. R. D. Garg
              </h1>
              <p className="text-sky-700 text-sm sm:text-base font-medium mt-0.5">
                Dean of Resources & Alumni Affairs
              </p>

              <div className="mt-3 space-y-1.5 text-slate-700 text-sm">
                <p>
                  <span className="font-medium">Phone:</span> +91-1332-285840
                </p>
                <p className="break-words">
                  <span className="font-medium">Email:</span> dora@iitr.ac.in,
                  dora@iitr.ac.in
                </p>
              </div>
            </div>
          </div>

          {/* About DORA block */}
          <div className="mt-6 sm:mt-8">
            <div className="rounded-md bg-slate-100">
              <div className="px-4 sm:px-6 py-4 sm:py-5">
                <h2
                  id="dora-title"
                  className="text-slate-900 text-lg font-semibold"
                >
                  About DORA
                </h2>
                <p className="mt-2 text-slate-700 text-sm leading-relaxed">
                  Prof. R.D. Garg is a Professor of Civil Engineering at the
                  Indian Institute of Technology Roorkee. He also holds the
                  responsibility of Dean of Resources and Alumni Affairs (DORA)
                  since July 2023. As DORA, Prof. R.D. Garg is dedicated to
                  improve and strengthen the institute–alumni connect.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-100 py-12">
        <h2 className="text-5xl font-extrabold text-gray-400 text-center mb-10">
          Ongoing Projects
        </h2>

        {/* <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto h-[800px] px-6 z-1000">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative bg-white shadow-md rounded-md overflow-hidden text-center hover:shadow-lg transition"
          >
            <img
              src={event.image || `${process.env.PUBLIC_URL}/default-event.png`}
              alt={event.title}
              onError={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/default-event.png`)}
              className="w-full h-full object-cover absolute inset-0"
            />

            <div className="relative z-10 p-6 bg-black bg-opacity-50 h-full flex items-center justify-left">
              <h3 className="text-2xl font-semibold text-white inline-block pb-1">
                {event.title}
              </h3>
            </div>
            <div className="relative z-10 bg-black bg-opacity-50 flex items-bottom justify-center">
              <h3 className="text-xl font-semibold text-white inline-block pb-1">
                {event.spon}
              </h3>
            </div>
          </div>
        ))}
      </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto h-[400px] px-6 z-1000">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.link || "#"} // Default '#' agar link na ho
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white shadow-md rounded-md overflow-hidden group"
            >
              {/* Background Image */}
              <img
                src={event.image || `${process.env.PUBLIC_URL}/default-event.png`}
                alt={event.title}
                onError={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/default-event.png`)}
                className="w-full h-full object-cover absolute inset-0 z-0 transform group-hover:scale-110 transition-transform duration-300 opacity-55 group-hover:opacity-100"
              />

              {/* Transparent Black Overlay with Centered Content */}
              <div className="hover:scale-105 transition-transform duration-300 absolute inset-0  flex flex-col items-center justify-center text-center p-6 z-9999 opacity-100  bg-opacity-50 group-hover:bg-opacity-70">
                <h3 className="bg-[#DEF2FF] border border- rounded-2xl text-2xl font-semibold text-[#E32E05] mb-2">
                  {event.title}
                </h3>
                <p className="bg-[#DEF2FF] border border- rounded-lg text-2xl font-medium text-[#E32E05]">
                  {event.spon}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsSection;

//  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 z-1000">
//                 {events.map((event) => (
//                     <div
//                         key={event.id}
//                         className="bg-white shadow-md rounded-md text-center hover:shadow-lg transition flex flex-col justify-between"
//                     >

//                         <div className="p-6">
//                             <h3 className="text-lg font-semibold text-[#1f2a44] border-b border-gray-300 inline-block pb-1">
//                                 {event.title}
//                             </h3>
//                         </div>

//                         <div className="w-full h-56 bg-white flex items-center justify-center rounded-b-md overflow-hidden">
//                             <img
//                                 src={event.image || "/default-event.png"}
//                                 alt={event.title}
//                                 onError={(e) =>
//                                     (e.currentTarget.src = "/default-event.png")
//                                 }
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>
