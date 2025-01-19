"use client";

import { useState } from "react";
import Container from "./UI/Container";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import Par from "./UI/Typo/Par";

export default function VorosrezInner() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="w-full px-4">
      <div className="container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4">
        <div className="flex flex-col gap-8 py-16 lg:px-8">
          <div className="flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]">
            <H2>Vörösréz</H2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div
                className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${
                  isExpanded ? "max-h-full" : "max-h-40"
                }`}
                aria-expanded={isExpanded}
              >
                <Par>
                Réz (Cuprum) vegyjele: Cu, neve Ciprus szigetének nevéből
                származik, amely már az ókorban fontos rézlelőhely volt.
                A réz folyamatosan 100%-ban újrahasznosítható anélkül, hogy
                tulajdonságai változnának. A műszaki nyelvben a vörösréz
                megnevezést használják megkülönböztetésül a sárgaréz (messing)
                nevű fémötvözettől.
              </Par>
              <H2>Gyakori ötvözetei</H2>
              <H3>E-Cu, SE-Cu, SF-Cu</H3>
              <Par>
                Hidegenhengerléssel és nyújtva, egyengetve készítik, attól
                függően, hogy milyen felhasználási területre szánják az anyagot.
                Az E-Cu lemezeknek kiváló a vezetőképessége, az SF-Cu lemezeket
                pedig mechanikai tulajdonságai miatt használják előszeretettel.
              </Par>
              <H3>E-Cu 57-58</H3>
              <Par>
                Lehet lágy, vagy kemény is, de a félkemény a legelterjedtebb
                állapota. Kiváló az elektromos vezetőképessége, 56 - 58m/Ωmm 2
              </Par>
              <H3>SF-Cu</H3>
              <Par>
                Jól megmunkálható és korrózióálló minőség. Sajtolható és
                mélyhúzható is, és szintén nagyon jó elektromos vezető.
              </Par>
              <H3>Bronz</H3>
              <Par>
                A bronz a réz azon ötvözeteinek általános elnevezése, ahol az
                elsődleges ötvözőanyag az ón. Kemény fém, számos ipari
                felhasználása létezik. A bronz szinte minden tulajdonságában
                előnyösebb az acélnál. Ellenállóbb a korrózióval szemben és
                alacsonyabb hőfokon formálható, alkotó elemeinek viszonylagos
                ritkasága folytán azonban a bronz félgyártmányok
                drágábbak. Gépiparban csapágycsészék, fogaskerekek, csigakerekek
                és csőszerelvények készülnek belőle, ekkor csekély ónt, 4-5%
                mangánt és általában kis mértékben vasat tartalmaznak.
              </Par>
              </div>
              {!isExpanded && (
                <div className="absolute bottom-24 left-0 w-full h-32 bg-gradient-to-t from-[--lightgrey] to-transparent pointer-events-none"></div>
              )}
              <button
                onClick={toggleExpand}
                className="mt-4 text-[--primary-color] underline focus:outline-none z-10"
              >
                {isExpanded ? "Kevesebb megjelenítése" : "Több megjelenítése"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
