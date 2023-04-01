import React, { useState, useRef, useEffect } from "react";
import { BiMenuAltLeft, BiSupport } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { MdCastForEducation } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiGooglemarketingplatform } from "react-icons/si";
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
    <header className=" sticky top-0 flex justify-between bg-[#0c0e14] text-gray-400 py-4  px-6 items-center">
      <div className="flex items-center">
        <button type="button" onClick={toggleChat}>
          <BiMenuAltLeft className="h-8 w-8 fill-current hover:text-blue-700 cursor-pointer text-blue-500" />
        </button>
      </div>

      <Link href={"/"}>
        <div className="flex justify-center items-center tracking-widest  uppercase font-semibold text-2xl text-gray-200">
          <span className=" text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 text-transparent bg-clip-text">
            Namaste
          </span>
          Hospital
        </div>
      </Link>
      <div
        ref={chatRef}
        className={` scrollbar-thin scrollbar-thumb-[#0c0e14]/20 scrollbar-track-[#0c0e14] transform duration-500 ease-in-out fixed top-0 bottom-0 left-0 md:w-[400px] w-80 z-50 overflow-y-auto bg-[#0c0e14] ${
          isChatOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <div className="sticky top-0 bg-[#0c0e14] flex justify-center items-center  border-gray-600 py-4 px-6 mb-4">
          
            <RxCross2
              className="h-8 w-8 absolute right-4 top-4 cursor-pointer text-blue-500 hover:text-blue-700  "
              onClick={() => setIsChatOpen(false)}
            />
          </div>

          <section className="my-4 space-y-3">
            <h3 className="mainHead">
              <HiUsers className="mainHeadIcon" />
              Users
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[350px] h-px bg-gray-600"></div>
            </div>
            <div className="space-y-2 mx-4 ">
              <Link href={"/Users/User"}>
                <div className="subHead">Users</div>
              </Link>
              <Link href={"/Users/Instructors"}>
                <div className="subHead">
                  <span>Instructors</span>
                </div>
              </Link>

              <Link href={"/Users/Register"}>
                <div className="subHead">
                  <span>Register Now</span>
                </div>
              </Link>
            </div>
          </section>

          <section className="my-10 space-y-3 ">
            <h3 className="mainHead">
              <MdCastForEducation className="mainHeadIcon" />
              Education
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[350px] h-px bg-gray-600"></div>
            </div>
            <ul className="mx-4 space-y-2">
              <Link href={"/Education/Course"}>
                <li className="subHead"> Course </li>
              </Link>

              <Link href={"/Education/CertificatePage"}>
                <li className="subHead"> Certificates</li>
              </Link>
              <Link href={"/Education/VideoConferencing"}>
                <li className="subHead"> Video conferencing</li>
              </Link>
              <Link href={"/Education/ProgressTracking"}>
                <li className="subHead"> Progress tracking</li>
              </Link>
              <Link href={"/Education/ClassManagement"}>
                <li className="subHead"> Class management</li>
              </Link>
            </ul>
          </section>

          <section className="my-10 space-y-3 ">
            <h3 className="mainHead">
              <SiGooglemarketingplatform className="mainHeadIcon " />
              Marketing
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[350px] h-px bg-gray-600"></div>
            </div>
            <ul className="mx-4 space-y-2">
              <Link href={"/Marketing/Coupon"}>
                <li className="subHead">Coupon</li>
              </Link>
              <Link href={"/Marketing/Wallet"}>
                <li className="subHead">Wallet</li>
              </Link>
              <Link href={"/Marketing/NotificationForm"}>
                <li className="subHead">Push Notification</li>
              </Link>
              <Link href={"/Marketing/FlashDealsPage"}>
                <li className="subHead">Flash Deals</li>
              </Link>
            </ul>
          </section>

          <section className="my-10 space-y-3 ">
            <h3 className="mainHead">
              <GiTakeMyMoney className="mainHeadIcon" />
              Financial
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[350px] h-px bg-gray-600"></div>
            </div>
            <ul className="mx-4 space-y-2">
              <Link href={"/Finance/Order"}>
                <li className="subHead">Order </li>
              </Link>
              <Link href={"/Finance/Payment"}>
                <li className="subHead"> Payment & Subscription</li>
              </Link>
              <Link href={"/Finance/Invoices"}>
                <li className="subHead">Your Invoices </li>
              </Link>
            </ul>
          </section>
          {/* 
          <section className="my-10 space-y-3 ">
            <h3 className="mainHead">
              <MdOutlineContentPasteSearch className="mainHeadIcon" />
              Content
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[350px] h-px bg-gray-600"></div>
            </div>
            <ul className="mx-4 space-y-2">


            </ul>
          </section> */}

          {/* <section className="my-10 space-y-3 ">
            <h3 className="mainHead">
              <RiSettings2Line className="mainHeadIcon" />
              Setting
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[350px] h-px bg-gray-600"></div>
            </div>
            <ul className="mx-4 space-y-2">
              <li className="subHead">Get API Keys</li>
              <li className="subHead">Currency</li>
              <li className="subHead">Themes</li>
              <li className="subHead">Mobile Setting</li>
              <li className="subHead">QR Setting</li>
              <li className="subHead">Front Setting</li>
              <li className="subHead">Site Setting</li>
              <li className="subHead">Payment Setting</li>
              <li className="subHead">Player Settings</li>
            </ul>
          </section> */}

          <section className="my-10 space-y-3 ">
            <h3 className="mainHead">
              <BiSupport className="mainHeadIcon" />
              Support
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[350px] h-px bg-gray-600"></div>
            </div>
            <ul className="mx-4 space-y-2">
              <Link href={"/Support/Faq"}>
                <li className="subHead">Faq</li>
              </Link>
              <Link href={"/Support/ContactUs"}>
                <li className="subHead">Contact Us</li>
              </Link>
              <Link href={"/Support/Help"}>
                <li className="subHead">Help &amp; Support</li>
              </Link>
            </ul>
          </section>
          <section className="my-10 space-y-3 ">
            <h3 className="mainHead">
              <BiSupport className="mainHeadIcon" />
              Additional
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-[350px] h-px bg-gray-600"></div>
            </div>
            <ul className="mx-4 space-y-2">
              <Link href={"/Additionals/About"}>
                <li className="subHead">About</li>
              </Link>
              <Link href={"/Additionals/Feedback"}>
                <li className="subHead">Feedback</li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
