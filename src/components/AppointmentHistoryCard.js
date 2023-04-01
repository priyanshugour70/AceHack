import React from "react";

const AppointmentHistoryCard = ({ appointment }) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden m-4">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-700 mb-2">{appointment.name}</h2>
        <p className="text-gray-500 font-semibold">{appointment.title}</p>
        <p className="text-gray-500 text-base">{appointment.date}</p>
        <p className="text-gray-500 text-base">{appointment.time}</p>
        <p className="text-gray-500 text-base">{appointment.location}</p>
      </div>
    </div>
  );
};

export default AppointmentHistoryCard;
