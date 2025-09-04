import React from "react";
import { ChevronRight } from "lucide-react";

const GivingBack = () => {
  const links = [
    "Scheme",
    "Esteemed Donors",
    "Giving back to IITR",
    "Foreign Contribution Regulation Act",
    "CSR Contribution",
    "Tax Exemption",
    "Avenues for Alumni",
  ];
  return (
    <div className="font-poppins">
      {/* Section 1: Why Give Back + Important Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left box */}
          <div className="lg:col-span-2 bg-[#0a2342] text-white p-8 rounded-md">
            <h2 className="text-2xl font-bold uppercase mb-6">
              Why Give Back?
            </h2>
            <p className="mb-6 leading-relaxed text-white/90">
              Your invaluable monetary support shall help IITR to build new
              infrastructure and undertake further developmental activities. It
              is of critical significance in helping IITR climb up the ladder of
              global excellence. The received funds shall be useful in various
              domains and will directly benefit and/or create opportunities for
              programmes like:
            </p>
            <ul className="list-disc list-inside space-y-3 text-white/90">
              <li>
                Running scholarships and awards for needy and deserving students
                as well as award recognition for notable alumni to promote the
                culture of learning and excellence.
              </li>
              <li>
                To further strengthen world class research facilities and create
                an ideal environment for scientific innovation.
              </li>
              <li>
                To bridge the student - faculty ratio to facilitate interactive
                world-class learning.
              </li>
            </ul>
          </div>

          {/* Right card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Important Links
            </h3>
            <div className="divide-y divide-gray-200">
              {links.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex items-center justify-between py-3 text-gray-700 hover:text-[#0a2342] transition"
                >
                  {item}
                  <ChevronRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Benefits */}
      <section className="bg-[#0a2342] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold uppercase text-white mb-6">
            Benefits
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Text box */}
            <div className="bg-white p-6 rounded-md shadow">
              <p className="italic text-gray-700 leading-relaxed">
                “All the donations made to IIT Roorkee are 100% deductible from
                total taxable income u/s 80G of the Income Tax Act 1961 and may
                be used to support a wide variety of schemes. The options to
                choose from include providing financial aid to needy students,
                encouraging academic and all-round excellence through various
                scholarships as well as funding technical team projects on
                campus and travel support. Other schemes include sponsoring
                fellowships to recognise research and outstanding contribution
                of faculty members. IITR also offers naming opportunities on
                making infrastructural donations. Moreover, the donation doesn’t
                necessarily have to be as per one of the schemes, any small,
                general purpose donations are acceptable.”
              </p>
            </div>

            {/* Image */}
            <div className="w-full">
              <img
                src="/giveback.jpg"
                alt="People working on laptops"
                className="rounded-md shadow w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Footer info */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-blue-950 p-6 rounded-md shadow text-center">
          <p className="text-white leading-relaxed mb-4">
            Convenience of the donors is taken care of at each step, with
            multiple payment options including provision for online donations ,
            on-the-spot donation of immovable assets, donation options via IPO
            lots. Status of the donation is informed to them regularly through a
            financial statement mailed each year with the details of opening
            amount, interest earned, expenditure, and balance amount of their
            donation. Institute also conveys the information of the list of
            beneficiaries through email to keep the donors updated.
          </p>
          <p className="text-white">
            To donate please visit{" "}
            <a href="https://iitrdora.iitr.ac.in/donors/info.php" className="text-blue-600 font-medium hover:underline">
              here
            </a>
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-blue-950 p-6 rounded-md shadow text-center">
          <p className="text-white leading-relaxed mb-4">HAVE ANY QUERIES</p>
          <p className="text-white leading-relaxed mb-4">
            Please write to: Prof. R.D. Garg, Dean of Resources & Alumni Affairs
          </p>
          <p className="text-white leading-relaxed mb-4">
                Email: 
            <a
              href="mailto:dora.office@iitr.ac.in"
              className="text-blue-600 hover:underline"
            >
              dora.office@iitr.ac.in
            </a>
            ;
            <a
              href="mailto:dora@iitr.ac.in"
              className="text-blue-600 hover:underline"
            >
              dora@iitr.ac.in
            </a>{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default GivingBack;
