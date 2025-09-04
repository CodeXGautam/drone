import React, { useState } from "react";

const EventsSection = () => {
    const [showModal, setShowModal] = useState(false);

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

    const handleClick = (eventId) => {
        if (eventId === 3) {
            setShowModal(true);
        }
    };

    return (
        <>
            <section className="bg-gray-100 py-12">
                <h2 className="text-5xl font-extrabold text-gray-400 text-center mb-10">
                    Our Expertise
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className={`bg-white shadow-md rounded-md text-center hover:shadow-lg transition flex flex-col justify-between ${
                                event.id === 3 ? 'cursor-pointer' : ''
                            }`}
                            onClick={() => handleClick(event.id)}
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

            {/* Modal for ID 3 */}
            {showModal && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowModal(false)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full w-8 h-8 flex items-center justify-center z-10 transition-colors"
                        >
                            ✕
                        </button>
                        
                        {/* Image */}
                        <img
                            src={`${process.env.PUBLIC_URL}/internship.jpeg`}
                            alt="Internship & Events - Training and Upskilling"
                            className="w-full h-auto max-h-[85vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                        
                    
                    </div>
                </div>
            )}
        </>
    );
};

export default EventsSection;
