// import React from "react";
// import Header from "./Header";
// import { Card, CardContent } from "../Components/ui/card";

// // ✅ Reusable Dean/Staff Profile Card
// const ProfileCard = ({ image, name, title, phone, email1, email2, about }) => (
//   <Card className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-xl shadow-md border">
//     <img
//       src={image}
//       alt={name}
//       className="w-40 h-48 object-cover rounded-lg shadow"
//     />
//     <CardContent className="p-4 flex-1">
//       <h2 className="text-lg font-bold text-slate-900">{name}</h2>
//       <p className="text-sm text-blue-700 font-medium">{title}</p>
//       <div className="mt-2 text-sm text-slate-600 space-y-1">
//         <p>Phone: {phone}</p>
//         <p>Email: <a href={`mailto:${email1}`} className="text-blue-600 hover:underline">{email1}</a></p>
//         {email2 && (
//           <p>Email: <a href={`mailto:${email2}`} className="text-blue-600 hover:underline">{email2}</a></p>
//         )}
//       </div>
//       {about && (
//         <div className="mt-4">
//           <h3 className="text-base font-semibold text-slate-800">About DORA</h3>
//           <p className="mt-1 text-sm text-slate-600 leading-relaxed">{about}</p>
//         </div>
//       )}
//     </CardContent>
//   </Card>
// );

// // ✅ Reusable Team Card
// const TeamCard = ({ image, name, title, phone, email, desc }) => (
//   <Card className="rounded-xl shadow border">
//     <CardContent className="p-4 flex flex-col items-center text-center">
//       <img
//         src={image}
//         alt={name}
//         className="w-28 h-32 object-cover rounded-lg shadow"
//       />
//       <h4 className="mt-3 text-base font-semibold text-slate-900">{name}</h4>
//       <p className="text-sm text-slate-600">{title}</p>
//       <div className="mt-2 text-xs text-slate-600 space-y-1">
//         <p>Phone: {phone}</p>
//         <p>Email: <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a></p>
//       </div>
//       <p className="mt-2 text-xs text-slate-500 leading-snug">{desc}</p>
//     </CardContent>
//   </Card>
// );

// const DoraStaff = () => {

//     // <Header/>
//     return(
//     <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
//       {/* Dean Profile */}
//       <ProfileCard
//         image="/dean.png"
//         name="Prof. R. D. Garg"
//         title="Dean of Resources & Alumni Affairs"
//         phone="+91-1332-284480"
//         email1="dean.dora@iitr.ac.in"
//         email2="dora@iitr.ac.in"
//         about="Prof. R.D. Garg is Professor of Civil Engineering at the Indian Institute of Technology Roorkee. He also holds the responsibility of Dean of Resources and Alumni Affairs (DORA) since January 2023. As DORA, Prof. R.D. Garg is dedicated to improving and strengthening the Institute–alumni connect."
//       />

