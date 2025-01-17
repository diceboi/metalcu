"use client";

import Container from "./UI/Container";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import Image from "next/image";
import Link from "next/link";
import Smalltitle from "./UI/Typo/Smalltitle";
import Mainbutton from "./UI/Buttons/Mainbutton";
import ProductTile from "./UI/ProductTile";

import { motion } from "framer-motion";
import Par from "./UI/Typo/Par";
import ProductSheet from "./UI/Productsheet";

export default function SargarezTermekek() {
  return (
    <section className="w-full px-4">
      <div className="container m-auto border-x relative px-0">
        <div className="flex flex-col gap-8 py-16 ">
          <div className="flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]">
            <H2>Forgalmazott termékek</H2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="grid lg:grid-cols-1 gap-8">

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/sargarez-lemezek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Sárgaréz lemezek</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>CuZn37, CuZn20, CuZn15, CuZn39Pb2
                    </Par>
                    <Par>
                        <b><b>Lemez vastagságok:</b></b>
                        <br></br>0,2 mm-től 25,0 mm-ig
                    </Par>
                    <Par>
                        <b><b>Tábla méretek:</b></b>
                        <br></br>Általában 1000x2000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/sargarez-vastag-lemezek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Sárgaréz vastag lemezek</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>CuZn37, CuZn39Pb2
                    </Par>
                    <Par>
                        <b><b>Lemez vastagságok:</b></b>
                        <br></br>12 mm-től 150 mm-ig
                    </Par>
                    <Par>
                        <b><b>Tábla méretek:</b></b>
                        <br></br>Általában 1020x2020 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/sargarez-rud-kor.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Sárgaréz rúd (kör)</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>CuZn39Pb3, CuZn40Pb2, CuZn36Pb2As, CuZn33Pb1,5AlAs
                    </Par>
                    <Par>
                        <b><b>Átmérő:</b></b>
                        <br></br>3,0 mm-től 160,0 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 3000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/sargarez-lapos.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Sárgaréz lapos</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>CuZn39Pb3, CuZn40Pb2
                    </Par>
                    <Par>
                        <b><b>Méretek:</b></b>
                        <br></br>20x4 mm-től 70x60 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 3000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/sargarez-rud-negyzet.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Sárgaréz rúd (négyzet)</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>CuZn39Pb3
                    </Par>
                    <Par>
                        <b><b>Méretek:</b></b>
                        <br></br>5x5 mm-től 120x120 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 3000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/sargarez-rud-hatszog.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Sárgaréz rúd (hatszög)</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>CuZn39Pb3, CuZn36Pb2As
                    </Par>
                    <Par>
                        <b><b>Méretek:</b></b>
                        <br></br>5 mm-től 35 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 3000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/sargarez-huzal.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Sárgaréz huzal</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>CuZn37
                    </Par>
                    <Par>
                        <b><b>Átmérő:</b></b>
                        <br></br>0,3 mm-től 10,0 mm-ig
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/sargarez-cso.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Sárgaréz cső</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>CuZn37
                    </Par>
                    <Par>
                        <b><b>Átmérő:</b></b>
                        <br></br>4,0x1,0 mm-től 22,0x1,5 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 3000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
