import { useState } from "react";

const AppointmentForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
  };

  return (
    <div className="items-center justify-center flex pt-14">
      <form
        className="bg-white w-[1000px] rounded-lg shadow-md p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
          Book an Appointment
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formValues.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formValues.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{10}"
              value={formValues.phone}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formValues.date}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Time<span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formValues.time}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Reason for Appointment<span className="text-red-500">*</span>
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="3"
              required
              value={formValues.reason}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent resize-none"
            ></textarea>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-blue hover:bg-blue-dark text-white py-2 px-6 rounded-md transition-colors duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
