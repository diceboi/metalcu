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

export default function AluminiumTermekek() {
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
                    src="/termekek/alu-sheet.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Hidegen hengerelt lemezek, szalagok</H3>
                  <Par>
                    <b>
                      <b>Termékleírás:</b>
                    </b>
                    <br></br>Az alumínium lemezek előnyei más fémtermékekkel
                    szemben: Kitűnő mechanikai tulajdonság, kitűnő
                    korrózióállóság, jó hegeszthetőség, kis fajlagos súly (acél
                    harmada), újrahasznosítható.
                  </Par>
                  <Par>
                    <b>
                      <b>Felhasználási területek:</b>
                    </b>
                    <br></br>Gépipar, élelmiszeripar, külső - belső építészet,
                    építőipar, vegyipar, járműipar (autó, repülő, vasút, hajó),
                    reklámipar.
                  </Par>
                  <Par>
                    <b>
                      <b>Gyakori minőségek:</b>
                    </b>
                    <br></br>EN AW-1050A (Al99,5); EN AW-5005A (AlMg1); EN
                    AW-5083 (AlMg4,5Mn0,7); EN AW-5754 (AlMg3); EN AW-6082
                    (AlSi1MgMn);
                  </Par>
                  <Par>
                    <b>
                      <b>Standard lemez méretek:</b>
                    </b>
                    <br></br>Vastagság: 0,5 - 6,0 mm-ig; Táblaméretek:
                    1000x2000mm - alap; 1250x2500mm - közép; 1500x3000mm - nagy;
                    2000x4000mm - jumbo;
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi lemez méretek:</b>
                    </b>
                    <br></br>max. 2000mm szélességig; max. 12000mm hosszúságig.
                    Kérjen ajánlatot munkatársainktól.
                  </Par>
                  <Par>
                    <b>
                      <b>Standard szalag méret:</b>
                    </b>
                    <br></br>Vastagság: 0,5 - 3,5 mm-ig; Szélességek: 1000mm;
                    1250mm; 1500mm;
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi szalag méretek:</b>
                    </b>
                    <br></br>max. 2000mm szélességig. Kérjen ajánlatot
                    munkatársainktól.
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/hengereltlemez.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className=" flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 classname="pb-4">Melegen hengerelt lemezek, szalagok</H3>
                  <Par>
                    <b>
                      <b>Termékleírás:</b>
                    </b>
                    <br></br> Úgynevezett vastag lemezek.
                  </Par>
                  <Par>
                    <b>
                      <b>Felhasználási területek:</b>
                    </b>
                    <br></br> Szerszámgyártás, gépgyártás, hajógyártás,
                    tartálygyártás, autóipar, elektromos ipar, csomagoló ipar,
                    orvosi műszergyártás.
                  </Par>
                  <Par>
                    <b>
                      <b>Gyakori minőségek:</b>
                    </b>
                    <br></br> EN AW-5083 (AlMg4,5Mn0,7); EN AW-5754 (AlMg3); EN
                    AW-6082 (AlSi1MgMn);
                  </Par>
                  <Par>
                    <b>
                      <b>Standard lemez méretek:</b>
                    </b>
                    <br></br> Vastagság: 6,0 - 300mm-ig; Táblaméretek:
                    1000x2000mm - alap; 1250x2500mm - közép; 1500x3000mm - nagy;
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi lemez méretek:</b>
                    </b>
                    <br></br> max. 2000mm szélességig; max. 12000mm hosszúságig;
                    Kérjen ajánlatot munkatársainktól.
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/mintas-lemez.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Mintás lemezek</H3>
                  <Par>
                    <b>
                      <b>Termékleírás:</b>
                    </b>
                    <br></br>Az alumínium lemezek előnyei más fémtermékekkel
                    szemben: Kitűnő mechanikai tulajdonság, kitűnő
                    korrózióállóság, jó hegeszthetőség, kis fajlagos súly (acél
                    harmada), újrahasznosítható.
                  </Par>
                  <Par>
                    <b>
                      <b>Felhasználási területek:</b>
                    </b>
                    <br></br>járó - lépcsőlapok, gépjármű felépítmények,
                    reklámipar, belsőépítészet, dobozgyártás.
                  </Par>
                  <Par>
                    <b>
                      <b>Gyakori minőségek:</b>
                    </b>
                    <br></br>EN AW-5754 (AlMg3); EN AW-1050A (Al99,5);
                  </Par>
                  <Par>
                    <b>
                      <b>Standard lemez méretek:</b>
                    </b>
                    <br></br>Vastagság: 1,5/3,0 - 5,0/6,5mm-ig; Táblaméretek:
                    1000x2000mm - alap; 1250x2500mm - közép; 1500x3000mm - nagy;
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi lemez méretek:</b>
                    </b>
                    <br></br>max. 2000mm szélességig; max. 12000mm hosszúságig.
                    Kérjen ajánlatot munkatársainktól.
                  </Par>
                  <Par>
                    <b>
                      <b>Standard szalag méret:</b>
                    </b>
                    <br></br>Vastagság: 0,5 - 3,5 mm-ig; Szélességek: 1000mm;
                    1250mm; 1500mm;
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi szalag méretek:</b>
                    </b>
                    <br></br>max. 2000mm szélességig. Kérjen ajánlatot
                    munkatársainktól.
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/stukko-lemez.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Stukko lemezek</H3>
                  <Par>
                    <b>
                      <b>Termékleírás:</b>
                    </b>
                    <br></br>Közkedvelt belsőépítészeti alapanyag.
                  </Par>
                  <Par>
                    <b>
                      <b>Felhasználási területek:</b>
                    </b>
                    <br></br>Hűtőgép gyártás, dobozgyártás, belsőépítészet.
                  </Par>
                  <Par>
                    <b>
                      <b>Standard lemez méretek:</b>
                    </b>
                    <br></br>Vastagság: 0,4 - 1,2mm; Táblaméretek: 1000x2000mm -
                    alap; 1250x2500mm - közép; 1500x3000mm - nagy;
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi lemez méretek:</b>
                    </b>
                    <br></br>Kérjen ajánlatot munkatársainktól.
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/lyukasztott-lemez.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Lyukasztott lemezek</H3>
                  <Par>
                    <b>
                      <b>Termékleírás:</b>
                    </b>
                    <br></br>Alapanyaga lehet alumínium, rozsdamentes, acél,
                    horganyzott acél, nemes acél.
                  </Par>
                  <Par>
                    <b>
                      <b>Perforált lemez felhasználási területei:</b>
                    </b>
                    <br></br>Állványok, álmennyezetek, lépcsőkorlátok,
                    kerítések, kapuk, erkélyrácsok, védőburkolatok,
                    padlóburkolatok, lámpaernyők, konvektorok, szűrők,
                    szellőzők, kipufogók, különböző panelek stb.
                  </Par>
                  <Par>
                    <b>
                      <b>Típusok:</b>
                    </b>
                    <ul>
                      <li>
                        <b>Kör:</b>
                        <ul>
                          <li>Rv - körlyukasztás átlós osztással</li>
                          <li>Rg - körlyukasztás soros osztással</li>
                        </ul>
                      </li>
                      <li>
                        <b>Négyzet:</b>
                        <ul>
                          <li>Qg - négyzetlyukasztás soros osztással</li>
                          <li>Qv - négyzetlyukasztás átlós osztással</li>
                          <li>Qd - négyzetlyukasztás diagonális osztással</li>
                        </ul>
                      </li>
                    </ul>
                  </Par>
                  <Par>
                    <b>
                      <b>Standard lemez méretek:</b>
                    </b>
                    <br></br>Vastagság: 1,5/3,0 - 5,0/6,5mm-ig; Táblaméretek:
                    1000x2000mm - alap; 1250x2500mm - közép; 1500x3000mm - nagy
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi lemez méretek:</b>
                    </b>
                    <br></br>Szinte bármilyen méret és egyedi lyukasztás
                    rendelhető (megfelelő mennyiség mellett).
                  </Par>
                  <Par>
                    <b>
                      <b>Expandált lemez felhasználási területek:</b>
                    </b>
                    <br></br>Korlátok, lépcsők, vásári standok, homlokzatok,
                    árnyékolás technika stb.
                  </Par>
                  <Par>
                    <b>
                      <b>Típusok:</b>
                    </b>
                    <ul>
                      <li>Rombusz</li>
                      <li>Hatszög</li>
                      <li>Kör</li>
                      <li>Négyszög</li>
                    </ul>
                  </Par>
                  <Par>
                    <b>
                      <b>Standard lemez méretek:</b>
                    </b>
                    <br></br>Vastagság: 1,0 - 4,0mm-ig; 1000x2000mm - alap;
                    1250x2500 mm - közép;
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi lemez méretek:</b>
                    </b>
                    <br></br>Szinte bármilyen méret és egyedi lyukasztás
                    rendelhető (megfelelő mennyiség mellett).
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/zartszelveny.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">
                    Zártszelvények, csövek, L, T, U, Z profilok
                  </H3>
                  <Par>
                    <b>
                      <b>Felhasználási terület:</b>
                    </b>
                    <br></br>Reklámipar, bútoripar, műszeripar, járműipar stb.
                  </Par>
                  <Par>
                    <b>
                      <b>Gyakori minőségek:</b>
                    </b>
                    <br></br>EN AW-6060 T66 (AlMgSi0,5 F22)
                  </Par>
                  <Par>
                    <b>
                      <b>Méretek:</b>
                    </b>
                    <br></br>Standard szálhossz: 6000mm;
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi méretek:</b>
                    </b>
                    <br></br>Minimum 500 kg megrendelés esetén egyedi
                    szálhosszban és minőségben is vállaljuk szálanyagok
                    gyártását.
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/rudak.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Rudak (lapos, négyzet, kör, hatszög)</H3>
                  <Par>
                    <b>
                      <b>Felhasználási terület:</b>
                    </b>
                    <br></br>Járműipar, gépgyártás, építőipar.
                  </Par>
                  <Par>
                    <b>
                      <b>Gyakori minőségek:</b>
                    </b>
                    <br></br>EN AW-6060 (AlMgSi05); EN AW-6082 (AlSi1MgMn); EN
                    AW-2007 (AlCu4PbMgMn);
                  </Par>
                  <Par>
                    <b>
                      <b>Méretek:</b>
                    </b>
                    <br></br>Standard szálhossz: 3000mm; 6000mm;
                  </Par>
                  <Par>
                    <b>
                      <b>Egyedi méretek:</b>
                    </b>
                    <br></br>Minimum 500 kg megrendelés esetén egyedi
                    szálhosszban és minőségben is vállaljuk szálanyagok
                    gyártását.
                  </Par>
                </div>
              </ProductSheet>

              <ProductSheet>
                <div className="relative lg:w-1/3 min-w-72 w-full max-h-72 min-h-72">
                  <Image
                    src="/termekek/alakos-profil.webp"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="z-0 group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                  <H3 className="pb-4">Alakos (speciális) profilok</H3>
                  <Par>
                    <b>
                      <b>Termékleírás:</b>
                    </b>
                    <br></br>Bármilyen egyedi profil megrajzolását és gyártását
                    vállaljuk, minimum 500 kg mennyiség megrendelése esetén.
                  </Par>
                  <Par>
                    <b>
                      <b>Gyakori minőségek:</b>
                    </b>
                    <br></br>EN AW-6060 (AlMgSi0,5); EN AW-6082 (AlSi1MgMn);
                  </Par>
                  <Par>
                    <b>
                      <b>Méretek:</b>
                    </b>
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
