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

export default function VorosrezTermekek() {
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
                    src="/termekek/vorosrez-lemezek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Vörösréz lemez, LEMEZVÁGAT, szalag</H3>
                    <Par>
                        <b><b>Gyakori minőségek:</b></b>
                        <br></br>SE-Cu; E-Cu; SF-Cu;
                    </Par>
                    <Par>
                        <b><b>Standard lemez méretek:</b></b>
                        <br></br>Vastagság: 0,2 - 5,0mm-ig; Táblaméret: 1000x2000mm, vagy egyedi méretre vágva.
                    </Par>
                    <Par>
                        <b><b>Szalag méretek:</b></b>
                        <br></br>0,1 mm - 3,0 mm / Általában 300-350 mm illetve egyedi szélességek is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/vorosrez-vastag-lemezek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Vastag lemezek</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>SF-Cu, E-Cu 57, OF-Cu
                    </Par>
                    <Par>
                        <b><b>Lemez vastagságok:</b></b>
                        <br></br>10,0 mm-től 150,0 mm-ig
                    </Par>
                    <Par>
                        <b><b>Tábla méretek:</b></b>
                        <br></br>Általában 1020x2020 mm vagy a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatok is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/vorosrez-rud-kor.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Vörösréz rúd (kör)</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>E-Cu 57, OF-Cu, CuTeP
                    </Par>
                    <Par>
                        <b><b>Átmérő:</b></b>
                        <br></br>3,0 mm-től 400,0 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 4000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatok is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/vorosrez-lapos.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Vörösréz lapos</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>E-Cu 57, OF-Cu
                    </Par>
                    <Par>
                        <b><b>Méretek:</b></b>
                        <br></br>10x3 mm-től 150x10 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 4000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatok is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/vorosrez-rud-negyzet.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Vörösréz rúd (négyzet)</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>E-Cu 57, OF-Cu
                    </Par>
                    <Par>
                        <b><b>Méretek:</b></b>
                        <br></br>5x5 mm-től 100x100 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 4000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatok is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/vorosrez-rud-hatszog.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Vörösréz rúd (hatszög)</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>E-Cu 57
                    </Par>
                    <Par>
                        <b><b>Méretek:</b></b>
                        <br></br>12 mm-től 32 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 4000 mm a járatos, de ettől eltérő méretek is előfordulnak, illetve vágatok is rendelhetők!
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/vorosrez-cso.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Vörösréz cső</H3>
                    <Par>
                        <b><b>Leggyakoribb minőségek:</b></b>
                        <br></br>SF-Cu
                    </Par>
                    <Par>
                        <b><b>Átmérő:</b></b>
                        <br></br>2x0,5 mm-től 450x10 mm-ig
                    </Par>
                    <Par>
                        <b><b>Szálhossz:</b></b>
                        <br></br>Általában 3000 mm és 5000 mm a járatos, de ettől eltérő méretek is előfordulnak (14000 mm-ig), illetve vágatok is rendelhetők!
                    </Par>
                    <Par>
                        <b><b>Tekercs:</b></b>
                        <br></br>Illetve egyes méretek 15, 25, 30 m-es tekercsben is rendelhetők.
                    </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/bronz-rudak.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                    <H3 className="pb-4">Bronz rudak, perselyek</H3>
                    <Par>
                        <b><b>Termékleírás:</b></b>
                        <br></br>Elterjedt alapanyaga a gépiparnak, tengelyek, csapágyházak, csúszó lapok, perselyek alapanyagaként használják.
                    </Par>
                    <Par>
                        <b><b>Felhasználási területek:</b></b>
                        <br></br>Szerszámgyártás, gépészet.
                    </Par>
                    <Par>
                        <b><b>Gyakori minőségek:</b></b>
                        <br></br>CuSn7ZnPb7-C (G7); CuSn12-C (G12); CuSn11Pb2-C
                    </Par>
                    <Par>
                        <b><b>Méretek:</b></b>
                        <br></br>Kérjen ajánlatot munkatársainktól.
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
