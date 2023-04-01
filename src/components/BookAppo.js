import { useState } from "react";
import { useRouter } from "next/router";

const timeslots = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: false },
  { time: "11:00 AM", available: true },
  { time: "12:00 PM", available: false },
  { time: "1:00 PM", available: true },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: true },
  { time: "4:00 PM", available: false },
];

const BookAppointment = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const router = useRouter();

  const handleTimeClick = (time) => {
    if (!time.available) {
      return;
    }

    setSelectedTime(time.time);
    router.push("/patient/AppointmentForm");
  };

  return (
    <div className="bg-gray-100 p-8 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Book an appointment</h2>
      <p className="mb-8">
        Select an available time slot for your appointment below:
      </p>
      <div className="grid grid-cols-3 gap-4">
        {timeslots.map((slot) => (
          <div
            key={slot.time}
            className={`${
              slot.available
                ? "bg-white hover:bg-blue cursor-pointer"
                : "bg-gray-200 text-gray-500"
            } py-4 px-6 rounded-md`}
            onClick={() => handleTimeClick(slot)}
          >
            <span className="font-bold">{slot.time}</span>
            <br />
            <span>{slot.available ? "Available" : "Not Available"}</span>
          </div>
        ))}
      </div>
      {selectedTime && (
        <div className="mt-8 bg-blue text-white py-4 px-6 rounded-md">
          <p className="font-bold">You have selected:</p>
          <p>{selectedTime}</p>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
