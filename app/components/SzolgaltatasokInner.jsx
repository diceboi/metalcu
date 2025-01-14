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

export default function SzolgaltatasokInner() {


    const imageVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
      };

  return (
          <div className="w-full min-h-[50vh]">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 overflow-hidden">
              <motion.div
                className="relative col-span-1 h-[50vh] overflow-hidden"
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
              >
                <Link href="/szolgaltatasok/darabolas">
                  <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-[--grey] z-10 mix-blend-color"></div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={imageVariants}
                  >
                    <Image
                      src="/image-kepek/darabolas.webp"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </motion.div>
                  <H3
                    classname={
                      "absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]"
                    }
                  >
                    Darabolás
                  </H3>
                </Link>
              </motion.div>

              <motion.div
                className="relative col-span-1 h-[50vh] overflow-hidden"
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
              >
                <Link href="/szolgaltatasok/foliazas">
                  <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-[--orange] z-10 mix-blend-color"></div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={imageVariants}
                  >
                    <Image
                      src="/image-kepek/foliazas.webp"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </motion.div>
                  <H3
                    classname={
                      "absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]"
                    }
                  >
                    Fóliázás
                  </H3>
                </Link>
              </motion.div>

              <motion.div
                className="relative col-span-1 h-[50vh] overflow-hidden"
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
              >
                <Link href="/szolgaltatasok/feluletkezeles">
                  <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-[--grey] z-10 mix-blend-color"></div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={imageVariants}
                  >
                    <Image
                      src="/image-kepek/feluletkezeles.webp"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </motion.div>
                  <H3
                    classname={
                      "absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]"
                    }
                  >
                    Felületkezelés
                  </H3>
                </Link>
              </motion.div>

              <motion.div
                className="relative col-span-1 h-[50vh] overflow-hidden"
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
              >
                <Link href="/szolgaltatasok/logisztika">
                  <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-[--green] z-10 mix-blend-color"></div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    variants={imageVariants}
                  >
                    <Image
                      src="/image-kepek/szallitas.webp"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </motion.div>
                  <H3
                    classname={
                      "absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]"
                    }
                  >
                    Logisztika
                  </H3>
                </Link>
              </motion.div>
            </div>
          </div>
  );
}
