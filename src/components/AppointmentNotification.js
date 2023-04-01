import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const AppointmentRequest = ({ name, date, time }) => {
  return (
    <p className="text-lg font-medium text-gray-800">
      {`New appointment request from ${name} on ${date} at ${time}`}
    </p>
  );
};

const ActionButton = ({ onClick, text, color, icon }) => {
  const Icon = icon;

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg shadow-sm bg-${color}-500 text-white hover:bg-${color}-600 focus:outline-none focus:ring-2 focus:ring-${color}-400`}
    >
      <Icon className="inline-block mr-2" />
      {text}
    </button>
  );
};

const AppointmentNotification = ({
  appointments,
  handleAccept,
  handleReject,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="flex items-center justify-between my-4 border-b border-gray-300 pb-4"
        >
          <AppointmentRequest
            name={appointment.name}
            date={appointment.date}
            time={appointment.time}
          />
          <div className="flex space-x-3">
            <ActionButton
              onClick={() => handleAccept(appointment)}
              text="Accept"
              color="green"
              icon={FaCheck}
            />
            <ActionButton
              onClick={() => handleReject(appointment)}
              text="Reject"
              color="red"
              icon={FaTimes}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentNotification;
