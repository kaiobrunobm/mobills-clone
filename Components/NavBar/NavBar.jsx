"use client";

import { FiHome, FiPlus, FiSettings } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiFlag, BiHelpCircle } from "react-icons/bi";
import { AiOutlineBank } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { MdDataSaverOff } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import MobillsMd from "/public/mobills-md-logo.svg";
import MobillsLg from "/public/mobills-lg-logo.svg";
import { useState } from "react";
const NavBar = () => {
  const [bigNav, setBigNav] = useState(false);

  return (
    <nav
      className={`group fixed bottom-[-0.1rem] w-full flex justify-center items-center text-primary-text bg-secondary-bg border-t border-card-section-secondary-color lg:flex-col lg:h-full  lg:border-t-0 lg:border-r lg:justify-start lg:pt-5 lg:gap-0 lg:top-0 ${
        bigNav ? "w-full lg:w-64 duration-300" : "h-14 lg:w-24 duration-300"
      }`}
    >
      <Image
        src={bigNav ? MobillsLg : MobillsMd}
        alt="Mobills Logo"
        width={bigNav ? 144 : 48}
        height={bigNav ? 48 : 48}
        className={`hidden lg:block duration-300 ${
          bigNav
            ? "w-36 h-12 animate-[all 0.32s ease-out 0s]"
            : "w-10 h-10 animate-[all_0.32s_ease-in_0s]"
        }`}
      />
      <div className="hidden lg:flex lg:flex-start">
        <div className={`flex ${bigNav ? "gap-10" : "gap-1"}`}>
          <button
            className={`hidden  justify-end items-center bg-[#774ffc] h-14 rounded-full text-white p-4 ml-9 mb-5 mt-4 shadow-lg shadow-primary-bg duration-300 lg:flex flex-row-reverse gap-10 hover:bg-[#6515dd] ${
              bigNav ? "w-44" : "w-14"
            }`}
          >
            {bigNav && <p className="origin-left duration-300">New</p>}
            <FiPlus className="text-2xl duration-300" />
          </button>
          <button
            className={`bg-secondary-bg rounded-full shadow-md shadow-primary-bg text-white w-7 h-7 justify-center items-center duration-500 lg:flex ${
              bigNav && "invisible group-hover:visible"
            }`}
            onClick={() => {
              setBigNav(!bigNav);
            }}
          >
            {bigNav ? (
              <FaChevronRight className="text-xs transition-transform rotate-180 duration-300" />
            ) : (
              <FaChevronRight className="text-xs duration-300" />
            )}
          </button>
        </div>
      </div>
      <div className="flex lg:mt-2 lg:flex lg:flex-col lg:items-start">
        <Link
          href="/"
          className={`text-mobills-color lg:border-l-4 lg:border-mobills-color ${
            bigNav ? "navbar-active-link" : "navbar-link"
          }`}
        >
          <FiHome className="text-2xl " />
          <span
            className={`origin-left ${
              bigNav ? "lg:w-28" : "lg:hidden lg:mr-12"
            }`}
          >
            DashBoard
          </span>
        </Link>
        <Link
          href="/Account"
          className={
            bigNav ? "navbar-active-link" : "navbar-link hidden lg:flex"
          }
        >
          <AiOutlineBank className="text-2xl " />
          <span
            className={`origin-left ${
              bigNav ? "lg:w-28" : "lg:hidden lg:mr-12"
            }`}
          >
            Account
          </span>
        </Link>
        <Link
          href="/Transactions"
          className={bigNav ? "navbar-active-link" : "navbar-link"}
        >
          <IoList className="text-2xl" />
          <span
            className={`origin-left ${
              bigNav ? "lg:w-28" : " lg:hidden lg:mr-12"
            }`}
          >
            Transactions
          </span>
        </Link>
        <Link
          href="/CreditCard"
          className={
            bigNav ? "navbar-active-link" : "hidden lg:flex navbar-link"
          }
        >
          <BsCreditCard2Back className="text-2xl" />
          <span
            className={`origin-left ${
              bigNav ? "lg:w-28" : " lg:hidden lg:mr-12"
            }`}
          >
            Credit cards
          </span>
        </Link>
        <button className="flex justify-center items-center text-xs">
          <FiPlus className="bg-mobills-color w-14 h-14 rounded-full text-white p-2 mb-6 lg:mb-0 lg:hidden" />
        </button>
        <Link
          href="/Budgets"
          className={bigNav ? "navbar-active-link" : "navbar-link"}
        >
          <BiFlag className="text-2xl" />
          <span
            className={`origin-left ${
              bigNav ? "lg:w-28" : " lg:hidden lg:mr-12"
            }`}
          >
            Budgets
          </span>
        </Link>
        <Link
          href="/Reports"
          className={
            bigNav ? "navbar-active-link" : "hidden lg:flex  navbar-link"
          }
        >
          <MdDataSaverOff className="text-2xl" />
          <span
            className={`origin-left ${
              bigNav ? "lg:w-28" : " lg:hidden lg:mr-12"
            }`}
          >
            Reports
          </span>
        </Link>
        <Link
          href="/"
          className={bigNav ? "navbar-active-link" : "navbar-link"}
        >
          <TfiMoreAlt className="text-2xl" />
          <span
            className={`origin-left ${
              bigNav ? "lg:w-28" : " lg:hidden lg:mr-12"
            }`}
          >
            More
          </span>
        </Link>
        <Link
          href="/Settings"
          className={
            bigNav ? "navbar-active-link" : "hidden lg:flex navbar-link"
          }
        >
          <FiSettings className="text-2xl" />
          <span
            className={`origin-left ${
              bigNav ? "lg:w-28" : " lg:hidden lg:mr-12"
            }`}
          >
            Settings
          </span>
        </Link>
      </div>
      <Link
        href="/"
        className={`w-20 flex justify-center items-center text-xs mt-72 lg:hover:bg-navbar-hover lg:h-[56px] duration-300 ${
          bigNav
            ? "gap-9 lg:w-[255px] lg:text-base"
            : "hidden flex-col gap-1 lg:w-[94px] lg:flex"
        }`}
      >
        <BiHelpCircle className="text-2xl" />
        <span
          className={`origin-left ${
            bigNav ? "lg:w-28" : " lg:hidden lg:mr-12"
          }`}
        >
          Help Center
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
