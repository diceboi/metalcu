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

export default function AcelTermekek() {
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
                    src="/termekek/hidegen-hengerelt-lemezek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Hidegen hengerelt lemezek</H3>
                  <Par>
                    <b><b>Szabvány:</b></b>
                    <br></br>EN10130, EN10209 szerint
                  </Par>
                  <Par>
                    <b><b>Minőségek:</b></b>
                    <br></br>DC01, DC03, DC04, DC05, DC01EK, DC04EK
                  </Par>
                  <Par>
                    <b><b>Lemez vastagság:</b></b>
                    <br></br>0,4 - 3,0mm
                  </Par>
                  <Par>
                    <b><b>Tábla méretek:</b></b>
                    <br></br>1000x2000, 1250x2500, 1500x3000mm
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/melegen-hengerelt-lemezek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Melegen hengerelt lemezek, durvalemezek</H3>
                  <Par>
                    <b><b>Szabvány:</b></b>
                    <br></br>EN10025, EN10149, EN10028 szerint
                  </Par>
                  <Par>
                    <b><b>Minőségek:</b></b>
                    <br></br>S235JR; S275JR; S355JR; SS275MC; 355MC; S420-700MC; P235GH - P355GH
                  </Par>
                  <Par>
                    <b><b>Lemez vastagság:</b></b>
                    <br></br>2,0 - 20mm Durvalemezek: 8,0 - 250mm
                  </Par>
                  <Par>
                    <b><b>Mérettartomány:</b></b>
                    <br></br>Szélesség: 1000-3300mm, Hosszúság: 2000-18000mm
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/tuzhorganzyott-lemezek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Tűzihorganyzott lemezek</H3>
                  <Par>
                    <b><b>Szabvány:</b></b>
                    <br></br>EN103027 szerint
                  </Par>
                  <Par>
                    <b><b>Minőségek:</b></b>
                    <br></br>DX51D+Z (100-350); DX52D+Z (100-350); DX53D+Z (100-350); DX54D+Z (100-350)
                  </Par>
                  <Par>
                    <b><b>Lemez vastagság:</b></b>
                    <br></br>0,5 - 0,6; 0,65 - 1,0; 1,5 - 5,0mm
                  </Par>
                  <Par>
                    <b><b>Mérettartomány:</b></b>
                    <br></br>Szélesség: 1000-1500mm, Hosszúság: 2000-3000mm
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/acel-zartszelvenyek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Zártszelvények</H3>
                  <Par>
                    <b><b>Szabvány:</b></b>
                    <br></br>EN10219 szerint
                  </Par>
                  <Par>
                    <b><b>Minőségek:</b></b>
                    <br></br>S235JRH, S355J2H
                  </Par>
                  <Par>
                    <b><b>Méretek:</b></b>
                    <br></br>Fv = 1,5 - 12,0mm; Méret: 10x10 - 280x280mm; 15x15 - 360x200mm
                  </Par>
                  <Par>
                    <b><b>Szálhosszúságok:</b></b>
                    <br></br>3-12 méter
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/acel-csovek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Csövek (varrat nélküli szerkezeti, nyomástartó)</H3>
                  <Par>
                    <b><b>Szabvány:</b></b>
                    <br></br>EN10210; EN10216 szerint
                  </Par>
                  <Par>
                    <b><b>Minőségek:</b></b>
                    <br></br>S235JRH, S355J2H, P235TR1, P355NH
                  </Par>
                  <Par>
                    <b><b>Méretek:</b></b>
                    <br></br>Fv = 1,6 - 12,5mm; d = 10,2 - 323,9mm
                  </Par>
                  <Par>
                    <b><b>Szálhosszúságok:</b></b>
                    <br></br>6-12 méter
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/euro-szelvenyek.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">EURO szelvények, tartók</H3>
                  <Par>
                    <b><b>Szabvány:</b></b>
                    <br></br>HEA, HEB, HEM EURONORM 53-62; IPE, IPN, UPN DIN 1025 szerint
                  </Par>
                  <Par>
                    <b><b>Szálhossz:</b></b>
                    <br></br>6-18,1 méter
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/idomacelok.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Idomacélok (kör, négyzet, lapos)</H3>
                  <Par>
                    <b><b>Szabvány:</b></b>
                    <br></br>EN10058; EN10059; EN10060 szerint
                  </Par>
                  <Par>
                    <b><b>Minőségek:</b></b>
                    <br></br>S235JR, S355J2
                  </Par>
                  <Par>
                    <b><b>Szálhosszúságok:</b></b>
                    <br></br>6-12 méter
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
