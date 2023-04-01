import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaUserMd,
  FaCalendarCheck,
  FaBriefcaseMedical,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 hsc flex justify-between bg-gray-200 shadow-md py-4 px-6 items-center">
      <Link href={"/"}>
        <div className="flex justify-center items-center tracking-widest uppercase font-normal text-2xl text-gray-600">
          <span className="text-2xl font-semibold text-blue-600">Namaste</span>{" "}
          Hospital
        </div>
      </Link>
      <div className="flex items-center">
        <button type="button" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="h-8 w-8 fill-current text-gray-700 hover:text-indigo-600 cursor-pointer" />
          ) : (
            <FaBars className="h-8 w-8 fill-current text-gray-700 hover:text-indigo-600 cursor-pointer" />
          )}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`scrollbar-thin scrollbar-thumb-gray-400/20 h-screen scrollbar-track-gray-100 transform duration-500 ease-in-out fixed top-0 right-0 md:w-[400px] w-96 z-50 overflow-y-auto bg-gray-200 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="">
          <FaTimes
            className="h-8 w-8 absolute right-4 top-4 text-gray-700 hover:text-indigo-600 cursor-pointer "
            onClick={() => setIsMenuOpen(false)}
          />
          <section className="my-10 space-y-6">
            <h3 className="font-normal uppercase tracking-[6px] text-2xl text-gray-800 flex justify-center items-center border-gray-600 py-2 mb-4">
              <FaUserMd className="text-blue-600 mx-3 text-3xl rounded-xl hover:text-indigo-600 hover:cursor-pointer hover:transition ease-in-out hover:rounded-full" />{" "}
              Doctors
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[300px] h-px bg-gray-600"></div>
            </div>
            <ul className="mx-7 space-y-3">
              <Link href={"/doc/"}>
                <li className=" py-2 flex items-center text-lg font-normal rounded-xl hover:text-indigo-600 hover:cursor-pointer hover:transition ease-in-out pl-2 px-2">
                  <FaBriefcaseMedical className="mr-2" /> Home{" "}
                </li>
              </Link>
              <Link href={"/doc/AppointmentsToday"}>
                <li className="py-2 flex items-center text-lg font-normal  rounded-xl hover:text-indigo-600 hover:cursor-pointer hover:transition ease-in-out pl-2 px-2">
                  <FaCalendarCheck className="mr-2" /> Appointments Today
                </li>
              </Link>
              <Link href={"/doc/AppointmentsRequest"}>
                <li className="py-2 flex items-center text-lg font-normal rounded-xl hover:text-indigo-600 hover:cursor-pointer hover:transition ease-in-out pl-2 px-2">
                  <FaCalendarCheck className="mr-2" /> Appointment Requests
                </li>
              </Link>
              <Link href={"/doc/"}>
                <li className="py-2 flex items-center text-lg font-normal rounded-xl hover:text-indigo-600 hover:cursor-pointer hover:transition ease-in-out pl-2 px-2">
                  <FaBriefcaseMedical className="mr-2" /> Manage Appointments{" "}
                </li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;