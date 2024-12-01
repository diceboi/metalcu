"use client"

import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPerson, BsCart2, BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Label from "./Typo/Label";
import { useState, useContext, useEffect, useRef } from "react";
import { Context } from "@/app/Context";
import { motion } from "framer-motion";

export default function MainNav() {

  const { toggleSideMenu, isSideMenuOpen } = useContext(Context)
  const sideMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        // Close the menu if clicking outside
        if (isSideMenuOpen) toggleSideMenu();
      }
    };

    // Attach event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideMenuOpen, toggleSideMenu]);

  return (
    <>
    <nav className="sticky top-0 w-full border-b border-[--grey-border] z-50 bg-[--lightgrey-bg] backdrop-blur-md hover:shadow-md transition-all">
      {/*<div className="w-full bg-black px-4">
            <ul className="container m-auto flex flex-nowrap gap-4 items-center justify-end min-h-[30px]">
                <Link href='/'><li className="text-white hover:underline"><Label>
                    Rólunk
                </Label></li></Link>
                <Link href='/'><li className="text-white hover:underline"><Label>
                    Szállítás
                </Label></li></Link>
                <Link href='/'><li className="text-white hover:underline"><Label>
                    ÁSZF
                </Label></li></Link>
                <Link href='/'><li className="text-white hover:underline"><Label>
                    Adatkezelési tájékoztató
                </Label></li></Link>
            </ul>
        </div>*/}

      <div className="container m-auto flex flex-nowrap items-center justify-between">
        <div className="flex flex-nowrap">
            <Link
            href="/"
            className="flex flex-col justify-center items-center px-4 h-full lg:min-w-[250px] min-w-[100px] lg:border-x border-r border-[--grey-border] lg:min-h-[75px] min-h-[50px] hover:bg-[--lightgrey-hover] transition-all duration-400"
            >
            <Image
                src={"/logos/metalcu-base-logo.svg"}
                width={200}
                height={100}
                className="lg:w-[250px] w-[100px]"
            />
            </Link>

            <div className="flex flex-col items-center justify-center border-r border-[--grey-border]">
            <button  onClick={toggleSideMenu} className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] lg:min-h-[75px] min-h-[50px] lg:min-w-[75px] min-w-[50px] transition-all duration-400">
                <RxHamburgerMenu className="w-6 h-6" />
            </button>
            </div>  

            <div className="lg:flex hidden flex-col items-center justify-center">
            <Link href="/femlemezek" className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] min-h-[75px] min-w-[75px] px-4 transition-all duration-400">
                Fémlemezek
            </Link>
            </div>  

            <div className="lg:flex hidden flex-col items-center justify-center">
            <Link href="/szolgaltatasok" className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] min-h-[75px] min-w-[75px] px-4 transition-all duration-400">
                Szolgáltatások
            </Link>
            </div>

            <div className="lg:flex hidden flex-col items-center justify-center">
            <Link href="/kapcsolat" className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] min-h-[75px] min-w-[75px] px-4 transition-all duration-400">
                Kapcsolat
            </Link>
            </div>
        </div>
        

        {/*<div className="relative w-full">
                <input 
                    type="text"
                    className=" w-full focus:bg-none bg-transparent min-h-[75px] px-8 focus:outline-none border-r border-[--grey-border] placeholder-neutral-500  transition-all duration-400"
                    placeholder="Keresés név, cikkszám, vagy tulajdonság alapján..."
                />
                <BsSearch className="absolute top-1/2 -translate-y-1/2 right-[30px] w-4 h-4"/>
            </div>*/}

        <div className="flex flex-nowrap self-end">
          <div className="flex flex-col items-center justify-center border-x border-[--grey-border]">
            <button className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] lg:min-h-[75px] min-h-[50px] lg:min-w-[75px] min-w-[50px] transition-all duration-400">
              <BsPerson className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center border-r-0 lg:border-r border-[--grey-border]">
            <button className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] lg:min-h-[75px] min-h-[50px] lg:min-w-[75px] min-w-[50px] transition-all duration-400">
              <BsCart2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    <nav className={`${isSideMenuOpen ? 'opacity-100 w-[100vw]' : 'opacity-0 w-[0vh]'} fixed left-0 top-0 h-full backdrop-brightness-50 z-50 transition-all`}>
      <div ref={sideMenuRef} className={`${isSideMenuOpen ? 'fixed left-0' : 'fixed -left-80'} flex flex-col gap-4 w-80 h-full bg-[--lightgrey] transition-all delay-200 p-8`}>
        <AiOutlineClose onClick={toggleSideMenu} className="self-end min-w-8 min-h-8 cursor-pointer hover:bg-white"/>
        <input 
            type="text"
            className=" w-full focus:bg-none bg-transparent min-h-[75px] px-8 focus:outline-none border border-[--grey-border] placeholder-neutral-500  transition-all duration-400"
            placeholder="Keresés név, cikkszám, vagy tulajdonság alapján..."
        />
        <div className="flex flex-col items-center justify-center">
            <Link href="/femlemezek" className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] min-h-[75px]  w-full px-4 transition-all duration-400">
                Fémlemezek
            </Link>
            </div>  

            <div className="flex flex-col items-center justify-center">
            <Link href="/szolgaltatasok" className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] min-h-[75px]  w-full px-4 transition-all duration-400">
                Szolgáltatások
            </Link>
            </div>

            <div className="flex flex-col items-center justify-center">
            <Link href="/kapcsolat" className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] min-h-[75px] w-full px-4 transition-all duration-400">
                Kapcsolat
            </Link>
            </div>
      </div>
    </nav>
    </>
  );
}
