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

export default function Termekek() {
  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

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

          <div className="w-full min-h-[50vh]">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 overflow-hidden">
              <motion.div
                className="relative col-span-1 h-[50vh] overflow-hidden"
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
              >
                <Link href="/termekek/acel">
                  <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-[--grey] z-10 mix-blend-color"></div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={imageVariants}
                  >
                    <Image
                      src="/image-kepek/steel.webp"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </motion.div>
                  <H3
                    classname={
                      "absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]"
                    }
                  >
                    Acél
                  </H3>
                </Link>
              </motion.div>

              <motion.div
                className="relative col-span-1 h-[50vh] overflow-hidden"
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
              >
                <Link href="/termekek/aluminium">
                  <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-[--grey] z-10 mix-blend-color"></div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={imageVariants}
                  >
                    <Image
                      src="/image-kepek/aluminium.webp"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </motion.div>
                  <H3
                    classname={
                      "absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]"
                    }
                  >
                    Aluminium
                  </H3>
                </Link>
              </motion.div>

              <motion.div
                className="relative col-span-1 h-[50vh] overflow-hidden"
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
              >
                <Link href="/termekek/vorosrez">
                  <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-[--orange] z-10 mix-blend-color"></div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={imageVariants}
                  >
                    <Image
                      src="/image-kepek/copper.webp"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </motion.div>
                  <H3
                    classname={
                      "absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]"
                    }
                  >
                    Vörösréz
                  </H3>
                </Link>
              </motion.div>

              <motion.div
                className="relative col-span-1 h-[50vh] overflow-hidden"
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
              >
                <Link href="/termekek/sargarez">
                  <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-[--green] z-10 mix-blend-color"></div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={imageVariants}
                  >
                    <Image
                      src="/image-kepek/sargarez.webp"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </motion.div>
                  <H3
                    classname={
                      "absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]"
                    }
                  >
                    Sárgaréz
                  </H3>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
