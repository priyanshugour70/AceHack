import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

const LabReport = () => {
    return (
        <>
            <LabRep name="Shan" type="Babasir" result="Abhi thik nhi hua " />
        </>
    );
};

const LabRep = ({ name, type, result }) => {
  return(
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Lab Report</h1>
            <p className="mb-4">
                Patient Name: <span className="font-bold">{name}</span>
            </p>
            <p className="mb-4">
                Test Type: <span className="font-bold">{type}</span>
            </p>
            <p className="mb-4">
                Test Results: <span className="font-bold">{result}</span>
            </p>
        </div>
    </div>
  )
};

export default LabReport;
