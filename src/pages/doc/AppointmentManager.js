import React, { useState } from "react";

const AppointmentManager = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "John Doe",
      date: "2021-08-01",
      time: "10:00 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2021-08-02",
      time: "2:30 PM",
    },
  ]);

  const handleDelete = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4">Appointments</h1>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border px-4 py-2">{appointment.id}</td>
              <td className="border px-4 py-2">{appointment.name}</td>
              <td className="border px-4 py-2">{appointment.date}</td>
              <td className="border px-4 py-2">{appointment.time}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(appointment.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentManager;
