import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Mohan Bajaj",
        title: "Research Scholar",
        dept: "Department of Earthquake Engineering",
        img: "/test1.jpg",
        text: "I am writing to express my heartfelt gratitude for the financial support of ₹75,000 provided by the Dean of Resources & Alumni affairs of our institution to attend the 18th World Conference on Earthquake Engineering (WCEE) in Milan, Italy, from June 30 to July 5, 2024...",
    },
    {
        id: 2,
        name: "Mohan Bajaj",
        title: "Research Scholar",
        dept: "Department of Earthquake Engineering",
        img: "/test2.jpg",
        text: "The conference was immensely enriching, providing valuable insights and opportunities for academic and professional growth. I am eager to apply the knowledge and connections gained to my ongoing work and future endeavors.",
    },
    {
        id: 3,
        name: "Mohan Bajaj",
        title: "Research Scholar",
        dept: "Department of Earthquake Engineering",
        img: "/test3.jpg",
        text: "This generous support enabled me to participate in this significant event, and I am truly appreciative of the opportunity it afforded me.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 relative overflow-hidden bg-white">
            <h2 className="text-5xl font-extrabold text-gray-400 text-center mb-10">
                Testimonials
            </h2>

            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-8"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                    }}
                >
                    {[...testimonials, ...testimonials].map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-xl p-6 w-[500px] h-[250px] flex-shrink-0 shadow-md flex flex-col"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    onError={(e) => (e.currentTarget.src = "/default-user.png")}
                                    className="w-20 h-20 rounded-lg object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg text-blue-950">
                                        {t.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{t.title}</p>
                                    <p className="text-sm text-gray-500">{t.dept}</p>
                                </div>
                            </div>
                            <hr className="my-3 border-gray-200" />
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {t.text}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
