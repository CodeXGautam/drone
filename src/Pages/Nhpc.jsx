import React from "react";
import ImageShowcase from "../Components/ImageShowcase";
import EventsSection from "../Components/EventsSectionCopy";
import { div } from "framer-motion/client";

const Nhpc = () => {
  const events = [
    {
      id: 1,
      title: "Village Beladi-Salhapur, Haridwar, Uttarakhand",
      // spon: "",
      image: `${process.env.PUBLIC_URL}/drone_agri.jpg`,
      link:"/american-express"
    },
    {
      id: 2,
      title: "Village Meerpur, Haridwar, Uttarakhand",
      spon: "Sponsor by : NHPC Limited",
      image: `${process.env.PUBLIC_URL}/sus_dev.jpg`,
      link:"/nhpc"
    }
  ];
  return (
    <div>
      <ImageShowcase />
      <EventsSection />
      <section className="bg-gray-100 py-12">
        <h2 className="text-5xl font-extrabold text-gray-400 text-center mb-10">
          Event at IITR
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-1 gap-8 max-w-7xl mx-auto h-[400px] px-6 z-1000">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.link || "#"} // Default '#' agar link na ho
              target="_blank" // Optional: link new tab mein khule
              rel="noopener noreferrer" // Security ke liye jab target="_blank" ho
              className="relative bg-white shadow-md rounded-md overflow-hidden text-center hover:shadow-lg transition"
            >
              {/* Image as background */}
              <img
                src={event.image || `${process.env.PUBLIC_URL}/default-event.png`}
                alt={event.title}
                onError={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/default-event.png`)}
                className="w-full h-full object-cover absolute inset-0"
              />

              {/* Overlay */}
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
            </a>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <h2 className="text-5xl font-extrabold text-gray-400 text-center mb-10">
          Contribution
        </h2>
        <ul>
          <li>Smample 1</li>
          <li>Smample 2</li>
          <li>Smample 3</li>
          <li>Smample 4</li>
          <li>Smample 5</li>
          <li>Smample 6</li>
        </ul>
        </section>
        {/* <div className="bg-gray-800 text-white text-center p-6">
          <p>Implemented by 
            <img src="/iitr_.svg" alt="" className="justify-center"/>
          </p>
          <p>भारतीय प्रौद्योगिकी संस्थान रुड़की</p>
          <p>Indian Institute of Technology, Roorkee</p>
        </div> */}
        <div className="bg-gray-800 text-white text-center p-6">
  <p>Implemented by</p>
  <div className="flex justify-center w-32 mx-auto">
    <img src={`${process.env.PUBLIC_URL}/iitr_.svg`} alt="IITR Logo" className=""/>
  </div>
  <p>भारतीय प्रौद्योगिकी संस्थान रुड़की</p>
  <p>Indian Institute of Technology, Roorkee</p>
</div>

    </div>
  );
};

export default Nhpc;
