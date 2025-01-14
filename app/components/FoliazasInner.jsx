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
import Par from "./UI/Typo/Par";

export default function FoliazasInner() {
  return (
    <section className="w-full px-4">
      <div className="container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4">
        <div className="flex flex-col gap-8 py-16 lg:px-8">
          <div className="flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]">
            <H2>Fóliázás</H2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <H3>Fóliázás</H3>
              <Par>
                Vállaljuk az általunk forgalmazott, vagy hozzánk szállított
                lemezek, szálanyagok, alkatrészek felületvédő
                fóliázását. Egyedileg fejlesztett hideglamináló berendezésünk
                2000mm szélességig, maximum 200mm vastagságig képes
                felületvédelemmel ellátni táblalemezeket, szálanyagokat,
                esetlegesen kész alkatrészeket. A termékeket egyesével
                ellenőrizzük a fóliázás előtt, ezért maximálisan kizárjuk a
                hibás teljesítés lehetőségét, ezzel biztosítjuk ügyfeleink
                részére a folyamatosan kiváló minőséget. Partnercégeink között
                több autóipari beszállító található, így a minőség és a
                megbízhatóság a legfontosabb a számunkra.
              </Par>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
