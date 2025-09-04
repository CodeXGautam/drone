import React from "react";
import { ChevronRight } from "lucide-react";
import EventsSection from "../Components/EventsSection";
import Testimonials from "../Components/Testimonials";

const Beladi = () => {
           const data1 = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
  ];

  const data2 = [
    { id: 1, city: "New York", country: "USA" },
    { id: 2, city: "Los Angeles", country: "USA" },
  ];

  const Table1 = () => (
    <table className=" bg-white border border-gray-200 shadow-md rounded-lg mb-6">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="py-3 px-6 text-left">ID</th>
          <th className="py-3 px-6 text-left">Name</th>
          <th className="py-3 px-6 text-left">Age</th>
        </tr>
      </thead>
      <tbody>
        {data1.map((item, index) => (
          <tr
            key={item.id}
            className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
          >
            <td className="py-3 px-6">{item.id}</td>
            <td className="py-3 px-6">{item.name}</td>
            <td className="py-3 px-6">{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const Table2 = () => (
    <table className="bg-white border border-gray-200 shadow-md rounded-lg">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="py-3 px-6 text-left">ID</th>
          <th className="py-3 px-6 text-left">City</th>
          <th className="py-3 px-6 text-left">Country</th>
        </tr>
      </thead>
      <tbody>
        {data2.map((item, index) => (
          <tr
            key={item.id}
            className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
          >
            <td className="py-3 px-6">{item.id}</td>
            <td className="py-3 px-6">{item.city}</td>
            <td className="py-3 px-6">{item.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <>
    <Testimonials />
    <section className="relative w-full flex h-[630px]">
      <div className="w-3/4 bg-white px-12 flex flex-col justify-center">
        <h2 className="text-5xl font-extrabold text-gray-400 text-left mb-10">
          About Beladi
        </h2>
        <p className="text-black leading-relaxed text-justify">
          Beladi Salhapur village is located in the Roorkee block
          of Haridwar district. The village is governed by Beladi Salhapur Gram
          Panchayat. Its location code or village code No. is 056436 (according
          to census 2011). It is at a distance of 7 km from Roorkee and about
          350m from NH-58 which connects Roorkee to Haridwar. The nearest major
          Railway stations are Roorkee and Haridwar Junction. The total
          geographical area of the village is 248.77 hectares. Beladi Salhapur
          has a total population of 2500(approx.). The village consists of two
          sub-villages. The first one, known as ‘Old Beladi Salhapur’ is located
          on the right-hand side of the main road (Roorkee to Haridwar) and
          consists of approximately 450 households, and the other, known as ‘New
          Beladi Salhapur’ about 200m away. Nearly 70 per cent of the villagers
          are engaged in agriculture or agriculture related work, however the
          number of big farmers is very less, as majority of the farmers are low
          scale farmers. 20-25 % people work as agriculture and construction
          workers and the rest are engaged in either dairy or selling other
          animal products’ and a very few of them employed in the service sector
          (private companies etc.). There are two Government schools in this
          village for boys and girls. There is one Co-operative Society (more of
          a Self Help Group) in this village which provides loan to the
          villagers, however this society doesn’t function smoothly due to the
          lack of money within the group. Majority of the population are
          Scheduled Castes (SCs). The village has mainly two Castes, i.e.
          “Rhods” and “Sainis”. Apart from the houses of a few Upper Caste
          people, majority of the houses are made with bricks and have 1-2
          rooms. The main source of drinking water are the hand pumps
          (groundwater) installed almost at every house. Public water taps are
          also installed by the Government. The number of such taps is around
          20-30. But the taps remain dry most of the time as testified by the
          villagers. The home cleanliness level is decent but the village
          sanitation, cleanliness of ponds and other water bodies, the public
          drains and the scattered waste around the village presents a
          governance issue in the village.
        </p>
      </div>

      <div className="w-2/3 h-full relative">
        <img
          src={`${process.env.PUBLIC_URL}/about-us-bg.png`}
          alt="Background"
          className="w-full h-full object-cover object-right"
        />

        <img
          src={`${process.env.PUBLIC_URL}/auperson1.png`}
          alt="Person 1"
          className="absolute top-20 left-48 w-52 h-56 object-cover shadow-lg"
        />

        <img
          src={`${process.env.PUBLIC_URL}/auperson2.png`}
          alt="Person 2"
          className="absolute bottom-20 left-96 w-56 h-60 object-cover shadow-lg"
        />
      </div>
    </section>
    <div>
        <EventsSection />
    </div>


      <div className="flex flex-row">
      <Table1 />
      <Table2 />
    </div>

    </> 
  );
};

export default Beladi;
