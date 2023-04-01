import { useState, useEffect } from "react";
import Head from "next/head";
import AppointmentsForDay from "@/components/AppointmentsForDay";

export default function AppointmentsToday() {

  return (
    <div className="container mx-auto">
      <AppointmentsForDay/>
    </div>
  );
}
