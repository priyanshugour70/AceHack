import React from "react";
import AppointmentHistoryCard from "@/components/AppointmentHistoryCard";

const appointments = [
  {
    id: 1,
    name: "Shaktiman",
    title: "Dentist",
    date: "2022-03-15",
    time: "10:00 AM",
    location: "123 Main St",
  },
  {
    id: 2,
    name: "Shaktiman",
    title: "Doctor",
    date: "2022-03-20",
    time: "2:30 PM",
    location: "456 Oak St",
  },
  {
    id: 3,
    name: "Shaktiman",
    title: "Optometrist",
    date: "2022-03-25",
    time: "1:00 PM",
    location: "789 Maple Ave",
  },
];

const AppointmentsHistory = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">
        Appointment History
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {appointments.map((appointment) => (
          <AppointmentHistoryCard
            key={appointment.id}
            appointment={appointment}
          />
        ))}
      </div>
    </div>
  );
};

export default AppointmentsHistory;