//       {/* Team Section */}
//       <div>
//         <h2 className="text-center text-2xl font-bold text-slate-400 tracking-wide mb-8">
//           MEET OUR TEAM
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Array(6).fill(0).map((_, i) => (
//             <TeamCard
//               key={i}
//               image="/staff.png"
//               name="Mohit Sharma"
//               title="Office Assistant"
//               phone="+91-1332-285840"
//               email="mohit.sharma@iitr.ac.in"
//               desc="Diary & Dispatch, Data entry, and Record Maintenance."
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//     )
// }

// export default DoraStaff;

// import React from "react";
// import Header from "../Components/Header";
// import { Card, CardContent } from "../Components/ui/card";

// // ✅ Reusable Dean/Staff Profile Card
// const ProfileCard = ({ image, name, title, phone, email1, email2, about }) => (
//   <Card className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-xl shadow-md border">
//     <img
//       src={image}
//       alt={name}
//       className="w-40 h-48 object-cover rounded-lg shadow"
//     />
//     <CardContent className="p-4 flex-1">
//       <h2 className="text-lg font-bold text-slate-900">{name}</h2>
//       <p className="text-sm text-blue-700 font-medium">{title}</p>
//       <div className="mt-2 text-sm text-slate-600 space-y-1">
//         <p>Phone: {phone}</p>
//         <p>
//           Email:{" "}
//           <a href={`mailto:${email1}`} className="text-blue-600 hover:underline">
//             {email1}
//           </a>
//         </p>
//         {email2 && (
//           <p>
//             Email:{" "}
//             <a href={`mailto:${email2}`} className="text-blue-600 hover:underline">
//               {email2}
//             </a>
//           </p>
//         )}
//       </div>
//       {about && (
//         <div className="mt-4">
//           <h3 className="text-base font-semibold text-slate-800">About DORA</h3>
//           <p className="mt-1 text-sm text-slate-600 leading-relaxed">{about}</p>
//         </div>
//       )}
//     </CardContent>
//   </Card>
// );

// // ✅ Reusable Team Card
// const TeamCard = ({ image, name, title, phone, email, desc }) => (
//   <Card className="rounded-xl shadow border">
//     <CardContent className="p-4 flex flex-col items-center text-center">
//       <img
//         src={image}
//         alt={name}
//         className="w-28 h-32 object-cover rounded-lg shadow"
//       />
//       <h4 className="mt-3 text-base font-semibold text-slate-900">{name}</h4>
//       <p className="text-sm text-slate-600">{title}</p>
//       <div className="mt-2 text-xs text-slate-600 space-y-1">
//         <p>Phone: {phone}</p>
//         <p>
//           Email:{" "}
//           <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
//             {email}
//           </a>
//         </p>
//       </div>
//       <p className="mt-2 text-xs text-slate-500 leading-snug">{desc}</p>
//     </CardContent>
//   </Card>
// );

// const DoraStaff = () => {
//   // ✅ Team data with different details
//   const teamMembers = [
//     {
//       image: "/Bhandari.jpeg",
//       name: "Jitendra Bhandari",
//       title: "Office Assistant",
//       phone: "+91-1332-285840",
//       email: "mohit.sharma@iitr.ac.in",
//       desc: "Diary & Dispatch, Data entry, and Record Maintenance.",
//     },
//     {
//       image: "/kamal.jpg",
//       name: "Kamal Singh",
//       title: "Senior Office Assistant",
//       phone: "+91-1332-285841",
//       email: "priya.verma@iitr.ac.in",
//       desc: "Handles alumni communications and official correspondence.",
//     },
//     {
//       image: "/Vishal.jpg",
//       name: "Vishal Verma",
//       title: "Technical Assistant",
//       phone: "+91-1332-285842",
//       email: "rohit.kumar@iitr.ac.in",
//       desc: "Website management and IT support.",
//     },
//     {
//       image: "/neha.jpg",
//       name: "Neha Vijay",
//       title: "Junior Assistant",
//       phone: "+91-1332-285843",
//       email: "sneha.gupta@iitr.ac.in",
//       desc: "Event coordination and logistics support.",
//     },
//     {
//       image: "/Harsh.jpg",
//       name: "Harsh Singh",
//       title: "Clerk",
//       phone: "+91-1332-285844",
//       email: "amit.singh@iitr.ac.in",
//       desc: "File management and document processing.",
//     },
//     {
//       image: "/sagar.jpeg",
//       name: "Sagar Yadav",
//       title: "Intern",
//       phone: "+91-1332-285845",
//       email: "neha.mehra@iitr.ac.in",
//       desc: "Assists with day-to-day operations.",
//     },
//     {
//       image: "/mohit.jpeg",
//       name: "Mohit Sharma",
//       title: "Intern",
//       phone: "+91-1332-285845",
//       email: "neha.mehra@iitr.ac.in",
//       desc: "Assists with day-to-day operations.",
//     },
//   ];

//   <Header />
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

//       {/* Dean Profile */}
//       <ProfileCard
//         image="/RD.jpg"
//         name="Prof. R. D. Garg"
//         title="Dean of Resources & Alumni Affairs"
//         phone="+91-1332-284480"
//         email1="dean.dora@iitr.ac.in"
//         email2="dora@iitr.ac.in"
//         about="Prof. R.D. Garg is Professor of Civil Engineering at IIT Roorkee. He also holds the responsibility of Dean of Resources and Alumni Affairs (DORA) since January 2023."
//       />

//       {/* Team Section */}
//       <div>
//         <h2 className="text-center text-2xl font-bold text-slate-400 tracking-wide mb-8">
//           MEET OUR TEAM
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {teamMembers.map((member, i) => (
//             <TeamCard key={i} {...member} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoraStaff;
import React from "react";
import { Search, Facebook, Twitter, Linkedin } from "lucide-react";


// Team Member Card Component
const TeamMemberCard = ({ member }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
    <img
      src={`${process.env.PUBLIC_URL}${member.imageUrl}`}
      alt={member.name}
      className="w-[32%] h-full rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <h3 className="font-bold text-lg">{member.name}</h3>
      <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
      <p className="text-blue-600 font-semibold">{member.title}</p>
      {/* <p className="text-sm text-gray-600 mt-1">Phone no. - {member.phone}</p> */}
      <p className="text-sm text-gray-600">{member.responsibilities}</p>
    </div>
  </div>
);

// Main component for the Team page
const DoraStaff = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Prof. R.D. Garg",
      title: "Civil Engg. Department",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/RD.jpg",
    },
    {
      id: 2,
      name: "Prof. Sourabh Vijay",
      title: "Civil Engg. Department",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/saurbh.jpg",
    },
    {
      id: 3,
      name: "Prof. Prakhar Misra",
      title: "Civil Engg. Department",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/parkharmishra.png",
    },
    {
      id: 4,
      name: "Prof. Nitish Arya",
      title: "Mech. Engg. Department",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/Nitish.png",
    },
    {
      id: 4,
      name: "Prashant Singh",
      title: "Technical Officer",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/prashant.jpeg",
    },
  ];
  const staffMembers = [
    {
      id: 1,
      name: "Dr. Sharwan Ram",
      title: "Project Fellow",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/sharwan.jpeg",
    },
    {
      id: 2,
      name: "Bijay Tamang",
      title: "Project Associate",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/bijay.jpeg",
    },
    {
      id: 3,
      name: "Umang Patanwala",
      title: "Project Associate",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/umang.jpeg",
    },
    {
      id: 4,
      name: "Tanu",
      title: "Project Attendant",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/tanu.jpeg",
    },
    // {
    //   id: 5,
    //   name: "Sagar Yadav",
    //   title: "Office Gitanjali",
      // phone: "+91-1332-285840",
    //   responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
    //   imageUrl: "/sagar.jpeg",
    // },
    // {
    //   id: 6,
    //   name: "Harsh Singh",
    //   title: "Office Gitanjali",
      // phone: "+91-1332-285840",
    //   responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
    //   imageUrl: "/Harsh.jpg",
    // },
    // {
    //   id: 6,
    //   name: "Mohit Sharma",
    //   title: "Office Gitanjali",
      // phone: "+91-1332-285840",
    //   responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
    //   imageUrl: "/mohit.jpeg",
    // },
  ];
  const InternMembers = [
    {
      id: 1,
      name: "Siddharth Vats",
      title: "COER University , Roorkee",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/siddharthp.jpg",
    },
    {
      id: 2,
      name: "Sourabh Yadav",
      title: "COER University , Roorkee",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/sourabhp.jpg",
    },
    {
      id: 3,
      name: "Nirmal Kumar",
      title: "UPES , Dehradun",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/nirmalp.jpg",
    },
    {
      id: 4,
      name: "Ravinder Pal",
      title: "Thapar instititute , Patiala",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/Rarvinderpal.jpg",
    },
    {
      id: 5,
      name: "Arpita Sharma",
      title: "G.E.C , Ajmeer",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/arpita.jpg",
    },
    {
      id: 6,
      name: "Kumkum Raj",
      title: "G.E.C , Ajmeer",
      // phone: "+91-1332-285840",
      // responsibilities: "Diary & Dispatch, Data-entry, and Record Maintenance",
      imageUrl: "/kumkum.jpg",
    },
  ];

  return (
    <div className="">
      {/* Dean's Section */}
      <div className="flex flex-col md:mb-10 mt-10 lg:mx-40 mx-6 md:mx-16 md:mt-10">
        {/* <div className="flex flex-col md:flex-row w-full gap-10 md:gap-20 z-10 justify-center">
          <div className="relative mt-8 md:mt-16 flex justify-center md:block">
            <img
              className="h-[200px] md:h-[320px] w-[160px] md:w-[260px]"
              // src={RDGIMG}
              src={`${process.env.PUBLIC_URL}/RD.jpg`}
              alt="DORA"
            />
          </div>
          <div className="flex flex-col justify-center pb-8 md:pb-16 text-center md:text-left px-4 md:px-0 ">
            <div className="text-[#003B71] font-semibold text-lg sm:text-xl md:text-2xl">
              Prof. R. D. Garg
            </div>
            <div className="text-[#003B71] font-medium text-sm sm:text-md md:text-lg mt-2">
              Dean of Resources & Alumni Affairs
            </div>
            <div className="text-[#909090] bg-[#909090] w-full h-[1px] md:h-[2px] md:w-[auto] mt-4 mb-2"></div>
            <a
              href={`tel:`}
              className="text-[#909090] font-medium text-sm sm:text-md"
            >
              Phone: +91-1332-285840
            </a>
            <a
              href={`mailto:`}
              className="text-[#909090] font-medium text-sm sm:text-md mt-2"
            >
              Email: dora.office@iitr.ac.in
            </a>
            <a
              href={`mailto:`}
              className="text-[#909090] font-medium text-sm sm:text-md mt-2 md:pl-12"
            >
              : dora@iitr.ac.in
            </a>
          </div>
        </div> */}
        {/* About DORA Section */}
        
        <div
          className="bg-[#E6E6E6] flex flex-col md:px-20 px-6 rounded-sm md:-translate-y-48 pt-[38px] md:pt-28 pb-10 mt-[80px]
         md:text-left text-justify translate-y-0 mt-[110px] md:mt-[120px]" 
        >
          <div className="text-[#003B71] text-2xl md:text-3xl font-bold my-4 md:my-7 text-center md:text-left md:ml-32">
            Mission and Vision
          </div>
          <div className="text-md md:text-lg">
            Our mission is to advance in drone technologies for environmental monitoring, sustainable agriculture, and glacier mapping.
We aim to nurture innovation by offering internships and hands-on training for undergraduate students. 
Through awareness programs for farmers, we are promoting the adoption of drone-based solutions for sustainable development.
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <section className="py-2 bg-white -mt-36">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Faculties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1080px] mx-auto">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1080px] mx-auto">
            {staffMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Interns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1080px] mx-auto">
            {InternMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoraStaff;

// import React from "react";

// const ProfileCard = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6">
//       {/* Profile Image */}
//       <img
//         src="/RD.jpg"
//         alt="Prof. R. D. Garg"
//         className="w-48 h-auto rounded-md object-cover shadow-sm"
//       />

//       {/* Profile Details */}
//       <div className="flex flex-col">
//         <h2 className="text-xl font-bold text-blue-900">Prof. R. D. Garg</h2>
//         <p className="text-blue-700 text-sm mb-3">
//           Dean of Resources & Alumni Affairs
//         </p>

//         <hr className="border-gray-300 mb-3" />

//         <p className="text-gray-600 text-sm">Phone: +91-1332-285840</p>
//         <p className="text-gray-600 text-sm">
//           Email:{" "}
//           <a
//             href="mailto:dora.office@iitr.ac.in"
//             className="text-blue-700 underline"
//           >
//             dora.office@iitr.ac.in
//           </a>
//         </p>
//         <p className="text-gray-600 text-sm">
//           <a
//             href="mailto:dora@iitr.ac.in"
//             className="text-blue-700 underline"
//           >
//             dora@iitr.ac.in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// const AboutSection = () => {
//   return (
//     <div className="bg-gray-100 p-6 mt-4">
//       <h3 className="text-lg font-bold text-blue-900 mb-2">About DORA</h3>
//       <p className="text-gray-800 text-sm leading-relaxed">
//         Prof. R.D. Garg is a Professor of Civil Engineering at the Indian
//         Institute of Technology Roorkee. He also holds the responsibility of
//         Dean of Resources and Alumni Affairs (DORA) since 01 May 2023. As DORA,
//         Prof. R.D. Garg is dedicated to improve and strengthen the
//         institute–alumni connect.
//       </p>
//     </div>
//   );
// };

// const DoraStaff = () => {
//   return (
//     <section className="max-w-4xl mx-auto bg-white shadow-sm rounded-md">
//       <ProfileCard />
//       <AboutSection />
//     </section>
//   );
// };

// export default DoraStaff;

// import React from "react";

// const ProfileCard = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
//       {/* Profile Image */}
//       <img
//         src="/RD.jpg"
//         alt="Prof. R. D. Garg"
//         className="w-48 h-auto rounded-md object-cover"
//       />

//       {/* Profile Info */}
//       <div className="flex flex-col">
//         <h2 className="text-xl font-bold text-[#0C3C78]">Prof. R. D. Garg</h2>
//         <p className="text-sm text-[#1C65A3]">
//           Dean of Resources & Alumni Affairs
//         </p>

//         <hr className="border-gray-300 my-3 w-full" />

//         <p className="text-sm text-gray-600">Phone: +91-1332–285840</p>
//         <p className="text-sm text-gray-600">
//           Email:{" "}
//           <a
//             href="mailto:dora.office@iitr.ac.in"
//             className="text-[#1C65A3] underline"
//           >
//             dora.office@iitr.ac.in
//           </a>
//         </p>
//         <p className="text-sm text-gray-600">
//           <a
//             href="mailto:dora@iitr.ac.in"
//             className="text-[#1C65A3] underline"
//           >
//             dora@iitr.ac.in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// const AboutSection = () => {
//   return (
//     <div className="bg-gray-100 p-6">
//       <h3 className="text-lg font-bold text-[#0C3C78] mb-2">About DORA</h3>
//       <p className="text-sm text-black leading-relaxed">
//         Prof. R.D. Garg is a Professor of Civil Engineering at the Indian
//         Institute of Technology Roorkee. He also holds the responsibility of
//         Dean of Resources and Alumni Affairs (DORA) since 01 May 2023. As DORA,
//         Prof. R.D. Garg is dedicated to Improve and strengthen the
//         institute–alumni connect.
//       </p>
//     </div>
//   );
// };

// const DoraStaff = () => {
//   return (
//     <section className="max-w-4xl mx-auto bg-white shadow-sm rounded-md overflow-hidden">
//       <ProfileCard />
//       <AboutSection />
//     </section>
//   );
// };

// export default DoraStaff;
