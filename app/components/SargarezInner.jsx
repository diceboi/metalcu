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

export default function SargarezInner() {
  return (
    <section className="w-full px-4">
      <div className="container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4">
        <div className="flex flex-col gap-8 py-16 lg:px-8">
          <div className="flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]">
            <H2>Sárgaréz</H2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Par>
                A sárgaréz korrózióálló, jó alakítható, hajlítható, mélyhúzható
                színesfém. Legfőbb felhasználási területe az elektronika ipar,
                építőipar (díszítés, burkolás). Sárgaréz a réz és cink ötvözete.
                1-7% cink csak halványvörössé, 7-14% cink vöröses-sárgává,
                14-17% cink pedig tiszta sárgává változtatja a vörösréz színét.
                30%-ig az ötvözet sárga színű marad. 30%-on túl kezd vörösödni,
                úgy hogy az 50% cinket és rezet tartalmazó ötvözet aranysárga
                színű. 50%-on túl az ötvözet kezd fehéredni és mindinkább a cink
                színét ölti fel. Hidegen legnyújthatóbb a sárgaréz, ha 15-20%
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
          </div>
        </div>
      </div>
    </section>
  );
}
