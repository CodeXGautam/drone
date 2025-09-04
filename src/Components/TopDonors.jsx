import React from "react";

// Reusable fallback image
const FallbackImage = ({
                           src,
                           alt = "",
                           className = "",
                           fallback = "/default-donor.png",
                       }) => {
    const svgFallback =
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
        <rect width='100%' height='100%' fill='#eef2f7'/>
        <circle cx='80' cy='60' r='32' fill='#cbd5e1'/>
        <rect x='40' y='108' width='80' height='20' rx='10' fill='#cbd5e1'/>
      </svg>`
        );

    const sources = [
        src && src.trim() ? src : fallback,
        fallback,
        svgFallback, // last-resort inline placeholder
    ];
    const [idx, setIdx] = React.useState(0);

    return (
        <img
            src={sources[idx]}
            alt={alt}
            className={className}
            loading="lazy"
            onError={() => {
                setIdx((i) => Math.min(i + 1, sources.length - 1));
            }}
        />
    );
};

const donors = [
    { id: 1, name: "Name", image: "/donor1.jpg" },
    { id: 2, name: "Name", image: "/donor2.jpg" },
    { id: 3, name: "Name", image: "/donor3.jpg" },
    { id: 4, name: "Name", image: "/donor4.jpg" },
];
// Put /public/default-donor.png in your project (or we’ll show the SVG placeholder)

const TopDonors = () => {
    return (
        <section className="bg-gray-100 py-12">
            <h2 className="text-5xl font-extrabold text-gray-400 text-center mb-10">
                Top Donors
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
                {donors.map((donor) => (
                    <div
                        key={donor.id}
                        className="bg-white shadow-md rounded-md p-4 flex flex-col items-center"
                    >
                        <FallbackImage
                            src={donor.image}
                            alt={donor.name}
                            className="w-40 h-40 object-cover rounded"
                            fallback="/default-donor.png"
                        />
                        <div className="w-full border-t mt-4 mb-2"></div>
                        <p className="text-center font-medium text-blue-950">{donor.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopDonors;
