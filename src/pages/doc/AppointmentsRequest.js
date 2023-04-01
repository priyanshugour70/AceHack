
import React, { useState } from "react";
import AppointmentNotification from "@/components/AppointmentNotification";

function AppointmentsRequest() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "John Doe",
      date: "2023-04-05",
      time: "10:00 AM",
      status: "pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2023-04-07",
      time: "2:30 PM",
      status: "pending",
    },
    {
      id: 3,
      name: "Bob Johnson",
      date: "2023-04-10",
      time: "11:15 AM",
      status: "pending",
    },
  ]);

  const handleAccept = (appointment) => {
    const updatedAppointments = appointments.map((app) => {
      if (app.id === appointment.id) {
        return { ...app, status: "accepted" };
      }
      return app;
    });
    setAppointments(updatedAppointments);
  };

  const handleReject = (appointment) => {
    const updatedAppointments = appointments.map((app) => {
      if (app.id === appointment.id) {
        return { ...app, status: "rejected" };
      }
      return app;
    });
    setAppointments(updatedAppointments);
  };

  return (
    <div className="h-screen bg-gray-100 pt-10">
      <div className="  bg-gray-100 h-screen  flex flex-col items-center ">
        <h1 className="text-4xl font-bold mb-8 text-blue-500">
          Appointment Requests
        </h1>
        <AppointmentNotification
          appointments={appointments}
          handleAccept={handleAccept}
          handleReject={handleReject}
        />
      </div>
    </div>
  );
}

export default AppointmentsRequest;

