"use client";

import { useState } from "react";
import Container from "./UI/Container";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import Par from "./UI/Typo/Par";

export default function AcelInner() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="w-full px-4">
      <div className="container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4">
        <div className="flex flex-col gap-8 py-16 lg:px-8">
          <div className="flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]">
            <H2>Acél</H2>
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
                  Az acélok alakítható vasötvözetek, melyek nemzetközileg is
                  elfogadott fogalmát a következőképpen határozták meg:
                  túlnyomórészt vasat, általában 2%-nál kevesebb karbont,
                  valamint egyéb elemeket tartalmazó anyag. Néhány krómacél
                  2%-nál több karbont is tartalmazhat, de 2% a szokásos
                  választóvonal az acél és az öntöttvas között.
                </Par>
                <Par>
                  Ez a határ sem a kémiai összetétel, sem az alakíthatóság
                  alapján nem tekinthető élesnek. Az alakíthatóság ugyanis a
                  karbontartalom növekedésével csak fokozatosan csökken, még a
                  3,5-4% C- tartalmú öntöttvas is vékony lemezzé hengerelhető
                  vagy alkatrésszé kovácsolható, ha grafitos szerkezetű. Hisz az
                  alakíthatóság alapvetően az ötvözetben lévő szövetelemeken,
                  azok tulajdonságain és a szövetben való elhelyezkedésükön
                  múlik, nem közvetlenül a karbontartalmon.
                </Par>
                <Par>
                  Az acélokat, mint igen széles körben felhasznált alapanyagot,
                  többféle szempont alapján osztályozhatjuk:
                </Par>
                <Par>
                  - Vegyi összetételük alapján megkülönböztetünk ötvözetlen és
                  ötvözött acélokat. Ötvözetlen acélnak számít az az acél, amely
                  a karbonon kívül nem tartalmaz szándékosan bevitt ötvözőt, ami
                  az acél mechanikai vagy fizikai tulajdonságait befolyásolná.
                  Az ötvözetlen és ötvözött acélokat elválasztó határértékeket
                  szabványban rögzítik. Az ötvözött acélokban a mindig
                  megtalálható elemekből a normális üzemben elérhető legkisebb
                  mennyiségnél többet vagy pedig ezeken kívül szándékosan
                  hozzáadott további elemeket tartalmaz. Szokás még az ötvözők
                  mennyisége alapján megkülönböztetni a gyengén ötvözött (max.
                  5-6% összes ötvözőmennyiség), ötvözött (5-10% ötvözőtartalom)
                  és az erősen ötvözött (10% feletti ötvözőtartalmú) acélokat.
                </Par>
                <Par>
                  - Nemzetközileg elfogadott felosztás szerint az acélgyártási
                  eljárás gondossága alapján ún. minőségi csoportokba soroljuk
                  az acéltípusokat. Az acélok fő minőségi típusai a következők:
                  Alapacél minden olyan acél, melyre nincs előírva olyan
                  minőségi követelmény, mely az acélgyártás során különleges
                  gondosságot igényelne. E csoportba csak ötvözetlen acélok
                  tartoznak. Minőségi acélok: az alapacélok és a nemesacélok
                  közti előírások érvényesek rájuk. Különleges gondossággal kell
                  gyártani, melynél a legfontosabb paraméterek a szemcseméret, a
                  kén- és foszfortartalom és a felületi minőség. Nemesacélok:
                  különleges gondossággal kell gyártani őket. Ötvözetlen és
                  ötvözött anyagúak lehetnek. E csoportba tartozik az összes
                  hőkezelési célra alkalmas acél.
                </Par>
                <Par>
                  - Gyártási mód szerinti csoportosítás: Az acél gyártása során
                  a gyártási mód szerint más-más járulékos alkotórészek maradnak
                  vissza, vagy azok mennyisége, eloszlása változik. Mindez
                  lényeges az acél további feldolgozása és a késztermék minősége
                  szempontjából.
                </Par>
                <Par>
                  - Az alkalmazott dezoxidálási módszer alapján. Csillapítatlan
                  acél: jó kihozatalú, felületi minősége jó, hidegen jól
                  alakíthatók. Gyorsan öregszenek, max. 0,25% karbont tartalmaz.
                  Csillapított acélok: az oxigént szilárd halmazállapotú
                  vegyületeket képző elemhez kötik. Kisebb a szennyezők
                  dúsulása, a kihozatal rosszabb, az oxidok egy része
                  zárványként visszamarad. Vákuumos kezeléssel az oxigén gáz
                  formájában távozik, nem keletkeznek zárványok. Különlegesen
                  csillapított acélok: dezoxidálás során nitrogént lekötő és
                  szemcsefinomító hatású dezoxidálószereket (Al, V, Nb, Ti) is
                  alkalmaznak. Ezek öregedésállóbbak és ridegtörési hajlamuk
                  kisebb, mint a csak Si-mal és Mn-nal csillapított ötvözetlen
                  acéloké.
                </Par>
                <Par>
                  - Szövetszerkezetük alapján, melyek általában vegyesen
                  fordulnak elő: Egyensúlyi szövetszerkezetük alapján
                  megkülönböztetünk ferrites, félferrites, hipoeutektoidos,
                  hipereutektoidos, lédeburitos, félausztenites és ausztenites
                  acélokat. Nem egyensúlyi állapotban léteznek perlites,
                  martenzites, ausztenites, ferrites és bénites acélok.
                </Par>
                <Par>
                  - Felhasználási módjuk szerint: Szerkezeti acélok: az ilyen
                  acélokat a gép- és járműgyártás , acélszerkezetek gyártása
                  területén alapanyagként hasznosítják. Ezekben az esetekben a
                  szilárdság mellett megfelelő szívósságot és nyúlást is
                  megkövetelünk. Ezt 0,25% alatti széntartalommal vagy
                  nemesített szövetszerkezettel biztosíthatjuk. Szerszámacélok:
                  ebből készülnek a forgácsolószerszámok és az alakítóműveletek
                  szerszámai. Elengedhetetlen, hogy a rájuk ható
                  igénybevételeket alakváltozás nélkül viseljék és a kopásnak
                  ellenálljanak. Ezen tulajdonságokat általában nemesítéssel
                  érjük el, így ezeknek jól edzhetőnek kell lenniük és
                  szívóssági követelményeknek is meg kell felelniük. Különleges
                  acélfajták és ötvözetek: ide sorolhatók a valamilyen
                  kifejezett tulajdonságú pl. hőálló, korrózióálló, nem hőtáguló
                  stb. ötvözetek. Nagyobb mennyiségű ötvözőt tartalmaznak.
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
