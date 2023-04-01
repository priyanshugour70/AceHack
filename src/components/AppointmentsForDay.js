import { useState, useEffect } from "react";
import { ClockIcon } from "@heroicons/react/solid";

export default function AppointmentsForDay() {
  const [appointments, setAppointments] = useState([]);

  // Dummy data for testing purposes
const dummyData = [
  { id: 1, time: { start: "9:00 AM", end: "10:00 AM" }, patientName: "John Doe" },
  { id: 2, time: { start: "10:30 AM", end: "11:30 AM" }, patientName: "Jane Smith" },
  { id: 3, time: { start: "12:00 PM", end: "1:00 PM" }, patientName: "Bob Johnson" },
  { id: 4, time: { start: "2:00 PM", end: "3:00 PM" }, patientName: "Alice Lee" },
];


  useEffect(() => {
    // Fetch data here
    setAppointments(dummyData);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-800 mt-6 mb-4">
        Appointments for Today
      </h1>

      {appointments.map((appointment) => (
        <li key={appointment.id} className="py-4 flex space-x-3">
          <ClockIcon className="h-7 w-7 text-gray-600 flex-shrink-0 mt-1" />
          <div className="flex-1 min-w-0">
            <p className="text-lg font-medium text-gray-800">
              {appointment.patientName}
            </p>
            <p className="text-sm text-gray-500">{`${appointment.time.start} - ${appointment.time.end}`}</p>
          </div>
          
        </li>
        
      ))}
     
    </div>
  );
}
