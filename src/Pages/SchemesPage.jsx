import React from "react";
import { ChevronRight } from "lucide-react";

const Card = ({ title, links }) => {
  return (
    <section className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-3xl">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-[#003B71] mb-4">{title}</h2>

      {/* Links */}
      <div className="divide-y-2 divide-gray-300">
        {links.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="flex items-center justify-between py-3 text-[#183059] hover:text-gray-700 hover:underline transition"
          >
            <span className="pr-4 text-sm leading-snug p-1">{item.label}</span>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
};

const SchemesPage = () => {
  const facultyLinks = [
    { label: "Guidelines for Support for IITR Faculty for Visiting Institutions Abroad", href: "#" },
    { label: "Online Application Form", href: "#" },
    { label: "100% Advance for Visiting Institutions Abroad (pdf)", href: "#" },
    { label: "Claim Form for Visiting Institutions Abroad (pdf)", href: "#" },
    { label: "Proforma for Direct Payment (Pdf File)", href: "#" },
    { label: "TA Form (pdf)", href: "#" },
  ];

  const visitorLinks = [
    { label: "Online Application For Support for Faculty, Researchers, and Students from Foreign Institutions", href: "#" },
    { label: "Guidelines for Support for Faculty, Researchers, and Students from Foreign Institutions", href: "#" },
    { label: "Travelling Allowance Bill – IIT Roorkee", href: "#" },
  ];

  const studentLinks = [
    { label: "Partial Support for Visiting Institutions Abroad", href: "#" },
    { label: "Partial Support to Attend Good International Conferences", href: "#" },
    { label: "Partial Support for International Research Internships", href: "#" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen px-4 py-12 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-600 mb-10 text-center">
        Schemes
      </h1>

      {/* Card Sections */}
      <div className="flex flex-col gap-10 w-full items-center">
        <Card title="For Faculty" links={facultyLinks} />
        <Card title="For Visitors" links={visitorLinks} />
        <Card title="For Students" links={studentLinks} />
      </div>
    </main>
  );
};

export default SchemesPage;
