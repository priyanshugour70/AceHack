import React, { useState, useRef, useEffect } from "react";
import { BiMenuAltLeft} from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { MdCastForEducation } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const chatRef = useRef();
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className=" sticky top-0 flex justify-between bg-gray-100 text-gray-400 py-4  px-6 items-center">
      <div className="flex items-center">
        <button type="button" onClick={toggleChat}>
          <BiMenuAltLeft className="h-8 w-8 fill-current hover:text-blue-700 cursor-pointer text-blue-500" />
        </button>
      </div>

      <Link href={"/"}>
        <div className="flex justify-center items-center tracking-widest  uppercase font-semibold text-2xl text-gray-600">
          <span className=" text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 text-transparent bg-clip-text">
            Namaste
          </span>
          Hospital
        </div>
      </Link>
      <div
        ref={chatRef}
        className={` scrollbar-thin scrollbar-thumb-[#0c0e14]/20 scrollbar-track-[#0c0e14] transform duration-500 ease-in-out fixed top-0 bottom-0 left-0 md:w-[400px] w-80 z-50 overflow-y-auto bg-gray-200 ${
          isChatOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <div className="sticky top-0 bg-gray-200 flex justify-center items-center  border-gray-600 py-4 px-6 mb-4">
            <RxCross2
              className="h-8 w-8 absolute right-4 top-4 cursor-pointer text-blue-500 hover:text-blue-700  "
              onClick={() => setIsChatOpen(false)}
            />
          </div>

        
          <section className="my-10 space-y-3 ">
            <h3 className="font-semibold uppercase tracking-[6px] text-2xl text-gray-800 flex justify-center items-center  border-gray-600 py-2 mb-4">
              <MdCastForEducation className="text-blue-600 mx-3 text-3xl hover:border border-blue-800 rounded-xl hover:text-blue-800 hover:cursor-pointer hover:transition ease-in-out hover:rounded-full" />
              Doctors
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[350px] h-px bg-gray-600"></div>
            </div>
            <ul className="mx-4 space-y-2">
              <li className="flex items-center text-lg hover:border border-blue-800 rounded-xl hover:text-blue-800 hover:cursor-pointer hover:transition ease-in-out pl-2 px-2"> Home </li>
              <li className="flex items-center text-lg hover:border border-blue-800 rounded-xl hover:text-blue-800 hover:cursor-pointer hover:transition ease-in-out pl-2 px-2"> Appointments Today</li>
              <li className="flex items-center text-lg hover:border border-blue-800 rounded-xl hover:text-blue-800 hover:cursor-pointer hover:transition ease-in-out pl-2 px-2"> appointmentrs Requests</li>
              <li className="flex items-center text-lg hover:border border-blue-800 rounded-xl hover:text-blue-800 hover:cursor-pointer hover:transition ease-in-out pl-2 px-2"> Manage Apointments </li>
              
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
