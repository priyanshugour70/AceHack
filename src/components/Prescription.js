import React from "react";
import { FaDownload } from "react-icons/fa";

const Prescription = ({ prescriptions }) => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-blue-600">
          Past Prescriptions
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {prescriptions.map((prescription) => (
            <div className="group " key={prescription.id}>
              <div className="w-full h-40 bg-blue-100 rounded-lg overflow-hidden group-hover:opacity-75">
                <div className="p-4">
                  <h3 className="text-sm font-medium text-blue-600 truncate">
                    {prescription.name}
                  </h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-700 truncate">
                    {prescription.details}
                  </p>
                </div>
                <div className="bg-blue-200 bg-opacity-50 p-4 flex justify-end">
                  <button className="text-gray-700 hover:text-gray-900" onClick={() => handleDownload(prescription)}>
                    <FaDownload className="mr-2 inline-block" />
               
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prescription;
