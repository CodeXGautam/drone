// import React from "react";

// const OnlineApplicationPage = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-2xl font-bold mb-6 text-center">
//         Online Application Form for IITR Students for Visiting Institutions Abroad
//       </h1>

//       <div className="w-full h-[700px] border rounded-lg overflow-hidden shadow">
//         <iframe
//           src="https://iitrdora.iitr.ac.in/support_via/via_s.php"
//           className="w-full h-full"
//           title="Online Application Form"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default OnlineApplicationPage;

// Pages/IframePage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const pages = {
  "visiting-abroad-application": {
    title: "Application Form to Support for IITR Students for Visiting Institutions Abroad",
    url: "https://iitrdora.iitr.ac.in/support_via/via_s.php",
  },
  "gic-form": {
    title: "Application Form for Partial Support to Present Papers in Good International Conferences/Workshops/Symposia",
    url: "https://almamater.iitr.ac.in/file/gic/forms/GIC_applicationFrmInstruction.aspx",
  },
  "international-intern-research-form": {
    title: "Application Form for Travel Support to Students for International Research Internship (TSS-IRI)",
    url: "https://iitrdora.iitr.ac.in/iriform/iri.php",
  },
  "IR-guidelines": {
    title: "IR Guidelines",
    url: "https://iitrdora.iitr.ac.in/support_via/Guideline.html",
  },
  "dyaa-2023": {
    // title: "Distinguished Young Alumnus AWARDEES 2023",
    url: "https://iitrdora.iitr.ac.in/news/ypages/daa-2023.php#dyaa",
  },
  "da-2023": {
    // title: "Distinguished Alumnus AWARDEES 2023",
    url: "https://iitrdora.iitr.ac.in/news/ypages/daa-2023.php",
  },
  "osa-2023": {
    // title: "Outstanding Service AWARDEES 2023",
    url: "https://iitrdora.iitr.ac.in/news/ypages/daa-2023.php#osa",
  },
  "dyaa-2022": {
    // title: "Distinguished Young Alumnus AWARDEES 2022",
    url: "https://iitrdora.iitr.ac.in/news/ypages/daa-2022.php#dyaa",
  },
  "da-2022": {
    // title: "Distinguished Alumnus AWARDEES 2022",
    url: "https://iitrdora.iitr.ac.in/news/ypages/daa-2022.php",
  },
  "osa-2022": {
    // title: "Outstanding Service AWARDEES 2022",
    url: "https://iitrdora.iitr.ac.in/news/ypages/daa-2022.php#osa",
  },
  "dyaa-2021": {
    // title: "Distinguished Young Alumnus AWARDEES 2021",
    url: "https://iitrdora.iitr.ac.in/news/ypages/daa-2021.php#dyaa",
  },
  "da-2021": {
    // title: "Distinguished Alumnus AWARDEES 2021",
    url: "https://iitrdora.iitr.ac.in/news/ypages/daa-2021.php",
  },
  "osa-2021": {
    // title: "Outstanding Service AWARDEES 2021",
    url: "https://iitrdora.iitr.ac.in/news/ypages/daa-2021.php#osa",
  },
  "dyaa-2020": {
    // title: "Distinguished Young Alumnus AWARDEES 2020",
    url: "https://iitrdora.iitr.ac.in/alumni/dyaa-2020.php",
  },
  "da-2020": {
    // title: "Distinguished Alumnus AWARDEES 2020",
    url: "https://iitrdora.iitr.ac.in/alumni/daa-2020.php",
  },
  "da-2019": {
    // title: "Distinguished Alumnus AWARDEES 2019",
    url: "https://iitrdora.iitr.ac.in/alumni/daa-2019.php",
  },
  "dyaa-2019": {
    // title: "Distinguished Young Alumnus AWARDEES 2019",
    url: "https://iitrdora.iitr.ac.in/alumni/dyaa-2019.php#DYAA",
  },
  "awardee-2005-2023": {
    // title: "Previous Awardees (2005 - 2023)",
    url: "https://iitrdora.iitr.ac.in/alumni/list.php",
  },
  "research-2022": {
    // title: "Previous Awardees (2005 - 2023)",
    url: "https://iitrdora.iitr.ac.in/news/ypages/ira-2022.php",
  },
  "research-2021": {
    // title: "Previous Awardees (2005 - 2023)",
    url: "https://iitrdora.iitr.ac.in/news/ypages/ira-2021.php",
  },
  "research-2017-2018": {
    // title: "Previous Awardees (2005 - 2023)",
    url: "https://iitrdora.iitr.ac.in/news/ypages/ira-2019.php",
  },
  "global-network": {
    // title: "Gloabal Network of IIT Roorkee Alumni",
    url: "https://almamater.iitr.ac.in/alumportal/globalnetwork.aspx",
  },
  "alumni-signup-form": {
    // title: "Signup Form IIT Roorkee Alumni",
    url: "https://almamater.iitr.ac.in/file/SignInForm1.aspx",
  },
  "alumni-login": {
    // title: "Login of IIT Roorkee Alumni",
    url: "https://almamater.iitr.ac.in/alumPortal/Login_website.aspx",
  },
  "visitor-guidline": {
    // title: "visitor-guidline of IIT Roorkee Alumni",
    url: "https://iitrdora.iitr.ac.in/support_via/Guidelines_FRSFFI.html",
  },
  "visitor-form": {
    // title: "visitor-form of IIT Roorkee Alumni",
    url: "https://iitrdora.iitr.ac.in/s_researcher/guide.php",
  },
  "faculty-visiting-abroad-guidline": {
    // title: "Login of IIT Roorkee Alumni",
    url: "https://iitrdora.iitr.ac.in/support_via/Guidelines_FVIA.html",
  },
  "faculty-visiting-abroad-form": {
    // title: "Login of IIT Roorkee Alumni",
    url: "https://iitrdora.iitr.ac.in/fac_via/faculty_via.php",
  },
  "gic-testimonial": {
    // title: "Login of IIT Roorkee Alumni",
    url: "https://iitrdora.iitr.ac.in/news/ypages/gictestimonial.html",
  },
  "ir-intern-testimonial": {
    // title: "Login of IIT Roorkee Alumni",
    url: "https://alumni.iitr.ac.in/travel/testi/irit",
  },
  "sem-exchange-testimonial": {
    // title: "Login of IIT Roorkee Alumni",
    url: "https://alumni.iitr.ac.in/travel/testi/viat",
  },
};

const OnlineApplicationPage = () => {
  const { pageId } = useParams();
  const page = pages[pageId];

  if (!page) return <h1 className="text-center mt-10">Page Not Found</h1>;

  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">{page.title}</h1>
      <iframe
        src={page.url}
        className="w-full h-[90vh] border rounded-lg"
        title={page.title}
      ></iframe>
    </div>
  );
};

export default OnlineApplicationPage;
