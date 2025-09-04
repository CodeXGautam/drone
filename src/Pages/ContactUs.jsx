// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Contact Form */}
//         <div className="bg-white rounded-2xl shadow-lg p-8">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
//             Contact Us
//           </h1>

//           <form className="space-y-5">
//             {/* Name */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             {/* Subject */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter subject"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Description
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Write your message..."
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
//               ></textarea>
//             </div>

//             {/* Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Info Section */}
//         <div className="flex flex-col gap-6 justify-center">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-lg font-semibold text-gray-800">📍 Address</h2>
//             <p className="text-gray-600">Drone4S lab ,Geometric Building, IIT Roorkee</p>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-lg font-semibold text-gray-800">📞 Phone</h2>
//             <p className="text-gray-600">+91 9391125740</p>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-lg font-semibold text-gray-800">✉️ Email</h2>
//             <p className="text-gray-600">droneiitr.lab@gmail.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzNRUdNoNUfYfnK21Gjm2LuJJWsCSTTTmXpwoKWgiiaVWOH8b2d69cHLu_c0heYn2XoRw/exec",
        {
          method: "POST",
          mode: "no-cors", // Google Apps Script CORS ke liye
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", description: "" });
    } catch (error) {
      alert("❌ Error submitting form!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* Info Section */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800">📍 Address</h2>
            <p className="text-gray-600">
              Drone4S lab ,Geospatial Building, IIT Roorkee
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800">📞 Phone</h2>
            <p className="text-gray-600">+91 9391125740</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800">✉️ Email</h2>
            <p className="text-gray-600">droneiitr.lab@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
