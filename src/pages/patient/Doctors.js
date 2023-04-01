import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

const doctors = [
  {
    name: "Dr. John Smith",
    type: "Cardiologist",
    pic: "/dr-john-smith.jpg",
    rating: 4,
  },
  {
    name: "Dr. Sarah Johnson",
    type: "Dermatologist",
    pic: "/dr-sarah-johnson.jpg",
    rating: 5,
  },
  {
    name: "Dr. Mark Davis",
    type: "Orthopedist",
    pic: "/dr-mark-davis.jpg",
    rating: 3.5,
  },
  {
    name: "Dr. Jane Lee",
    type: "Ophthalmologist",
    pic: "/dr-jane-lee.jpg",
    rating: 4.5,
  },
];

function DoctorCard({ name, type, pic, rating }) {
  return (
    <div className="bg-gray-100 rounded-md shadow-md mx-auto mb-6">
      <div className="relative w-96 h-auto bg-gray-100">
        <Image className="rounded-t-md" src={pic} alt={name} layout="fill" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-medium text-gray-800">{name}</h2>
        <p className="text-sm font-medium text-gray-500 mt-1">{type}</p>
        <div className="flex items-center mt-4">
          {Array.from({ length: rating }, (_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-blue-500" />
          ))}
          {Array.from({ length: 5 - rating }, (_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-gray-400" />
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 mt-4 transition-colors duration-300 ease-in-out">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default function Doctors() {
  const [filter, setFilter] = useState("");

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  const filteredDoctors = filter
    ? doctors.filter((doctor) => doctor.type === filter)
    : doctors;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Browse Doctors</h1>

      <div className="flex items-center mb-8">
        <label htmlFor="filter" className="mr-4 text-gray-600 font-medium">
          Filter by:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="border border-gray-400 p-2 rounded-lg text-gray-600 focus:outline-none focus:shadow-outline-blue transition-all duration-300 ease-in-out"
        >
          <option value="">All types</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Orthopedist">Orthopedist</option>
          <option value="Ophthalmologist">Ophthalmologist</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.name}
            name={doctor.name}
            type={doctor.type}
            pic={doctor.pic}
            rating={doctor.rating}
          />
        ))}
      </div>

   
    </div>
  );
}
