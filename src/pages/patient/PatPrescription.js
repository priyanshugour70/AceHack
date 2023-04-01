import React from "react";
import Prescription from "@/components/Prescription";

const dummyData = [
  {
    id: 1,
    name: "Loratadine",
    details: "10mg, once per day for allergies",
  },
  {
    id: 2,
    name: "Ibuprofen",
    details: "200mg, three times per day for pain and inflammation",
  },
  {
    id: 3,
    name: "Amoxicillin",
    details: "500mg, twice per day for bacterial infection",
  },
];

const App = () => {
  return (
    <div className="h-screen bg-gray-100">
     
      <Prescription prescriptions={dummyData} />
    </div>
  );
};

export default App;
