"use client";

import { useState } from "react";
import Container from "./UI/Container";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import Par from "./UI/Typo/Par";

export default function SargarezInner() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="w-full px-4">
      <div className="container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4">
        <div className="flex flex-col gap-8 py-16 lg:px-8">
          <div className="flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]">
            <H2>Sárgaréz</H2>
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
                A sárgaréz korrózióálló, jó alakítható, hajlítható, mélyhúzható
                színesfém. Legfőbb felhasználási területe az elektronikai ipar,
                építőipar (díszítés, burkolás). Sárgaréz a réz és cink ötvözete.
                1-7% cink csak halványvörössé, 7-14% cink vöröses-sárgává,
                14-17% cink pedig tiszta sárgává változtatja a vörösréz színét.
                Hidegen legnyújthatóbb a sárgaréz, ha 15-20%
                cinket tartalmaz. Ez az ötvözet melegen nem munkálható meg. Ha a
                cink 35-40%-nyi mennyiségben van jelen, az ötvözet melegen és
                hidegen egyaránt nyújtható, még több cinkkel a nyújthatóság
                rohamosan csökken, de 70- 90% cinktartalom esetén a fém újra
                nyújtható lesz, mégpedig csak izzó állapotban. Legszilárdabb a
                sárgaréz, ha benne 28,5% cink van.
              </Par>
              <Par>
                Az iparban igen sokféle sárgarézötvözetet használnak. A rézfúvós
                hangszereket olyan sárgarézlemezből gyártják, melyben 19-21%
                cink és 81-79% réz van; igen jó az a rézlemez is, mely 22- 30%
                cinket tartalmaz. A közönséges játékárukhoz olyan sárgarézlemezt
                használnak, melynek cinktartalma 30-40%-ra rúg. Ilyen
                ötvözetekből gyártják a sárgarézhuzalt is. Az öntött sárgaréz
                rendesen 35-45% cinket tartalmaz; minél több benne a cink, annál
                jobban zsugorodik, és annál porózusabb az öntvény.
              </Par>
              <H2>Gyakori ötvözetei</H2>
              <H3>CuZn 37</H3>
              <Par>
                Hidegen jól alakítható ötvözet, mélyhúzható, húzható,
                hengerelhető, polírozható, forrasztásra és hegesztésre alkalmas.
                Hajlítható, az állapota lehet kemény, háromnegyed kemény, fél
                kemény, lágy.
              </Par>
              <H3>CuZn 40</H3>
              <Par>
                Mélyhúzható, melegen és hidegen is jól alakítható ötvözet.
              </Par>
              <H3>CuZn 39Pb3, CuZn 40Pb2</H3>
              <Par>Melegen sajtolható, jól forgácsolható ötvözet</Par>
              <H3>CuZn4oSi</H3>
              <Par>Alkalmazható forraszanyagként.</Par>
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

