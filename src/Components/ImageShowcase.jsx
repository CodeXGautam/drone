import React, { useEffect, useState } from "react";

const ImageShowcase = () => {
    const images = [
        "/1.jpeg",
        "/2.jpeg",
        "/4.jpeg",
        "/5.jpeg",
        "/6.jpeg",
        "/7.jpeg",
        "/8.jpeg",
        "/9.jpeg",
        "/10.jpeg",
        "/11.jpeg",
        "/12.jpg",
        "/13.jpg",
        "/14.jpg",
        "/15.jpeg",
        "/16.jpeg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Decrement index for rightward shift
            setIndex((prev) => (prev - 1 + images.length) % images.length);
        }, 3000); // switch every 2s
        return () => clearInterval(interval);
    }, [images.length]);

    const getVisibleImages = () => {
        return [
            images[index % images.length],
            images[(index + 1) % images.length],
            images[(index + 2) % images.length],
        ];
    };

    return (
        <div className="w-full flex justify-center items-center bg- overflow-hidden ">
            <div className="flex w-full">
                {getVisibleImages().map((img, i) => {
                    // Apply different styles for left, middle, right
                    let extraClasses = "";
                    if (i === 0 || i === 2) {
                        // left and right → half width + only top & bottom border
                        extraClasses = "w-1/4 border-y-4 border-white";
                    } else if (i === 1) {
                        // middle → full width + all borders
                        extraClasses = "w-1/2 border-4 border-white";
                    }

                    return (
                        <div key={i} className={`${extraClasses} aspect-[550/280]`}>
                            <img
                                src={img}
                                alt={`showcase-${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageShowcase;

// import React, { useEffect, useState } from "react";

// const ImageShowcase = () => {
//     const images = [
//         "/img1.jpg",
//         "/img2.jpg",
//         "/img3.jpg",
//         "/img4.jpg",
//         "/img5.jpg",
//         "/img6.jpg",
//     ];

//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => (prev + 1) % images.length); // next image
//         }, 2000); // 2s interval
//         return () => clearInterval(interval);
//     }, [images.length]);

//     return (
//         <div className="w-full flex justify-center items-center bg-gray-100 overflow-hidden">
//             <div className="w-1/2 border-4 border-white aspect-[550/200]">
//                 <img
//                     src={images[index]}
//                     alt={`showcase-${index}`}
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ImageShowcase;


