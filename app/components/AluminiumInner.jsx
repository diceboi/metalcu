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
            <H2>Alumínium</H2>
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
                Az oxigén és a szilícium után az alumínium a földkéreg harmadik
                leggyakoribb eleme. A földkéreg 7,5%-a alumínium és csak 5%-a
                vas. Annak ellenére, hogy számos fém - köztük a vas is - már az
                ókorban ismert volt, az alumíniumipar 2012-ben csak 126 éves.
                Ennek az a magyarázata, hogy az alumínium hagyományos kohósító
                eljárásokkal nem állítható elő. Az 1886-ban szabadalmaztatott
                eljárás, mely az alumínium-oxid kriolit olvadékban való oldása
                révén kapott olvadék elektrolízisén alapszik, napjainkban is az
                alumínium előállításának alapelve.
              </Par>
              <Par>
                Az alumínium korrózióálló fém. Korrózióállósága nem kémiai,
                hanem fizikai természetű. A korrózióállóság lényege az, hogy a
                levegő vagy a víz oxigénje az alumínium felületén igen rövid idő
                alatt vékony, összefüggő oxidréteget hoz létre, mely a további
                oxidálódást megakadályozza. Ez az oxidréteg általában olyan
                vékony, hogy elektromosan szigetel. Az oxidréteg vastagsága és
                szerkezete kémiai műveletsorral, eloxálással befolyásolható.
                Eloxálással különböző vastagságú és színű oxidréteg produkálható
                az alumínium felületén, ami a korrózióállóságot javítja. Az
                alumínium csak oxigéntől elzárva, védőgázas hegesztéssel
                hegeszthető. Ez azért van így, mert az olvadt alumínium
                felületén rendkívül intenzív az oxidhártya képződés, mely
                oxidhártya a hegesztett kötés minőségét igen károsan
                befolyásolja.
              </Par>
              <Par>
                Az alumínium meleg- illetve hidegalakíthatósága kitűnő, ezért
                sokféle nyitott, zárt alakú profil sajtolható belőle. Széles
                körű felhasználhatósága az ipar számos területén
                hasznosítható. A melegen és hidegen hengerelt alumíniumlemezek
                felhasználási lehetőségei rendkívül sokrétűek, ami főleg a kis
                tömeggel, a jó korrózióállósággal, a jó felületi minőséggel,
                valamint megfelelő mechanikai tulajdonságokkal teszi sokrétűen
                felhasználható termékké.
              </Par>
              <Par>
                Az alumínium meleg- illetve hidegalakíthatósága kitűnő, ezért
                sokféle nyitott, zárt alakú profil sajtolható belőle. Széles
                körű felhasználhatósága az ipar számos területén
                hasznosítható. A melegen és hidegen hengerelt alumíniumlemezek
                felhasználási lehetőségei rendkívül sokrétűek, ami főleg a kis
                tömeggel, a jó korrózióállósággal, a jó felületi minőséggel,
                valamint megfelelő mechanikai tulajdonságokkal teszi sokrétűen
                felhasználható termékké.
              </Par>
              <H2>Az alumínium ötvözetei</H2>
              <H3>1000-es sorozatba tartozó alumíniumötvözetek</H3>
              <Par>
                99%-ban, vagy ennél nagyobb arányban tartalmaznak tiszta
                alumíniumot. Ennek a sorozatnak kiváló a korrózióállósága, de
                gyengék a mechanikai tulajdonságai. Az 1100-as számú
                alumíniumötvözetet elterjedten használják a villamos iparban és
                a feldolgozóiparban.
              </Par>
              <H3>2000-es sorozatba tartozó alumíniumötvözetek</H3>
              <Par>
                Réztartalmú ötvözetek. Nagy a szilárdságuk és hőkezelhetők, de
                általában gyenge a korrózióállóságuk, a szemcsék határfelületein
                korrózió léphet fel és nehéz a korrózió megakadályozása. A
                2024-es ötvözetet széles körben használják a
                repülőgépgyártásban.
              </Par>
              <H3>3000-es sorozatba tartozó alumíniumötvözetek</H3>
              <Par>
                Mangán tartalmú ötvözetek. Ezt a csoportot jó általános
                korrózióállóság és mérsékelt szilárdság jellemzi. A sorozat
                legelterjedtebb tagja, a 3003-as számú ötvözet alakítható,
                könnyen hegeszthető és széles körben használják tartályok,
                hőcserélő alkatrészek és ipari folyamatok csővezetékei
                gyártására.
              </Par>
              <H3>4000-es sorozatba tartozó alumíniumötvözetek</H3>
              <Par>
                Szilícium tartalmú ötvözetek. Alacsonyabb olvadáspontjuk miatt
                hegesztésre használják őket. Ez az ötvözetcsalád jó
                korrózióállósággal rendelkezik és korróziója gátolható
                (inhibeálható).
              </Par>
              <H3>5000-es sorozatba tartozó alumíniumötvözetek</H3>
              <Par>
                Magnézium tartalmú ötvözetek. Korrózióállók és korróziójuk
                gátolható. Ezeket az anyagokat elterjedten használják tengeri
                környezetben, ahol jól ellenállnak az ott jelentkező hatásoknak.
                Bizonyos körülmények között azonban hajlamosak a
                feszültségkorrózió okozta megrepedésre.
              </Par>
              <H3>6000-es sorozatba tartozó alumíniumötvözetek</H3>
              <Par>
                Szilícium és magnézium tartalmú ötvözetek. A szilícium és a
                magnézium olyan arányban van jelen bennük, hogy
                magnézium-szilicidet alkossanak. Emiatt ezek az ötvözetek
                hőkezelhetők. Az ilyen ötvözetek, mint pl. a 6061-es ötvözet,
                jól alakíthatók, könnyen hegeszthetők és mérsékelten szilárdak.
                Ennek a sorozatnak az ötvözetei kiválóak szerkezeti anyagként
                recirkulációs hűtővíz rendszerekhez.
              </Par>
              <H3>7000-es sorozatba tartozó alumíniumötvözetek</H3>
              <Par>
                Cinktartalmú ötvözetek. Hőkezelhetők és nagyon nagy a
                szilárdságuk. Korróziójukat nehéz meggátolni, és emiatt
                általában 3004-es ötvözettel burkolják be őket a lyukkorrózióval
                szembeni ellenállásuk javítására.
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

