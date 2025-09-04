import React from "react";
import { ArrowRight } from "lucide-react";

const GivingBackSection = () => {
    const itemsTop = [
        { id: 1, title: "Giving Back", description: "Any alumnus or a philanthropist is welcome to join hands with IIT Roorkee to promote excellence by one-time dona", icon: "❤️" },
        { id: 2, title: "Mentorship", description: "Alumni can support students by providing career guidance, networking opportunities, and mentorship.", icon: "🎓" },
        { id: 3, title: "Research Support", description: "Help advance research by contributing resources and industry collaboration opportunities.", icon: "🔬" },
        { id: 4, title: "Community", description: "Stay connected with the IIT Roorkee community and help build stronger alumni relations.", icon: "🤝" },
        { id: 5, title: "Entrepreneurship", description: "Support budding entrepreneurs by offering mentorship and funding opportunities.", icon: "🚀" },
    ];

    const itemsBottom = [
        { id: 1, title: "Innovation", description: "Encourage startups and innovative projects by alumni.", icon: "💡" },
        { id: 2, title: "Scholarships", description: "Support deserving students through scholarships and grants.", icon: "🎖️" },
        { id: 3, title: "Events", description: "Participate in alumni events, seminars, and reunions.", icon: "📅" },
        { id: 4, title: "Networking", description: "Expand your professional connections within the alumni community.", icon: "🌐" },
        { id: 5, title: "Global Outreach", description: "Help expand IIT Roorkee’s footprint through international collaborations.", icon: "🌍" },
    ];

    const Strip = ({ items }) => (
        <div className="w-[1059px] h-[240px] mx-auto flex overflow-visible mb-10 mt-5 bg-gray-100 rounded-lg shadow-md">
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className="relative flex-1 flex items-center justify-center"
                >
                    {/* Divider line (always visible) */}
                    {index !== 0 && (
                        <div className="absolute left-0 top-6 bottom-6 w-px bg-gray-300 pointer-events-none"></div>
                    )}

                    {/* Card with z-index scaling */}
                    <div
                        className="relative w-full h-full px-6 py-6 text-center
                                   transition-all duration-300 transform
                                   group hover:scale-110 hover:z-10
                                   hover:bg-[#1f2a44] hover:text-white z-0 rounded-lg"
                    >
                        {/* Icon */}
                        <div className="text-3xl mb-3 opacity-50 group-hover:opacity-100 transition">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold mb-2 text-blue-950 group-hover:text-white transition-colors duration-300">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs leading-relaxed">{item.description}</p>

                        {/* Action Button (appears on hover) */}
                        <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition">
                            <button className="bg-white text-[#1f2a44] p-2.5 rounded-full shadow-md transition group-hover:scale-110">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="bg-white py-12">
            <div className="flex flex-col items-center gap-3">
                {/* First strip */}
                <Strip items={itemsTop} />

                {/* Second strip */}
                <Strip items={itemsBottom} />
            </div>
        </section>
    );
};

export default GivingBackSection;
