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
  const [bigNav, setBigNav] = useState(true);
  return (
    <nav
      className={
        bigNav
          ? "group fixed bottom-[-0.1rem] w-full h-14 flex justify-center items-s text-primary-text bg-secondary-bg border-t border-card-section-secondary-color lg:flex-col lg:w-64 lg:h-full lg:border-t-0 lg:border-r lg:justify-start lg:pt-5 lg:gap-0 duration-300"
          : "fixed bottom-[-0.1rem] w-full h-14 flex justify-center items-s text-primary-text bg-secondary-bg border-t border-card-section-secondary-color lg:flex-col lg:w-24 lg:h-full lg:border-t-0 lg:border-r lg:justify-start lg:pt-5 lg:gap-0 transition-all duration-300"
      }
    >
      <Image
        src={bigNav ? MobillsLg : MobillsMd}
        alt="Mobills Logo"
        width={bigNav ? 144 : 48}
        height={bigNav ? 48 : 48}
        className={
          bigNav
            ? "hidden w-36 h-12 ml-7 lg:block animate-[all 0.32s ease-out 0s] duration-300"
            : "hidden w-10 h-10 ml-7 lg:block animate-[all_0.32s_ease-in_0s] duration-300"
        }
      />
      <div className="hidden lg:flex lg:flex-start">
        <div className={bigNav ? "flex gap-12" : "flex gap-2"}>
          <button
            className={
              bigNav
                ? "hidden justify-end items-center bg-mobills-color w-44 h-14 rounded-full text-white p-4 ml-4 mb-5 mt-4 shadow-md duration-300 lg:flex flex-row-reverse gap-10"
                : "hidden justify-end items-center bg-mobills-color w-14 h-14 rounded-full text-white p-4 ml-4 mb-5 mt-4 shadow-md duration-300 lg:flex flex-row-reverse gap-10"
            }
          >
            {bigNav && <p className="origin-left duration-300">New</p>}
            <FiPlus className="text-2xl duration-300" />
          </button>
          <button
            className={
              bigNav
                ? "hidden bg-secondary-bg rounded-full shadow-md shadow-primary-bg text-white w-7 h-7 justify-center items-center group-hover:flex"
                : "hidden bg-secondary-bg rounded-full shadow-md shadow-primary-bg text-white w-7 h-7 justify-center items-center lg:flex"
            }
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
          className={
            bigNav
              ? "w-20 flex justify-center items-center gap-9 text-xs lg:text-mobills-color lg:hover:bg-navbar-hover lg:w-[255px] lg:h-[56px] lg:border-l-4 lg:border-mobills-color lg:text-[16px] duration-300"
              : "w-20 flex flex-col justify-center items-center gap-1 text-xs lg:text-mobills-color lg:hover:bg-navbar-hover lg:w-[94px] lg:h-[56px] lg:border-l-4 lg:border-mobills-color duration-300"
          }
        >
          <FiHome className="text-2xl" />
          <span
            className={
              bigNav ? "lg:w-28 origin-left" : " lg:hidden lg:mr-12 origin-left"
            }
          >
            DashBoard
          </span>
        </Link>
        <Link
          href="/"
          className={
            bigNav
              ? "w-20 flex justify-center items-center gap-9 text-xs lg:hover:bg-navbar-hover lg:w-[255px] lg:h-[56px] lg:text-[16px] duration-300"
              : "hidden w-20 flex-col justify-center items-center gap-1 text-xs lg:hover:bg-navbar-hover lg:w-[94px] lg:h-[56px] lg:flex  duration-300"
          }
        >
          <AiOutlineBank className="text-2xl " />
          <span
            className={
              bigNav ? "lg:w-28 origin-left" : "lg:hidden lg:mr-12 origin-left"
            }
          >
            Account
          </span>
        </Link>
        <Link
          href="/"
          className={
            bigNav
              ? "w-20 flex justify-center items-center gap-9 text-xs lg:hover:bg-navbar-hover lg:w-[255px] lg:h-[56px] lg:text-[16px] duration-300"
              : "w-20 flex flex-col justify-center items-center gap-1 text-xs lg:hover:bg-navbar-hover lg:w-[94px] lg:h-[56px]  duration-300"
          }
        >
          <IoList className="text-2xl" />
          <span
            className={
              bigNav ? "lg:w-28 origin-left" : " lg:hidden lg:mr-12 origin-left"
            }
          >
            Transactions
          </span>
        </Link>

        <Link
          href="/"
          className={
            bigNav
              ? "w-20 flex justify-center items-center gap-9 text-xs lg:hover:bg-navbar-hover lg:w-[255px] lg:h-[56px] lg:text-[16px] duration-300"
              : "hidden w-20 flex-col justify-center items-center gap-1 text-xs lg:hover:bg-navbar-hover lg:w-[94px] lg:h-[56px] lg:flex  duration-300"
          }
        >
          <BsCreditCard2Back className="text-2xl" />
          <span
            className={
              bigNav ? "lg:w-28 origin-left" : " lg:hidden lg:mr-12 origin-left"
            }
          >
            Credit cards
          </span>
        </Link>

        <button className="flex flex-col justify-center items-center text-xs">
          <FiPlus className="bg-mobills-color w-14 h-14 rounded-full text-white p-2 mb-6 lg:mb-0 lg:hidden" />
        </button>

        <Link
          href="/"
          className={
            bigNav
              ? "w-20 flex justify-center items-center gap-9 text-xs lg:hover:bg-navbar-hover lg:w-[255px] lg:h-[56px] lg:text-[16px] duration-300"
              : "w-20 flex flex-col justify-center items-center gap-1 text-xs lg:hover:bg-navbar-hover lg:w-[94px] lg:h-[56px]  duration-300"
          }
        >
          <BiFlag className="text-2xl" />
          <span
            className={
              bigNav ? "lg:w-28 origin-left" : " lg:hidden lg:mr-12 origin-left"
            }
          >
            Budgets
          </span>
        </Link>

        <Link
          href="/"
          className={
            bigNav
              ? "w-20 flex justify-center items-center gap-9 text-xs lg:hover:bg-navbar-hover lg:w-[255px] lg:h-[56px] lg:text-[16px] duration-300"
              : "hidden w-20 flex-col justify-center items-center gap-1 text-xs lg:hover:bg-navbar-hover lg:w-[94px] lg:h-[56px] lg:flex   duration-300"
          }
        >
          <MdDataSaverOff className="text-2xl" />
          <span
            className={
              bigNav ? "lg:w-28 origin-left" : " lg:hidden lg:mr-12 origin-left"
            }
          >
            Reports
          </span>
        </Link>
        <Link
          href="/"
          className={
            bigNav
              ? "w-20 flex justify-center items-center gap-9 text-xs lg:hover:bg-navbar-hover lg:w-[255px] lg:h-[56px] lg:text-[16px] duration-300"
              : "w-20 flex flex-col justify-center items-center gap-1 text-xs lg:hover:bg-navbar-hover lg:w-[94px] lg:h-[56px]  duration-300"
          }
        >
          <TfiMoreAlt className="text-2xl" />
          <span
            className={
              bigNav ? "lg:w-28 origin-left" : " lg:hidden lg:mr-12 origin-left"
            }
          >
            More
          </span>
        </Link>

        <Link
          href="/"
          className={
            bigNav
              ? "w-20 flex justify-center items-center gap-9 text-xs lg:hover:bg-navbar-hover lg:w-[255px] lg:h-[56px] lg:text-[16px] duration-300"
              : "hidden w-20 flex-col justify-center items-center gap-1 text-xs lg:hover:bg-navbar-hover lg:w-[94px] lg:h-[56px] lg:flex  duration-300"
          }
        >
          <FiSettings className="text-2xl" />
          <span
            className={
              bigNav ? "lg:w-28 origin-left" : "lg:hidden lg:mr-12 origin-left"
            }
          >
            Settings
          </span>
        </Link>
      </div>

      <Link
        href="/"
        className={
          bigNav
            ? "w-20 flex justify-center items-center gap-9 text-xs mt-72 lg:hover:bg-navbar-hover lg:w-[255px] lg:h-[56px] lg:text-[16px] duration-300"
            : "hidden w-20 flex-col justify-center items-center gap-1 text-xs mt-72 lg:hover:bg-navbar-hover lg:w-[94px] lg:h-[56px] lg:flex  duration-300"
        }
      >
        <BiHelpCircle className="text-2xl" />
        <span
          className={
            bigNav ? "lg:w-28 origin-left" : "lg:hidden lg:mr-12 origin-left"
          }
        >
          Help Center
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
