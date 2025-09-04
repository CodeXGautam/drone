import React from "react";

const EventsSection = () => {
    const events = [
        {
            id: 1,
            title: "Drone Technology",
            image: "",
        },
        {
            id: 2,
            title: "Research and Development",
            image: "",
        },
        {
            id: 3,
            title: "Internship & Events",
            image: "",
        },
        {
            id: 4,
            title: "Awareness Programs",
            image: "",
        },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <h2 className="text-5xl font-extrabold text-gray-400 text-center mb-10">
                Our Expertise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white shadow-md rounded-md text-center hover:shadow-lg transition flex flex-col justify-between"
                    >
                        {/* Title */}
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-[#1f2a44] border-b border-gray-300 inline-block pb-1">
                                {event.title}
                            </h3>
                        </div>

                        {/* Image Section */}
                        <div className="w-full h-56 bg-white flex items-center justify-center rounded-b-md overflow-hidden">
                            <img
                                src={event.image || `${process.env.PUBLIC_URL}/default-event.png`}
                                alt={event.title}
                                onError={(e) =>
                                    (e.currentTarget.src = `${process.env.PUBLIC_URL}/default-event.png`)
                                }
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventsSection;
