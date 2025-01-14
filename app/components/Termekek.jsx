"use client";

import Container from "./UI/Container";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import Image from "next/image";
import Link from "next/link";
import Smalltitle from "./UI/Typo/Smalltitle";
import Mainbutton from "./UI/Buttons/Mainbutton";
import { motion } from "framer-motion";
import TermekekInner from "./TermekekInner";

export default function Termekek() {

  return (
    <section className="w-full px-4">
      <div className="container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4">
        <div className="absolute w-full h-[200px] top-0 left-0 bg-[--lightgrey]"></div>
        <div className="flex flex-col items-center gap-8 py-16">
          <div className="flex lg:flex-row flex-col gap-8 items-baseline z-10">
            <H2>Termékek</H2>
            <H3 classname={"opacity-50"}>
              Acél és színesfém termékek széles választékban.
            </H3>
          </div>

          <TermekekInner />
        </div>
      </div>
    </section>
  );
}
