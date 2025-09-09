"use client";

import Image from "next/image";
import Par from "./Typo/Par";
import H3 from "./Typo/H3";
import H2 from "./Typo/H2";
import Label from "./Typo/Label";
import Link from "next/link";
import {
  TbArrowBigRightLines,
  TbAnchor,
  TbPhone,
  TbMail,
  TbUsersGroup,
  TbClock,
} from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import GoogleMaps from "../GoogleMaps";

import { useContext, useEffect } from "react";
import { Context } from "@/app/Context";
import Modal from "./Modal";

export default function Footer() {
  const { openPopup, togglePopup, form, setForm } = useContext(Context);

  return (
    <>
      <Modal openstate={openPopup} onClose={() => togglePopup(null)}>
        <>
          {form === "fizetesi-modok" && (
            <div className="flex flex-col gap-4">
              <H2 classname={"text-center"}>Fizetési módok</H2>
              <ul className="flex flex-col gap-2 marker:text-[--orange] list-disc ml-6">
                <li>Készpénz</li>
                <li>Előreutalás</li>
                <li>Halasztott fizetés előzetes hitelbírálat alapján</li>
              </ul>
            </div>
          )}

          {form === "aszf" && (
            <div className="flex flex-col gap-4">
              <H2>Általános Értékesítési és Szállítási Feltételek</H2>
              <H3>I. Bevezető rendelkezések </H3>
              <Par>
                1. A jelen Általános Szerződési Feltételek - a továbbiakban:
                ÁSZF - a MetAlCu Trade Kft. (székhelye: 1055 Budapest, Bihari
                János utca 13. Telephely: 2051 Biatorbágy, Rozália park 11.
                hrsz.: 2667/43., cégjegyzékszáma: cégjegyzékszám: 01-09-438707,
                adószám: 24836577-2-41) - a továbbiakban Szállító -
                értékesítéseit és termékszállításait szabályozzák, és a felek
                között létrejövő valamennyi eseti szállítási szerződés
                elválaszthatatlan részét képezik. A Megrendelő jelen ÁSZF-fel
                ellentétes, attól eltérő és/vagy egyéb kikötései kizárólag a
                Szállító esetenkénti írásbeli elfogadó nyilatkozatával
                érvényesek. Jelen ÁSZF alkalmazása során „Megrendelő” alatt az
                egyes szállítási szerződésekben szereplő megrendelőt, mint másik
                szerződő felet, illetve „Termék” alatt az egyes szállítási
                szerződésekben értékesített terméket - a Szállító által
                importált és Magyarországon forgalmazott színesfém és
                acél-félgyártmányok és egyéb termékek - kell érteni.
              </Par>
              <Par>
                2. A jelen ÁSZF keretében a Szállító kötelezettséget vállal
                arra, hogy a Megrendelő részére a Terméket a közöttük létrejött
                eseti szerződésben foglalt feltételekkel a Megrendelő részére
                leszállítja.
              </Par>
              <Par>
                A Megrendelő kötelezettséget vállal arra, hogy az eseti
                szerződésben felsorolt és részletezett Terméket átveszi, és a
                vételárát kifizeti.
              </Par>
              <Par>
                3. Szerződő felek kötelesek a közöttük létrejövő eseti
                szerződések teljesítése körében jóhiszeműen, a mindenkor
                hatályos magyar jogszabályoknak megfelelően eljárni, és
                kölcsönösen együttműködni.
              </Par>
              <H3>II. Ajánlatok és megrendelések (a szerződés létrejötte)</H3>
              <Par>
                1. A Szállító által tett bármilyen ajánlat, ideértve a
                katalógusaiban és egyéb nyomtatványokban szereplő ajánlatot is,
                csak az ajánlatban, vagy az ahhoz csatolt egyéb kiegészítésben
                megjelölt időpontig érvényes (ajánlati kötöttség). Amennyiben az
                ajánlat az ajánlati kötöttségre nézve időpont megjelölést nem
                tartalmaz, úgy a Szállítónak ajánlati kötöttsége nincs.
              </Par>
              <Par>
                2. A felek között az eseti szerződés a Megrendelő írásbeli (fax,
                e-mail, postai levél) megrendelése, és a Szállító írásbeli (fax,
                e-mail, postai levél) - a megrendeléssel megegyező tartalmú -
                visszaigazolása, vagy a Szállító eltérő tartalmú írásbeli (fax,
                e-mail, postai levél) visszaigazolásának Megrendelő általi
                írásbeli (fax, e-mail, postai levél) elfogadása útján jön létre.
                Az eseti szerződés abban az esetben is létrejön, ha a Szállító -
                külön visszaigazolás nélkül - a megrendelésben foglaltak szerint
                a Terméket a Megrendelő részére leszállítja. Az eseti
                szerződésnek megfelelően leszállított Termékre nézve a
                Szállítónak visszavételi kötelezettsége - a hibás teljesítés
                esetét kivéve - nincs. Az eseti szerződés létrejötte egyúttal a
                jelen ÁSZF elfogadását is jelenti.
              </Par>
              <Par>
                3. Az eseti szerződés létrejöttét követően a Megrendelő nem
                jogosult a megrendelése visszavonására, illetve az eseti
                szerződés egyoldalú nyilatkozattal történő megszüntetésére,
                kivéve, ha a felek az eseti szerződésben másként állapodnak meg,
                azzal, hogy a felek ilyen irányú megállapodása esetén is a
                Megrendelő a megrendelés visszavonása, vagy az eseti szerződés
                egyoldalú nyilatkozattal történő megszüntetése esetén a
                megrendelt, illetve az eseti szerződésben meghatározott Termék
                nettó (ÁFA nélkül számított) vételárának 10%-a mértékű kötbért
                köteles fizetni Szállítónak.
              </Par>
              <Par>
                4. A Szállító kizárja felelősségét arra az esetre, ha a Szállító
                nevében megtett ajánlat vagy a megrendelés visszaigazolása nem a
                Szállító ügyvezetőjétől vagy az ügyvezető által erre
                felhatalmazott személytől származik.
              </Par>
              <Par>
                5. A Szállító fenntartja a jogát arra, hogy a megrendelést
                aláíró/elküldő személy erre vonatkozó jogosultságának igazolását
                a Megrendelőtől megkérje. Ilyen esetben az eseti szerződés azon
                a napon jön létre, amelyen - a jelen ÁSZF-ben és az eseti
                szerződésben írt egyéb feltételek teljesülése mellett - a
                megrendelést aláíró/elküldő személy erre vonatkozó
                felhatalmazását a Megrendelő igazolta.
              </Par>
              <Par>
                6. A Megrendelő a Szállítóval létrejött eseti szerződését csak
                abban az esetben ruházhatja át más személyre, ha ahhoz a
                Szállító írásban hozzájárult.
              </Par>
              <H3>III. Szállítási határidő</H3>
              <Par>
                1. A Szállító a Terméket az eseti szerződésben meghatározott
                határidőben vállalja leszállítani.
              </Par>
              <Par>
                2. A határidőn túli teljesítés is szerződésszerű teljesítésnek
                minősül, ha a teljesítés határidőben történő teljesítése
                érdekében a Szállító úgy járt el, ahogy az adott helyzetben
                elvárható és a késedelem a Szállító partnerének késedelme
                következtében merült fel. Ebben az esetben a Szállító késedelme
                nem jogosítja fel a Megrendelőt az eseti szerződés egyoldalú
                nyilatkozattal történő megszüntetésére, valamint késedelmi
                kötbér és/vagy kárigény érvényesítésére.
              </Par>
              <Par>3. A Szállító rész- és előszállításra jogosult.</Par>
              <Par>
                4. A szállítás módját és útvonalát a Szállító jogosult
                meghatározni. Amennyiben az eseti szerződés alapján erre a
                Megrendelő jogosult, a Megrendelő az utasításait írásban és
                olyan módon, illetve határidőben köteles megadni, hogy Szállító
                szállítási kötelezettségét határidőben, biztonságosan
                teljesíthesse.
              </Par>
              <Par>
                5. A Szállító a Megrendelőt a teljesítés időpontjáról legalább 3
                munkanappal a teljesítés megkezdése előtt értesíti (készre
                jelentés). A Szállító készre jelentése alapján a Megrendelő
                köteles a Terméket átvenni, illetve ha a teljesítés helye nem a
                Megrendelő telephelye, úgy átvételére a teljesítés helyén a
                Szállító készre jelentésében jelzett napon megjelenni, a
                Terméket átvenni, illetve minden esetben a Termék átvételét
                követően a vételárat megfizetni.
              </Par>
              <Par>
                Amennyiben a Megrendelő a Termék leszállítását postai úton, vagy
                futárszolgálattal kéri, úgy a feladás a Megrendelő kockázatára
                történik.
              </Par>
              <Par>
                6. Amennyiben a Megrendelő átvételi kötelezettségének
                határidőben nem tesz eleget, a Szállítónak jogában áll -
                választása szerint - a határidőben át nem vett Termék
                ellenértékét a határidő lejártát követő nappal a Megrendelő felé
                kiszámlázni és a Terméket - raktározási díj felszámítása mellett
                - felelős őrzésbe venni, vagy póthatáridő megjelölése nélkül az
                eseti szerződéstől elállni és a Terméket más személy részére
                értékesíteni. Az átvétel késedelme/elmulasztása esetén a
                Megrendelő köteles késedelmi kötbért fizetni, amelynek mértéke
                késedelmes naponként az át nem vett termék nettó (ÁFA nélkül
                számított) vételárának 1%-a. A Szállító a kötbéren felül
                felmerült kára megtérítésére is jogosult.
              </Par>
              <Par>
                7. A 6. pontban írott rendelkezés irányadó abban az esetben is,
                ha Megrendelő az eseti szerződésben meghatározott határidőn
                belül köteles a Termék megrendelésére és átvételére, azonban e
                kötelezettségének nem vagy nem határidőben tesz eleget.
              </Par>
              <H3>IV. Teljesítés helye és ideje, és kárveszély átszállása</H3>
              <Par>
                1. A teljesítés ideje az a nap, amely a Szállító és a Megrendelő
                között létrejött eseti szerződésben meghatározásra került,
                illetve amelyen a Terméket a Megrendelő a teljesítés helyén
                igazoltan átvette.
              </Par>
              <Par>
                2. A tejesítés helye a Szállító és a Megrendelő között létrejött
                eseti szerződésben meghatározott hely (INCOTERMS 2010 ICC).
              </Par>
              <Par>
                3. A leszállított Termék szállítólevéllel kerül átadásra, melyen
                az átvételt a Megrendelő köteles aláírásával, cégbélyegzőjével
                igazolni.
              </Par>
              <Par>
                4. A teljesítés helyéig a kárveszély a Szállítót, míg azt
                követően a Megrendelőt terheli. A kárveszély a Termék fuvarozó
                részére történt átadásakor száll át a Megrendelőre, amennyiben a
                Termék fuvarozását a Megrendelő vállalta.
              </Par>
              <H3>V. Szállítási feltételek</H3>
              <Par>
                1. Amennyiben a fuvarozás díját és költségeit az eseti
                szerződésben kikötött paritás alapján nem tartalmazza a vételár,
                úgy a fuvarozás díja és költségei a Megrendelőt terhelik,
                amelyet a Megrendelő köteles a Szállító részére, annak számlája
                alapján megfizetni.
              </Par>
              <Par>
                2. A Szállító a Terméket biztonságos, szállításra alkalmas
                csomagolásban, az előírt dokumentumokkal (ADR, RID, stb.) együtt
                adja át Megrendelőnek, vagy a dokumentumokat utólag juttatja el
                a Megrendelő részére.
              </Par>
              <H3>VI. Vételár, fizetési feltételek</H3>
              <Par>
                1. A megrendelt Termék vételára a Szállító és a Megrendelő
                között létrejött eseti szerződésben meghatározott vételár. A
                vételárat a teljesítés napján érvényes általános forgalmi adó
                terheli.
              </Par>
              <Par>
                2. A Megrendelő részére biztosított engedmény, a vételár nettó
                (ÁFA nélkül számított) összegéből kerül levonásra.
              </Par>
              <Par>
                3. Amennyiben a Szállító ajánlata, a megrendelés visszaigazolása
                vagy az eseti szerződés másként nem rendelkezik, a vételár a
                Termék „Ex Works” (EXW) vételárát - a Termék a Szállító
                biatorbágyi raktárában, becsomagolva kerül átadásra a Megrendelő
                részére - jelenti. Amennyiben devizában meghatározott vételár
                esetén a Megrendelő a vételárat magyar forintban kívánja
                kiegyenlíteni, a Szállító a számlát magyar forintban, a Termék
                devizában meghatározott ára alapján, a Termék Szállítóhoz
                történt beérkezése napján érvényes MNB deviza középárfolyam
                figyelembe vételével állítja ki.
              </Par>
              <Par>
                4. Amennyiben a Szállító partnere a Termék vételárát felemeli
                vagy a Termékhez és a Szállító teljesítéséhez kapcsolódó egyéb
                díj, költség (pl. szállítási díj, biztosítási díj, vám) összege
                emelkedik és az áremelkedés mértéke a Termék Megrendelővel
                megkötött eseti szerződésben (megrendelésben, visszaigazolásban)
                meghatározott vételárát legalább 5%-al meghaladja, a Szállító
                jogosult a Vételárat egyoldalú írásos nyilatkozatával az
                áremelkedés mértékével megemelni. A Szállító az áremelésről
                haladéktalanul köteles a Megrendelőt értesíteni és egyúttal az
                áremelés okát igazolni. A Megrendelő az áremelési javaslat
                kézhezvételét követő 3 munkanapon belül írásban (telefax, vagy
                e-mail) köteles nyilatkozni, hogy azt elfogadja-e. Amennyiben
                Megrendelő nyilatkozattételi kötelezettségének határidőben nem
                tesz eleget, úgy a megváltozott ár a Megrendelő részéről
                elfogadottnak tekintendő. Amennyiben a Megrendelő a fenti
                határidőn belül megtett nyilatkozatával a megemelt vételárat nem
                fogadja el, az egyúttal az eseti szerződéstől történt elállásnak
                is minősül.
              </Par>
              <Par>
                5. A Termék vételárát a Megrendelő a Szállító számlája alapján
                készpénzben vagy a Szállító bankszámlájára történő átutalással
                köteles teljesíteni, az eseti szerződésben, illetve a számlán
                megadott feltételek szerint. A Szállító köteles a számlát
                legkésőbb a teljesítést követő 15 napon belül kiállítani, és a
                számlához a Megrendelő részéről átvevő személy aláírásával
                ellátott, az átvételt bizonyító dokumentációt (szállítólevél)
                csatolni, kivéve a jelen ÁSZF III. fejezet 6. pontjában foglalt
                esetet. A fizetési határidő az a nap, amelyen a számla
                ellenértékének a Szállító bankszámláján jóváírásra kell
                kerülnie.
              </Par>
              <Par>
                6. A Szállító a Megrendelőtől a teljes vételár pénzügyi
                fedezetének előzetes biztosítását követelheti, amennyiben:
              </Par>
              <ul className="marker:text-[--orange] list-disc ml-6">
                <li>
                  - a Megrendelőnek a Szállítóval szemben kiegyenlítetlen
                  tartozása van;
                </li>
                <li>
                  - egy éven belül előfordult, hogy Megrendelő fizetési
                  késedelembe esett;
                </li>
                <li>
                  - a Megrendelővel szemben csőd- felszámolási- vagy
                  végelszámolási eljárás, illetve végrehajtási eljárás van
                  folyamatban, vagy a Megrendelő tagjának (részvényesének)
                  részesedése (részvényei) lefoglalásra kerültek, vagy a
                  Megrendelő vagyonát közhitelű nyilvántartásba (pl.
                  ingatlan-nyilvántartás, hitelbiztosítéki nyilvántartás)
                  bejegyzett jog, tény terheli.
                </li>
              </ul>
              <Par>
                Ilyen esetben a Megrendelő és a Szállító a fizetési
                biztosítékról külön megállapodásban rendelkeznek, mely
                megállapodás megkötése és a megállapodásban meghatározott
                fizetési biztosíték teljesítése a felek közötti eseti szerződés
                hatályba lépésének feltétele.
              </Par>
              <Par>
                Fizetési késedelem esetén a Szállító a 2013. évi V. tv. (Ptk.)
                6:155.§-ban meghatározott mértékű késedelmi kamatot számít fel,
                mely a fizetési határidő utolsó napját követő naptól esedékes.
              </Par>
              <Par>
                7. A Megrendelő a Szállító által teljesített Termék vételárába
                kizárólag a Szállító által legalább teljes bizonyítóerejű
                magánokiratba foglalt nyilatkozattal elismert vagy bíróság
                Szállítót marasztaló jogerős ítéletében meghatározott fizetési
                kötelezettség összegét számíthatja be. Egyéb igény, követelés
                Megrendelő általi beszámítását a felek kizárják.
              </Par>
              <Par>
                8. Megrendelő köteles megtéríteni a Szállító minden igazolt
                költségét (pl. ügyvédi munkadíj), amely a Megrendelővel szembeni
                igény érvényesítésével kapcsolatban merült fel.
              </Par>
              <Par>
                9. A Megrendelő fizetési késedelme esetén a Szállító jogosult
                póthatáridő tűzése nélkül a Szerződéstől írásban elállni és/vagy
                a termék-kiadást leállítani, amíg Megrendelő a Szállítóval
                szemben fennálló, ki nem egyenlített tartozását és annak
                járulékait meg nem fizeti. Szállító jogszerű elállása esetén
                Megrendelő a Szállítóval szemben semmilyen igényt nem
                támaszthat.
              </Par>
              <Par>
                10. Amennyiben a Megrendelő fizetés-, vagy hitelképességét
                illetően az eseti szerződés megkötését követően indokolt kétség
                merül fel, úgy - a Szállító valamennyi követelését írásbeli,
                indokolt nyilatkozattal lejárttá teheti, és/vagy -
                felszólíthatja a Megrendelőt, hogy az eseti szerződésben
                meghatározott Termék vételárát a Szállító tejesítését megelőzően
                fizesse ki, vagy a teljesítésére adjon biztosítékot, és -
                amennyiben ezen felhívásnak a Megrendelő nem tesz eleget, úgy a
                Szállító jogosult elállni az eseti szerződéstől, a Terméket más
                személy részére értékesíteni, és igazolt kárának megtérítését
                követelni a Megrendelőtől.
              </Par>
              <Par>
                11. A vételár kifizetése azon a napon minősül teljesítettnek,
                amelyen a vételár a Szállító eseti szerződésben megjelölt
                bankszámláján jóváírásra került. A Szállító a Megrendelő
                teljesítését elsődlegesen a követelése érvényesítésével
                kapcsolatban felmerült költségre, az esedékessé vált ügyleti
                és/vagy késedelmi kamatra, végül a tőkekövetelésre számolja el,
                továbbá amennyiben a Szállítónak a Megrendelővel szemben több,
                különböző követelése van, úgy a Megrendelő teljesítését a
                legrégebbi követelésre számolja el függetlenül attól, hogy a
                Megrendelő milyen közleménnyel, hivatkozással teljesít fizetést.
              </Par>
              <H3>VII. Tulajdonjog fenntartása</H3>
              <Par>
                1. A Szállító a Termékre vonatkozó tulajdonjogát mindaddig
                fenntartja, amíg a Megrendelő a Termék teljes vételárát ki nem
                egyenlíti, valamint az eseti szerződésből illetőleg annak
                megszegéséből eredő összes kötelezettségét nem teljesítette.
              </Par>
              <Par>
                2. A Szállítónak jogában áll a tulajdonjog-fenntartással átadott
                Terméket visszakövetelni a Megrendelőtől, amennyiben az a
                Szállítóval szemben fennálló kötelezettségei teljesítésével
                késedelembe esik.
              </Par>
              <Par>
                3. A Megrendelő a teljes vételár kiegyenlítéséig nem jogosult az
                átvett Termék elidegenítésére és megterhelésére.
              </Par>
              <Par>
                4. Amennyiben a Terméket a Megrendelő a visszakövetelést
                megelőzően már feldolgozta, úgy az új Termék közös tulajdonnak
                minősül, melyben Szállító tulajdoni hányada megegyezik az általa
                szállított Termék vételárának a feldolgozással létrejött dolog
                forgalmi értékéhez viszonyított arányával. Megrendelő köteles a
                feldolgozással létrejött dolog értékesítéséből származó
                követelését és ezek biztosítékait a Szállítóra engedményezni a
                közös tulajdont képező dolog Szállítót illető tulajdoni
                hányadának arányában.
              </Par>
              <H3>
                VIII. A Termék minőségi és mennyiségi átvétele, minőség
                tanúsítása
              </H3>
              <Par>
                1. A Megrendelő minden mennyiségi eltérést az átvételkor, de
                legfeljebb a Termék átvételétől számított három (3) munkanapos
                jogvesztő határidőn belül, a minőségi eltérést pedig a Termék
                átvételétől számított nyolc (8) munkanapos jogvesztő határidőn
                belül, e-mail-en, telefaxon vagy ajánlott levélben köteles a
                Szállítónak jelezni. A késedelmes bejelentésből eredő károkért a
                Szállítót nem terheli felelősség. Nem minősül a Szállító hibás
                teljesítésének a Termék mennyiségének a szerződésben
                meghatározott mennyiségtől való, ± 10 %-ot meg nem haladó
                eltérése. A számlázás alapját a szállítólevélen megjelölt
                súlyadat képezi, kivéve, ha a felek másként állapodtak meg.
              </Par>
              <Par>
                2. Amennyiben a Termék fuvarozó útján kerül leszállításra,
                hiány, vagy sérülés esetén a Megrendelő köteles a megfelelő
                dokumentumokat (szállítólevélen a hiba jelzése, közös
                kárfelvételi jegyzőkönyv, stb.) biztosítani, annak érdekében,
                hogy a kár a fuvarozóval szemben érvényesíthető legyen. Ennek
                elmulasztása esetén a Megrendelő a Szállítóval szemben hibás
                teljesítés miatt igényt nem érvényesíthet.
              </Par>
              <Par>
                3. Szükség esetén a mennyiségi-minőségi kifogás rendezése
                céljából, a felek mindkét fél részvételével helyszíni szemlét
                tartanak, az erről készült jegyzőkönyvet a jelenlévő felek
                képviselői aláírással hitelesítik. Vita esetén a felek a
                megfelelő szakértelemmel rendelkező igazságügyi szakértő
                szakvéleményét fogadják el irányadónak. A szakértő díját az a
                fél viseli, akinek az álláspontját a szakértői vélemény nem
                támasztja alá, azzal, hogy amennyiben a szakértői vélemény egyik
                fél álláspontját sem támasztja alá teljes mértékben, úgy a
                szakértő díját a szakértő által meghatározott arányban, ennek
                hiányában egymás között egyenlő arányban viselik.
              </Par>
              <Par>
                4. Minőségi reklamáció esetén a kifogásolt Termék - a Szállító
                által igényelt mintát kivéve - csak a Szállító előzetes írásbeli
                jóváhagyásával küldhető vissza. A Termék jogosulatlan
                visszaküldése esetén a Szállító nem köteles visszafizetni a
                vételárat. A Szállítóhoz visszaküldött Termék szállítási
                költsége a Szállító által elfogadott reklamáció esetén a
                Szállítót, egyébként a Megrendelőt terheli.
              </Par>
              <Par>
                5. A Megrendelő az általa minőségileg kifogásolt Terméket nem
                jogosult felhasználni, a felhasználásból eredő károkért Szállító
                felelősséget nem vállal.
              </Par>
              <Par>
                6. A visszaküldött Termék átvétele, és/vagy a kifogásolt hiba
                vizsgálatának megkezdése nem jelenti a Megrendelő igényének
                Szállító általi elismerését.
              </Par>
              <Par>
                7. A Szállító a Termék minőségét az érvényes szabványoknak
                megfelelően tanúsítja. A minőség ezt meghaladó tanúsítása a
                Megrendelő ilyen irányú kérése esetén kizárólag a Megrendelő
                költségére történhet.
              </Par>
              <H3>IX. Kellékszavatosság, jogszavatosság</H3>
              <Par>
                1. A Szállító által forgalmazott Termék minőségéért a mindenkor
                hatályos jogszabályok szerinti, vagy a gyártó által
                meghatározott ideig (figyelemmel az egyes anyagok
                sajátosságaira) szavatosságot vállal, azaz szavatolja, hogy a
                Termék az átadása idején a felek között létrejött eseti
                szerződésben kikötött specifikációnak, ill. szabványnak
                megfelel. A Szállítót a specifikáció, ill. szabvány előírásait
                meghaladó minőségért (karcmentesség, stb.) szavatosság kizárólag
                az esetben terheli, amennyiben a Megrendelő megrendelésében
                foglalt ilyen irányú igényét a Szállító írásban visszaigazolta.
              </Par>
              <Par>
                Erre vonatkozó kifejezett írásbeli kötelezettségvállalás
                hiányában a Szállító nem szavatolja, hogy a Termék alkalmas
                bármely, a Megrendelő által elérni kívánt célra.
              </Par>
              <Par>
                2. A szavatosság nem vonatkozik a Termék olyan hibáira,
                hiányosságaira, melyek az átvételt követően keletkeztek, vagy
                amelyeket a Megrendelő a VIII. fejezet 1. pontban szabályozott
                határidőn belül szabályszerűen bejelenteni elmulasztott.
              </Par>
              <Par>
                3. A szabályszerűen érvényesített és alapos szavatossági igény
                esetén a Szállító - a Megrendelő választása szerint - kijavítja
                vagy kicseréli a Terméket, kivéve, ha a választott
                kellékszavatossági jog teljesítése lehetetlen, vagy aránytalan
                többletköltséget eredményezne vagy a Termék vételárát arányosan
                leszállítja és a különbözetet a Megrendelő részére visszatéríti.
                A Megrendelő a Terméket a Szállító költségére
                kijavíthatja/kijavíttathatja, kivéve, ha ennek teljesítése
                lehetetlen. A Megrendelő az eseti szerződéstől elállhat, ha a
                Szállító a kijavítást vagy a kicserélést nem vállalta, vagy ezen
                kötelezettségnek lehetetlen eleget tenni, vagy megfelelő
                határidőn belül nem tett eleget, vagy a Megrendelő kijavításhoz,
                kicseréléshez fűződő érdeke megszűnt, azzal, hogy jelentéktelen
                hiba miatt elállásnak nincs helye.
              </Par>
              <Par>
                A szavatossági igény érvényesítése akkor szabályszerű, ha a
                Megrendelő az igény érvényesítésével egyidejűleg bemutatja a
                Termékre vonatkozó számlát és műbizonylatot.
              </Par>
              <Par>
                A Szállító a hibás teljesítéssel összefüggő bármely - akár
                közvetlen, akár közvetett - kár miatti igénnyel szembeni
                helytállásának mértékét a hibás teljesítéssel érintett Termék
                nettó (ÁFA nélkül számított) vételárának mértékére korlátozza.
                Nem érvényesíthető kellékszavatosság a Szállítóval szemben abban
                az esetben, ha a Terméket a Megrendelő feldolgozta (pl.
                darabolás, beépítés).
              </Par>
              <Par>
                Nem érvényesíthető kellékszavatosság a Szállítóval szemben abban
                az esetben, ha a Terméket a Megrendelő feldolgozta (pl.
                darabolás, beépítés).
              </Par>
              <Par>
                4. Az olyan Termék tekintetében, amelyet a Szállító az eseti
                szerződésnek megfelelően kifejezetten értékcsökkent (II.
                osztályú, hibás stb.) termékként értékesít, a Szállító
                szavatosságot nem vállal. Ezen Termék értékcsökkent jellegét a
                felek a vételár megállapításánál figyelembe vették, így ezen
                túlmenően a megrendelő a Termékkel kapcsolatban a Szállítóval
                szemben semmilyen igénnyel nem élhet.
              </Par>
              <Par>
                5. A Termék felhasználása és/vagy újraértékesítése esetén a
                vonatkozó törvényi és hatósági előírások betartásáért kizárólag
                Megrendelő felel, Szállítót a szabályok megszegéséből eredő
                kárért semmilyen felelősség nem terheli.
              </Par>
              <Par>
                6. A Szállító szavatol azért, hogy az általa a Megrendelő
                részére szállított Termék kizárólagos, per-, teher- és
                igénymentes tulajdonát képezi, melyet az eseti szerződés
                rendelkezései szerint minden igénytől és tehertől mentesen
                teljes mértékben átad a Megrendelő részére.
              </Par>
              <H3>X. Vis maior</H3>
              <Par>
                1. Vis maior események, melyek a Szállítót vagy bármely
                beszállítóját érintik, feljogosítják a Szállítót arra, hogy az
                akadályoztatás idejére, méltányos póthatáridő kitűzése mellett a
                teljesítést elhalassza, illetve amennyiben a szállítás nem
                lehetséges az eseti szerződéstől részben vagy egészben elálljon.
                Vis maior esetnek számít többek között a földrengés,
                villámcsapás, fagy, köd, vihar, áradások minden teljesítést
                nehezítő kihatása, háború, törvény- illetve hatósági
                beavatkozások, lefoglalás, üzemzavarok, sztrájk, nemzetközi
                fizetési korlátozások, alapanyag- energia kiesés, szabotázs,
                terrorcselekmények stb.
              </Par>
              <H3>XI. Részbeni érvénytelenség</H3>
              <Par>
                1. Amennyiben a jelen ÁSZF bármely rendelkezése érvénytelenné,
                végrehajthatatlanná vagy értelmezhetetlenné válna, úgy a többi
                feltétel érvényességét, végrehajtását, értelmezését ez nem
                érinti. Az érvénytelen, végrehajthatatlan, értelmezhetetlen
                rendelkezés helyett a felek haladéktalanul olyan rendelkezésben
                állapodnak meg, amely az eredeti rendelkezéshez és a felek
                ügyleti akaratához a lehető legközelebb áll.
              </Par>
              <H3>XII. Incoterms</H3>
              <Par>
                1. A Felek ellenkező rendelkezése hiányában az érintett
                szerződéses feltételek értelmezésénél az INCOTERMS 2010 ICC
                meghatározásai érvényesek.
              </Par>
              <H3>XIII. Vitás kérdések rendezése</H3>
              <Par>
                1. A jelen ÁSZF a magyar jog alapján készült. A jelen ÁSZF-ben
                nem szabályozott kérdésekben a mindenkori magyar jogszabályok
                rendelkezései alkalmazandóak.
              </Par>
              <Par>
                2. A Felek az eseti szerződésből eredően közöttük felmerült
                vitás kérdéseket elsősorban tárgyalás útján, egyezséggel
                kísérlik meg rendezni a vita alapjául szolgáló tény, adat,
                körülmény felmerülésétől számított 30 napon belül. Amennyiben az
                írásbeli egyezség megkötésére a fenti időtartamon belül nem
                kerül sor, a Felek a jogvita rendezésére kikötik a Budaörsi
                Járásbíróság, illetve ha a jogvita elbírálása törvényszéki
                hatáskörbe tartozik, a Székesfehérvári Törvényszék kizárólagos
                illetékességét.
              </Par>
              <H3>XIV. Környezetvédelem/munkahelyi egészség</H3>
              <Par>
                1. A Szállító elkötelezett a környezet védelme mellett. A
                Szállító székhelyére/telephelyére belépő személyek részére -
                biztonságuk érdekében - munkavédelmi tájékoztatót biztosít. A
                telephelyen a KRESZ szabályai érvényesek.
              </Par>
              <Par>
                2. A Megrendelővel munkaviszonyban vagy munkavégzésre irányuló
                egyéb jogviszonyban álló személyek (együtt: munkavállaló) -
                amennyiben bármely oknál fogva a Szállító
                székhelyére/telephelyére belépnek, ott munkát végeznek - nem
                tekintendők a Szállító munkavállalóinak és nem részesülhetnek a
                Szállító által saját munkavállalójának adott vagy biztosított
                kedvezményekből vagy előnyökből. A Megrendelő munkavállalója a
                Szállító székhelyére/telephelyére csak a Szállító engedélyével
                léphet be, vonatkozik rá a székhely/telephely rendje és köteles
                ennek megfelelő, valamint az adott helyzetben általában
                elvárható magatartást tanúsítani, továbbá a jogszabályokban
                előírt egészségügyi, biztonsági és környezetvédelmi szabályokat
                betartani. A Szállító a Megrendelő munkavállalóját ért baleset,
                kár miatti felelősségét kizárja, kivéve ha a baleset, kár a
                Szállító felróható magatartása (mulasztás, utasítás) miatt
                következett be.
              </Par>
              <H3>XV. Üzleti titok. Szellemi alkotások joga</H3>
              <Par>
                1. A Szállító a reá vonatkozó és a Megrendelővel közölt, illetve
                a Megrendelő által megszerzett minden információt üzleti
                titoknak minősít, kivéve, ha az információ nyilvános
                adatbázisban fellelhető. A Megrendelő a vele közölt, illetve
                megszerzett információt kizárólag a Szállítóval fennálló eseti
                szerződése teljesítése érdekében és az eseti szerződés
                fennállása alatt használhatja fel. Amennyiben a Megrendelő a
                jelen pontban meghatározott kötelezettségét megsérti, úgy
                jogsértésenként 10.000.- EUR kötbér megfizetésére köteles. A
                jogsértés száma az üzleti titkot képező információ más személy
                részére történt továbbadásának számához, illetve
                felhasználásának számához igazodik.
              </Par>
              <Par>
                2. A Szállító a Megrendelőre vonatkozó, a Megrendelő által vele
                közölt vagy a Szállító által megszerzett információt üzleti
                titoknak tekinti és kizárólag a Megrendelővel létrejött eseti
                szerződés teljesítése és az azzal kapcsolatos jogai és törvényes
                érdekei érvényesítése érdekében használja fel.
              </Par>
              <Par>
                3. A Megrendelő kijelenti, hogy minden, a Szállító részére
                átadott információ vonatkozásában teljes és korlátlan joga van
                ezeket felhasználni és a Szállító részére átadni. A Megrendelő
                kijelenti, hogy az általa átadott információ, illetve annak
                átadása más személy jogát, törvényes érdekét nem sérti.
                Amennyiben a Szállítóval szemben a Megrendelő által átadott
                információ felhasználása miatt más személy bármely eljárást
                indít, a Megrendelő köteles - amennyiben erre lehetőség van - az
                eljárásba a Szállító oldalán belépni és köteles a Szállítót a
                minden olyan igénytől (hátrány, költség, kár stb.) mentesíteni,
                amelyet a Szállítóval szemben érvényesítenek és megtéríteni a
                Szállító minden olyan kárát (díj, költség, illeték stb.), amely
                ilyen eljárással összefüggésben a Szállítónál felmerült.
              </Par>
              <Par>
                4. A Felek együttműködése során a Szállítónál létrejött bármely
                szellemi alkotás (találmány, újítás, know-how, védjegy, szoftver
                stb.) a Szállító tulajdonát képezi. A Szállítónál létrejött
                szellemi alkotást a Megrendelő kizárólag a Szállítóval fennálló
                jogviszonyának időtartama alatt, az eseti szerződés teljesítése
                érdekében használhatja fel díjfizetési kötelezettség nélkül, azt
                követően a szellemi alkotás felhasználásának piacon szokásos
                díját köteles a Megrendelő a Szállító részére megfizetni.
                Amennyiben a szellemi alkotás felhasználásának kezdő napja,
                időtartama nem határozható meg, addig a napig, amelyen a
                Szállító a Megrendelővel szemben ezen igényét érvényesíti a
                Megrendelő 10.000.- EUR + ÁFA összegű átalánydíjat köteles a
                Szállító részére fizetni.
              </Par>
              <H3>XVI. Egyéb</H3>
              <Par>
                1. A Szállító a jelen ÁSZF módosításának jogát fenntartja. A
                Szállító és a Megrendelő között létrejött jogviszonyra az eseti
                szerződés létrejötte napján hatályos ÁSZF rendelkezései az
                irányadók. A Szállító a hatályos ÁSZF szövegét honlapján -
                https://www.metalcu.hu/ - teszi közzé, megjelölve a közzététel
                napját.
              </Par>
            </div>
          )}

          {form === "adatkezelesi" && (
            <div className="flex flex-col gap-4">
              <H2>Adatkezelési tájékoztató</H2>
              <H3>
                1. A Tájékoztató célja, hatálya; irányadó jogszabályok,
                alapelvek
              </H3>
              <Par>
                1.1 A jelen adatkezelési tájékoztató - a továbbiakban:
                Tájékoztató - rögzíti a MetAlCu Trade Kft. (székhelye: 1055
                Budapest, Bihari János utca 13. Telephely: 2051 Biatorbágy,
                Rozália park 11. hrsz.: 2667/43., cégjegyzékszáma:
                cégjegyzékszám: 01-09-438707, adószám: 24836577-2-41, email:
                office@metalcu.hu, honlap: https://www.metalcu.hu/, telefon:
                +36-70-626-6066) - a továbbiakban: Adatkezelő - által
                alkalmazott adatvédelmi és adatkezelési elveket, szabályokat.
              </Par>
              <Par>
                1.2 A Tájékoztató célja, hogy biztosítsa a személyes adatok
                védelmének érvényesülését és az információs önrendelkezés
                megvalósítását, valamint az Adatkezelő tevékenysége megfelelését
                a vonatkozó adatvédelmi jogszabályok rendelkezéseinek. Jelen
                Tájékoztató az Adatkezelő által kezelt személyes adatok köréről,
                felhasználásáról, az érintettek jogairól nyújt tájékoztatást.
              </Par>
              <Par>
                1.3 A Tájékoztató hatálya nem terjed ki azon tartalomra és
                adatkezelésre, amely az Adatkezelő honlapján hirdető, azon más
                módon megjelenő személyhez kapcsolódik, amely az Adatkezelő
                honlapjáról elérhető (hivatkozás, link), más személy által
                üzemeltetett honlaphoz kapcsolódik, vagy amelyet az érintett az
                Adatkezelő honlapján tett közzé. Az ilyen tartalomért,
                adatkezelését az Adatkezelő felelősséget nem vállal.
              </Par>
              <Par>
                1.4 Irányadó jogszabályok: i.) az Európai Parlament és a Tanács
                (EU) 2016/679 Rendelete (2016. április 27.) a természetes
                személyeknek a személyes adatok kezelése tekintetében történő
                védelméről és az ilyen adatok szabad áramlásáról, valamint a
                95/46/EK rendelet hatályon kívül helyezéséről (általános
                adatvédelmi rendelet, a továbbiakban: GDPR); ii.) az információs
                önrendelkezési jogról és az információszabadságról szóló 2011.
                évi CXII. törvény (a továbbiakban: Infotv.) iii.) a polgári
                törvénykönyvről szóló 2013. évi V. törvény (a továbbiakban:
                Ptk.) iv.) a személy- és vagyonvédelmi, valamint a magánnyomozói
                tevékenység szabályairól szóló 2005. évi CXXXIII. törvény (a
                továbbiakban: Vagyonvéd.tv.).
              </Par>
              <Par>
                1.5 Az Adatkezelés alapelvei: i.) az Adatkezelő az adatok
                kezelését jogszerűen és tisztességesen, valamint az érintett
                számára átlátható módon végzi; ii.) az Adatkezelő a személyes
                adatok gyűjtését csak meghatározott, egyértelmű és jogszerű
                célból végzi, és azokat nem kezeli ezekkel a célokkal össze nem
                egyeztethető módon; iii.) az Adatkezelő az adatkezelést annak
                célja(i) szempontjából a szükséges mértékre korlátozva végzi;
                nem gyűjt és nem tárol több adatot, mint amennyi az adatkezelés
                céljának a megvalósulásához feltétlenül szükséges; iv.) az
                Adatkezelő adatkezelése pontos és naprakész, továbbá minden
                észszerű intézkedést megtesz annak érdekében, hogy az
                adatkezelés céljai szempontjából pontatlan személyes adatok
                haladéktalanul törlésre vagy helyesbítésre kerüljenek. v.) az
                Adatkezelő a személyes adatokat olyan formában tárolja, amely az
                érintettek azonosítását csak a személyes adatok kezelése
                céljainak eléréséhez szükséges ideig teszi lehetővé, figyelemmel
                a vonatkozó jogszabályokban esetlegesen meghatározott tárolási
                kötelezettségre; vi.) az Adatkezelő megfelelő technikai vagy
                szervezési intézkedések alkalmazásával biztosítja a személyes
                adatok megfelelő biztonságát, ideértve a személyes adatok
                jogosulatlan vagy jogellenes kezelésével, véletlen
                elvesztésével, megsemmisítésével vagy károsodásával szembeni
                védelmet; vii.) az Adatkezelő felelős a fentiekben részletezett
                alapelveknek való megfelelésért, továbbá igazolja ezen
                megfelelést, így az Adatkezelő gondoskodik az adatvédelmi
                szabályozásaiban foglaltak folyamatos érvényesüléséről, az
                adatkezelésének folyamatos felülvizsgálatáról és szükség esetén
                az adatkezelési eljárások módosításáról, kiegészítéséről.
              </Par>
              <H3>2. Fogalom-meghatározások (a GDPR szerint)</H3>
              <Par>
                2.1 Adatkezelés: a személyes adatokon vagy adatállományokon
                automatizált vagy nem automatizált módon végzett bármely művelet
                vagy műveletek összessége, így a gyűjtés, rögzítés,
                rendszerezés, tagolás, tárolás, átalakítás vagy megváltoztatás,
                lekérdezés, betekintés, felhasználás, közlés továbbítás,
                terjesztés vagy egyéb módon történő hozzáférhetővé tétel útján,
                összehangolás vagy összekapcsolás, korlátozás, törlés, illetve
                megsemmisítés.
              </Par>
              <Par>
                2.2 Személyes adat: azonosított vagy azonosítható természetes
                személyre - a fentiekben és a továbbiakban: érintett - vonatkozó
                bármely információ; azonosítható az a természetes személy, aki
                közvetlen vagy közvetett módon, különösen valamely azonosító,
                például név, szám, helymeghatározó adat, online azonosító vagy a
                természetes személy testi, fiziológiai, genetikai, szellemi,
                gazdasági, kulturális vagy szociális azonosságára vonatkozó egy
                vagy több tényező alapján azonosítható.
              </Par>
              <Par>
                2.3 Adatkezelő: az a természetes vagy jogi személy, közhatalmi
                szerv, ügynökség vagy bármely egyéb szerv, amely a személyes
                adatok kezelésének céljait és eszközeit önállóan vagy másokkal
                együtt meghatározza.
              </Par>
              <Par>
                2.4 Adatfeldolgozó: az a természetes vagy jogi személy,
                közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely az
                adatkezelő nevében személyes adatokat kezel.
              </Par>
              <Par>
                2.5 Az érintett hozzájárulása: az érintett akaratának önkéntes,
                konkrét és megfelelő tájékoztatáson alapuló és egyértelmű
                kinyilvánítása, amellyel az érintett nyilatkozat vagy a
                megerősítést félreérthetetlenül kifejező cselekedet útján jelzi,
                hogy beleegyezését adja az őt érintő személyes adatok
                kezeléséhez.
              </Par>
              <Par>
                2.6 Adatvédelmi incidens: a biztonság olyan sérülése, amely a
                továbbított, tárolt vagy más módon kezelt személyes adatok
                véletlen vagy jogellenes megsemmisítését, elvesztését,
                megváltoztatását, jogosulatlan közlését vagy az azokhoz való
                jogosulatlan hozzáférést eredményezi.
              </Par>
              <H3>
                3. A kezelt személyes adatok köre, az adatkezelés célja,
                jogalapja, időtartama
              </H3>
              <Par>
                3.1 Az Adatkezelő honlapját bármely személy anélkül tekintheti
                meg, hogy bármiféle személyes adatot szolgáltatna magáról. Az
                adatkezelővel történő kapcsolatfelvétel esetén, akár természetes
                személyként, akár cég nevében történik a kapcsolatfelvétel,
                szükség van az érintett természetes személy, illetve a képviselt
                cég és a képviseleti jogosultság azonosítására, ellenőrzésére.
              </Par>

              <div className="overflow-hidden lg:max-w-[450px] max-w-[300px]">
                <div className="overflow-x-scroll">
                  <table className="table border border-grey-300 min-w-[1000px]">
                    <thead>
                      <tr className="bg-gray-200">
                        <th>cél, tevékenység</th>
                        <th>személyes adat</th>
                        <th>jogalap</th>
                        <th>időtartam</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          munkaviszony létesítése
                        </td>
                        <td className="border px-4 py-2">
                          név, születési név, lakóhely, tartózkodási hely,
                          irányítószám, születési hely, születési idő, anya
                          születési neve, adóazonosító jel, TAJ-szám,
                          állampolgárság, fénykép, bemutatkozás (CV),
                          telefonszám, e-mail cím, iskolai végzettség,
                          bankszámla szám, minden egyéb adat, amelynek kezelését
                          jogszabály előírja
                        </td>
                        <td className="border px-4 py-2">
                          az érintett hozzájárulása, szerződés teljesítése, jogi
                          kötelezettség teljesítése, jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a jelentkezés elbírálásáig, a munkaviszony
                          fennállásáig, jogszabály által előírt időtartamig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          munkavégzésre irányuló egyéb jogviszony létesítése
                        </td>
                        <td className="border px-4 py-2">
                          a munkaviszony létesítése körében felsorolt adatok
                          közül azok, amelyek a jogviszony jellegétől függően
                          szükségesek
                        </td>
                        <td className="border px-4 py-2">
                          az érintett hozzájárulása, szerződés teljesítése, jogi
                          kötelezettség teljesítése, jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a jelentkezés elbírálásáig, a jogviszony fennállásáig,
                          jogszabály által előírt időtartamig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          kapcsolatfelvétel az érintett részéről
                        </td>
                        <td className="border px-4 py-2">
                          név, telefonszám, e-mail cím, szabadszavas üzenetben
                          megadott személyes adat
                        </td>
                        <td className="border px-4 py-2">
                          az érintett hozzájárulása, jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a hozzájárulás visszavonásáig, a jogos érdek
                          megszűnéséig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          az Adatkezelő üzletkörébe tartozó eseti szerződés az
                          Adatkezelő és természetes személy között
                        </td>
                        <td className="border px-4 py-2">
                          név, születési név, lakóhely, tartózkodási hely,
                          irányítószám, születési hely, születési idő, anya
                          születési neve, adóazonosító jel, telefonszám, e-mail
                          cím, bankszámla szám
                        </td>
                        <td className="border px-4 py-2">
                          az érintett hozzájárulása, szerződés teljesítése, jogi
                          kötelezettség teljesítése, jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a jogos érdek megszűnéséig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          az Adatkezelő üzletkörébe tartozó eseti szerződés az
                          Adatkezelő és nem természetes személy között
                        </td>
                        <td className="border px-4 py-2">
                          név, lakóhely, tartózkodási hely, irányítószám,
                          telefonszám, e-mail cím
                        </td>
                        <td className="border px-4 py-2">
                          az érintett hozzájárulása, szerződés teljesítése, jogi
                          kötelezettség teljesítése, jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a jogos érdek megszűnéséig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          statisztika, elemzés, adatbázis készítése
                        </td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2">
                          jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a jogos érdek megszűnéséig, de legfeljebb 5 évig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          üzletszerzési, marketing célú megkeresés
                        </td>
                        <td className="border px-4 py-2">
                          név, telefonszám, e-mail cím
                        </td>
                        <td className="border px-4 py-2">
                          az érintett hozzájárulása
                        </td>
                        <td className="border px-4 py-2">
                          a hozzájárulás visszavonásáig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          számviteli kötelezettség teljesítése
                        </td>
                        <td className="border px-4 py-2">
                          név, születési név, lakóhely, tartózkodási hely,
                          irányítószám, születési hely, születési idő, anya
                          születési neve, adóazonosító jel, TAJ-szám,
                          telefonszám, e-mail cím, bankszámla szám
                        </td>
                        <td className="border px-4 py-2">
                          jogi kötelezettség teljesítése
                        </td>
                        <td className="border px-4 py-2">
                          a jogi kötelezettség fennállásáig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          az érintett jogainak védelme
                        </td>
                        <td className="border px-4 py-2">
                          az érintett IP címe
                        </td>
                        <td className="border px-4 py-2">
                          jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a jogos érdek megszűnéséig, de legfeljebb 5 évig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          az informatikai rendszer technikai fejlesztése
                        </td>
                        <td className="border px-4 py-2">
                          az érintett IP címe
                        </td>
                        <td className="border px-4 py-2">
                          jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a jogos érdek megszűnéséig, de legfeljebb 5 évig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          kamerás megfigyelés (székhely/telephely vagyonvédelme,
                          élet, testi épség védelme)
                        </td>
                        <td className="border px-4 py-2">
                          az érintett testi, viselkedési jellemzői
                        </td>
                        <td className="border px-4 py-2">
                          jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a jogos érdek megszűnéséig, de ha a hosszabb
                          időtartamú adattárolás indoka nem merül fel, 15 napig
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          visszaélés bejelentés (a bejelentés kivizsgálása, a
                          szükséges intézkedés megtétele)
                        </td>
                        <td className="border px-4 py-2">
                          a bejelentő és a bejelentett személy bejelentésben
                          megadott személyes adatai, amelyek köre a bejelentés
                          tárgyától, jellegétől függően változhat
                        </td>
                        <td className="border px-4 py-2">
                          az érintett hozzájárulása, jogi kötelezettség
                          teljesítése, jogos érdek érvényesítése
                        </td>
                        <td className="border px-4 py-2">
                          a hozzájárulás visszavonásáig, jogi kötelezettség
                          teljesítéséig, a jogos érdek megszűnéséig
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Par>
                Az Adatkezelő az érintett adatait több jogalap alapján is
                kezelheti, amely esetben az adatkezelés időtartama ahhoz a
                jogalaphoz igazodik, amely alapján a személyes adat a
                leghosszabb időtartamig kezelhető.
              </Par>
              <Par>
                A kamerás megfigyelésre és az ennek során rögzített adat
                megismerésére az Adatkezelőnél a portaszolgálatot ellátó
                munkavállaló, a vagyonvédelmi, illetve az ehhez kapcsolódó
                technikai, informatikai feladatokkal, ellenőrzéssel megbízott
                személy, valamint az Adatkezelő ügyvezetője jogosult. Ezen
                személyek körét az Adatkezelő ügyvezetője jogosult mindenkor
                meghatározni. Az érintett az ellenőrzéssel együtt járó
                adatkezeléssel kapcsolatban e Tájékoztatónak az érintett
                jogairól szóló bekezdésében írt jogokkal élhet. Az, akinek jogát
                vagy törvényes érdekét a képfelvétel adatának rögzítése érinti,
                annak rögzítésétől számított 15 napon belül jogának vagy
                törvényes érdekének igazolásával kérheti az Adatkezelő
                ügyvezetőjétől, hogy az adatot annak az Adatkezelő ne semmisítse
                meg, illetve ne törölje.
              </Par>
              <Par>
                3.3 Az Adatkezelő a megadott személyes adatokat a fenti céloktól
                eltérő célokra nem használja fel.
              </Par>
              <Par>
                3.4 Az érintett a hozzájáruláson alapuló adatkezelés esetén
                jogosult a hozzájárulását bármikor visszavonni, amely azonban
                nem érinti a visszavonás előtti adatkezelés jogszerűségét. A 16.
                életévét be nem töltött személy érintett személyes adatai csak a
                felette szülői felügyeletet gyakorló nagykorú személy
                hozzájárulása esetén kezelhetők. Az Adatkezelőknek nem áll
                módjában a hozzájáruló személy jogosultságát, illetve
                nyilatkozatának tartalmát ellenőrizni, így az érintett, illetve
                a felette szülői felügyeletet gyakorló személy szavatol azért,
                hogy a hozzájárulás megfelel a jogszabályoknak. Hozzájáruló
                nyilatkozat hiányában az Adatkezelő 16. életévét be nem töltött
                érintettre vonatkozó személyes adatot - az érintett részéről
                történt kapcsolatfelvételkor használt IP cím kivételével, amely
                rögzítésére automatikusan kerül sor - nem gyűjt.
              </Par>
              <Par>
                3.5 Ha az adatkezelés jogalapja az Adatkezelő vagy egy harmadik
                fél jogos érdeke, az Adatkezelő érdekmérlegelési tesztet köteles
                végezni, amely igazolja vagy cáfolja, hogy az Adatkezelő vagy
                egy harmadik személy jogos érdeke felülírja az érintett
                adatkezeléssel összefüggő jogait és szabadságait.
              </Par>
              <Par>
                3.6 Az érintett szavatol azért, hogy az általa más természetes
                személyről megadott vagy hozzáférhetővé tett személyes adat
                kezeléséhez annak hozzájárulását jogszerűen beszerezte. Az
                érintett által, más természetes személyre nézve megadott
                személyes adattal kapcsolatos minden felelősség az érintettet
                terheli
              </Par>
              <Par>
                3.7 Az érintett e-mail címének valamint a regisztráció során
                megadott adatainak (pl. felhasználó név, azonosító, jelszó stb.)
                megadásakor felelősséget vállal azért, hogy az általa megadott
                e-mail címről, illetve az általa megadott adatok
                felhasználásával kizárólag ő, saját nevében, vagy az általa
                jogszerűen képviselt személy nevében jár el. Erre tekintettel
                egy adott e-mail címről és/vagy adatokkal történt belépéssel
                összefüggő mindennemű felelősség kizárólag azt az érintettet
                terheli, aki az e-mail címet és az adatokat megadta.
              </Par>
              <Par>
                3.8 Cookie-k használata az Adatkezelő honlapján: Az Adatkezelő
                honlapján - korlátozott mértékben - „sütik” („cookies”)
                használatával automatikusan is gyűjthetők adatok az alábbiak
                szerint. A cookie egy olyan, betű és szám karakterekből álló
                kisméretű fájl, ami online eszközökre (pl. számítógép
                merevlemez, telefon) kerül letöltésre, amikor a látogató a
                honlapra belép. A cookie engedi, hogy az adott honlap felismerje
                a látogató online eszközét, így a honlap részére a látogatóról
                egyedi információk tárolódnak el (pl. kiválasztott nyelv). Így a
                látogatónak a honlapra történő későbbi látogatása során ezeket
                az adatokat, egyedi információkat már nem kell kiválasztania.
              </Par>
              <Par>Az Adatkezelő honlapján kétféle cookie-t használ:</Par>
              <Par>
                i.) munkamenet cookie: ez ideiglenesen elhelyezett cookie, amely
                csak akkor működik, amikor a látogató a honlapra belép, és
                addig, amíg a böngészőt be nem zárja. A munkamenet cookie segíti
                az Adatkezelő honlapját “emlékezni” arra, hogy a látogató az
                előző oldalon mit választott ki, így nem kell még egyszer
                ugyanazt az információt megadnia.
              </Par>
              <Par>
                ii.) tárolt cookie (persistent cookie): ez azután is az online
                eszközön marad, hogy a látogató elhagyta a honlapot, és egy
                véletlenszerűen generált számot tárol a honlap látogatójához
                kapcsoltan. A cookie típusától függ, hogy mennyi ideig tárolódik
                a látogató online eszközén. A honlapon alkalmazott tárolt
                (nyomkövető) cookie-k fontos forgalmi adatokkal szolgálnak annak
                használatáról.
              </Par>
              <Par>
                Az Adatkezelő számára a nyomon követést és a jelentéstételt
                alábbi partnerek végzik: Google Analytics
                (https://www.google.dk/intl/hu/analytics/)
              </Par>
              <Par>Google Adwords (adwords.google.hu)</Par>
              <Par>
                A fent megjelölt cookie-k egyéb látogatói adatokkal nem kerülnek
                összekapcsolásra, így a látogató nem beazonosítható, tehát az
                Adatkezelő nem kezel személyes adatokat a cookie-k révén.
              </Par>
              <Par>
                A cookie-k letiltásának és/vagy eltávolításának módja:
                Amennyiben a látogató szeretné letiltani az Adatkezelő
                honlapjához tartozó cookie-t, vagy törölni a már kihelyezettet,
                megteheti a böngészője beállításaiban. A böngésző „segítség”
                funkciója, vagy a mobil telefon használati útmutatója lesz
                segítségére ebben. Az angol nyelvű www.aboutcookies.org
                weboldalon található részletes tájékoztató szintén segít a
                különböző böngészőkben történő beállításokban. A cookie
                tartalmának megtekintéséhez magára a cookie-ra szükséges
                kattintani, és az megnyílik; egy szövegből és számokból álló
                rövid sor lesz látható. Az Adatkezelő honlapján a cookie-k
                letiltása bizonyos funkciókra hatással lehet, előfordulhat, hogy
                bizonyos funkciók korlátozottan használhatók.
              </Par>
              <Par>
                3.9 Előfordulhat, hogy az Adatkezelő honlapja üzemeltetéséhez
                technikailag kapcsolódó szolgáltató - az Adatkezelő
                tájékoztatása nélkül - a honlapon adatkezelési tevékenységet
                folytat. Az ilyen tevékenység nem minősül az Adatkezelő által
                folytatott Adatkezelésnek, azért az Adatkezelő felelősséget nem
                vállal.
              </Par>

              <H3>4. Az Adatkezelés időtartama</H3>
              <Par>
                4.1 Az Adatkezelő a 3.2. pontban szereplő táblázatban írottakon
                túl rögzíti, hogy a személyes adatokat az Adatkezelő kizárólag
                addig őrzi meg, ameddig szükséges az Adatkezelő által
                meghatározott cél eléréséhez, beleértve a jogi, szabályozási,
                adózási, számviteli kötelezettségek teljesítését. Panasz esetén,
                vagy ha az érintettel kapcsolatban peres, peren kívüli, egyéb
                hatósági eljárás van folyamatban vagy az várható, az Adatkezelő
                hosszabb ideig is megőrizheti az érintett személyes adatait.
              </Par>
              <H3>5. Az érintett személy jogai, érvényesítésük módja</H3>
              <Par>
                5.1 Tájékoztatáshoz való jog Az érintett jogosult arra, hogy az
                adatkezeléssel összefüggő tényekről és információkról az
                adatkezelés megkezdését megelőzően tájékoztatást kapjon, amely
                jog minden adatkezelési jogalap vonatkozásában megilleti az
                érintettet. Az információkat írásban vagy más módon kell
                megadni, ideértve adott esetben az elektronikus utat is.
              </Par>
              <Par>
                Amennyiben a személyes adatot az érintett személytől gyűjti az
                Adatkezelő, a személyes adat megszerzésének időpontjában az
                érintett rendelkezésére kell bocsátani a következő
                információkat: az Adatkezelő és képviselőjének személye és
                elérhetőségeik; adatkezelés célja; adatkezelés jogalapja; „jogos
                érdek” jogalap esetén a jogos érdek megjelölése; címzettek vagy
                a címzettek kategóriái; adatok tárolásának időtartama vagy
                meghatározásának szempontjai; érintetti jogok; a felügyeleti
                hatósághoz címzett panasz benyújtásához való jog; tájékoztatás
                arról, hogy jogszabályon vagy szerződésen alapul-e az
                adatszolgáltatás, szerződéskötésnek előfeltétele-e, valamint
                köteles-e megadni az érintett az adatokat, és mivel járhat annak
                elmaradása. További, eltérő célú adatkezelés tervezése esetén
                azt megelőzően tájékoztatni kell az érintettet az eltérő célról
                és a jelen bekezdésben írt információkról.
              </Par>
              <Par>
                Amennyiben a személyes adatot nem az érintettől szerezte meg az
                Adatkezelő, a fenti a információkon túl tájékoztatni kell az
                érintettet a következőkről is: az érintett személyes adat
                kategóriája; a személyes adat forrása.
              </Par>
              <Par>
                5.2 Hozzáférés joga Az érintett kérheti, hogy az Adatkezelő
                tájékoztassa, hogy kezeli-e személyes adatát, és ha igen, akkor
                biztosítson ahhoz számára hozzáférést. Az érintett a személyes
                adatának kezeléséről bármikor írásban, az Adatkezelő 1.1.
                pontban írott e-mail címére küldött elektronikus levélben vagy
                az Adatkezelő ugyanott meghatározott székhelyére küldött,
                könyvelt postai küldeményként feladott levélben tájékoztatást
                kérhet. A tájékoztatáskérést az Adatkezelő akkor teljesíti, ha a
                kérelem alapján az érintett egyértelműen beazonosítható.
              </Par>
              <Par>
                Az érintett a fentieken túl az alábbiak közlését is kérheti:
              </Par>
              <ul className="marker:text-[--orange] list-disc ml-6">
                <li>i.) az adatkezelés célja;</li>
                <li>ii.) az érintett személyes adat kategóriája;</li>
                <li>
                  iii.) azon címzett vagy címzettek kategóriái,
                  akikkel/amelyekkel a személyes adatot az Adatkezelő
                  közölte/közölni fogja;
                </li>
                <li>
                  iv.) a személyes adatok tárolásának tervezett időtartama;
                </li>
                <li>
                  v.) az érintettet az Adatkezeléssel kapcsolatban megillető
                  egyéb jog, annak tartalma;
                </li>
                <li>
                  vi.) a felügyeleti hatósághoz címzett panasz benyújtásának
                  joga;
                </li>
                <li>
                  vii.) ha az adatot nem az érintett szolgáltatta, annak
                  forrására vonatkozó információ;
                </li>
                <li>
                  viii.) az automatizált döntéshozatal ténye, ideértve a
                  profilalkotást is, az alkalmazott logika és hogy az ilyen
                  adatkezelés milyen jelentőséggel bír, és az érintettre nézve
                  milyen várható következményekkel jár.
                </li>
              </ul>
              <Par>
                Az Adatkezelő a személyes adat másolatát egy példányban bocsátja
                az érintett rendelkezésére. Az érintett által kért további
                másolatért az Adatkezelő az adminisztratív költségeken alapuló,
                észszerű mértékű díjat számíthat fel.
              </Par>
              <Par>
                5.3 Helyesbítéshez való jog Az érintett kérheti az Adatkezelő
                által kezelt személyes adatának helyesbítését vagy módosítását.
                Figyelembe véve az adatkezelés célját, az érintett kérheti a
                hiányos személyes adat kiegészítését. A személyes adat
                helyesbítésére, módosítására irányuló igény teljesítését
                követően a korábbi (törölt) adatot az Adatkezelő nem tárolja,
                így az nem állítható helyre.
              </Par>
              <Par>5.4 Törléshez való jog</Par>
              <Par>
                5.4.1 Az érintett kérheti az Adatkezelő által kezelt személyes
                adatainak törlését, ha az alábbi indokok valamelyike fennáll:
              </Par>
              <ul className="marker:text-[--orange] list-disc ml-6">
                <li>
                  i.) a személyes adatra már nincs szükség abból a célból,
                  amelyből azokat gyűjtötték vagy kezelték;
                </li>
                <li>
                  ii.) az érintett visszavonja a GDPR 6. cikk (1) bekezdésének
                  a) pontja vagy a 9. cikk (2) bekezdésének a) pontja értelmében
                  az adatkezelés alapját képező hozzájárulását, és az
                  adatkezelésnek nincs más jogalapja;
                </li>
                <li>
                  iii.) az érintett a GDPR 21. cikk (1) bekezdése alapján
                  tiltakozik az adatkezelés ellen, és nincs elsőbbséget élvező
                  jogszerű ok az adatkezelésre, vagy az érintett a GDPR 21. cikk
                  (2) bekezdése alapján tiltakozik az adatkezelés ellen;
                </li>
                <li>iv.) a személyes adatot jogellenesen kezelték;</li>
                <li>
                  v.) a személyes adatot az Adatkezelőre alkalmazandó uniós vagy
                  tagállami jogban előírt jogi kötelezettség teljesítéséhez
                  törölni kell.
                </li>
              </ul>
              <Par>5.4.2 A törlés megtagadható, ha </Par>
              <ul className="marker:text-[--orange] list-disc ml-6">
                <li>
                  i.) a személyes adat kezelésére jogszabály felhatalmazást ad;
                </li>
                <li>
                  ii.) jogi igény előterjesztéséhez, érvényesítéséhez, illetve
                  védelméhez szükséges.
                </li>
              </ul>
              <Par>
                A törlési kérelem megtagadásáról az Adatkezelő minden esetben
                tájékoztatja az érintettet, megjelölve a törlés megtagadásának
                indokát. Személyes adat törlésére irányuló igény teljesítését
                követően a korábbi (törölt) adatot az Adatkezelő nem tárolja,
                így az nem állítható helyre. Az Adatkezelő által küldött
                hírlevél az abban található leiratkozás linken keresztül
                mondható le. Leiratkozás esetén az Adatkezelő a hírlevél
                adatbázisából az érintett személyes adatait törli. Az érintett
                halála esetén a halotti anyakönyvi kivonat bemutatásával,
                illetve másolatának az Adatkezelő címére történő megküldésével
                az érintett bármely közeli hozzátartozója, illetve az, akit
                végrendeleti juttatásban részesített, személyazonosságának,
                valamint az érintettel fennálló kapcsolatának igazolása mellett
                kérheti az érintettre vonatkozó adatok törlését.
              </Par>
              <Par>5.5 Adatkezelés korlátozásához való jog</Par>
              <Par>
                Az érintett kérheti, hogy személyes adatainak kezelését az
                Adatkezelő korlátozza, ha{" "}
              </Par>
              <ul className="marker:text-[--orange] list-disc ml-6">
                <li>
                  i.) az érintett vitatja a kezelt személyes adat pontosságát;
                  ebben az esetben a korlátozás arra az időtartamra vonatkozik,
                  amely lehetővé teszi, hogy az Adatkezelő ellenőrizze a
                  személyes adat pontosságát;
                </li>
                <li>
                  ii.) az adatkezelés jogellenes, de az érintett ellenzi a
                  kezelt személyes adat törlését;
                </li>
                <li>
                  iii.) ha az adatkezelés célja megvalósult, de az érintett
                  igényli a kezelt adat Adatkezelő általi további kezelését jogi
                  igény előterjesztéséhez, érvényesítéséhez vagy védelméhez.
                </li>
              </ul>
              <Par>
                Az Adatkezelő megjelöli az általa kezelt személyes adatot, ha az
                érintett vitatja annak helyességét vagy pontosságát, de a
                vitatott személyes adat helytelensége vagy pontatlansága nem
                állapítható meg egyértelműen.
              </Par>
              <Par>5.6 Adathordozáshoz való jog</Par>
              <Par>
                Az érintett jogosult arra, hogy az Adatkezelő rendelkezésére
                bocsátott személyes adatait tagolt, széles körben használt,
                géppel olvasható formátumban megkapja, továbbá jogosult arra,
                hogy ezeket az adatokat egy másik adatkezelőnek továbbítsa
                anélkül, hogy ezt akadályozná az Adatkezelő, ha:
              </Par>
              <ul className="marker:text-[--orange] list-disc ml-6">
                <li>
                  i.) az adatkezelés a GDPR 6. cikk (1) bekezdésének a) pontja
                  vagy a 9. cikk (2) bekezdésének a) pontja szerinti
                  hozzájáruláson, vagy a 6. cikk (1) bekezdésének b) pontja
                  szerinti szerződésen alapul; és
                </li>
                <li>ii.) az adatkezelés automatizált módon történik.</li>
              </ul>
              <Par>5.7 Tiltakozáshoz való jog</Par>
              <Par>
                Az érintett tiltakozhat személyes adatának kezelése ellen, ha
              </Par>
              <ul className="marker:text-[--orange] list-disc ml-6">
                <li>
                  i.) a személyes adat kezelése kizárólag az Adatkezelőre
                  vonatkozó jogi kötelezettség teljesítéséhez vagy az Adatkezelő
                  vagy harmadik személy jogos érdekének érvényesítéséhez
                  szükséges;
                </li>
                <li>
                  ii.) az adatkezelés célja közvetlen üzletszerzés,
                  közvélemény-kutatás vagy tudományos kutatás;
                </li>
                <li>
                  iii.) az adatkezelésre közérdekű feladat teljesítése érdekében
                  kerül sor.{" "}
                </li>
              </ul>
              <Par>
                Az Adatkezelő az érintett tiltakozásának jogszerűségét
                megvizsgálja, és ha a tiltakozás megalapozottságát megállapítja,
                az adatkezelést megszünteti és a kezelt személyes adatot
                zárolja, továbbá a tiltakozásról és az annak alapján tett
                intézkedésről értesíti mindazokat, akik/amelyek részére a
                tiltakozással érintett adat korábban továbbításra került.{" "}
              </Par>
              <Par>5.8 Tájékoztatáshoz való jog adatvédelmi incidensről</Par>
              <Par>
                A jelen Tájékoztatóban foglalt feltételek fennállása esetén az
                Adatkezelő az adatvédelmi incidensről tájékoztatni köteles az
                érintettet a fent írottak szerint.
              </Par>
              <Par>5.9 Jogorvoslat</Par>
              <Par>
                Az Adatkezelőnél nem kötelező a GDPR 37-39. cikke szerinti
                adatvédelmi tisztviselő választása, így az Adatkezelő
                adatvédelmi tisztviselővel nem rendelkezik. Bármilyen,
                adatkezeléssel kapcsolatos kérdéssel, észrevétellel kereshetők
                az Adatkezelő munkatársai az 1.1. pontban meghatározott e-mail
                címen és telefonszámon.
              </Par>
              <Par>
                Minden érintett jogosult arra, hogy panaszt tegyen a felügyeleti
                hatóságnál:
              </Par>
              <Par>
                Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH),
                <br></br>cím: 1125 Budapest, Szilágyi Erzsébet fasor 22/c.
                <br></br>postacím: 1530 Budapest, Pf.: 5., <br></br>e-mail:
                ugyfelszolgalat@naih.hu,<br></br>honlap: http://www.naih.hu
                <br></br>telefon: +36 (30) 683-5969, +36 (30) 549-6838,<br></br>
                hivatali kapu (KRID): 429616918,<br></br>ha megítélése szerint a
                reá vonatkozó személyes adatok kezelése nem felel meg a
                jogszabályi előírásoknak.
              </Par>
              <Par>
                A NAIH döntése ellen bírósági felülvizsgálat kezdeményezhető,
                amelyről a felügyeleti hatóság is tájékoztatja az érintettet,
                illetve további részletes információt tartalmaz a GDPR 77-79.
                cikkében foglalt szabályozás.
              </Par>
              <Par>5.10 Intézkedés az érintett kérelme alapján</Par>
              <Par>
                Az Adatkezelő indokolatlan késedelem nélkül, de legkésőbb a
                kérelem beérkezésétől számított 30 napon belül tájékoztatja az
                érintettet a joga gyakorlására irányuló kérelme kapcsán hozott
                intézkedésről. Szükség esetén, figyelembe véve a kérelem
                összetettségét és az elintézés alatt álló kérelmek számát, a
                fenti határidő további 60 nappal meghosszabbítható. A határidő
                meghosszabbításáról az Adatkezelő a késedelem okainak
                megjelölésével a kérelem kézhezvételétől számított 30 napon
                belül tájékoztatja az érintettet. Ha az Adatkezelő nem tesz
                intézkedéseket az érintett kérelme nyomán, legkésőbb a kérelem
                beérkezésétől számított 30 napon belül tájékoztatja az
                érintettet az intézkedés elmaradásának okairól, valamint arról,
                hogy az érintett panaszt nyújthat be a felügyeleti hatóságnál,
                és élhet bírósági jogorvoslati jogával.
              </Par>
              <Par>
                A tájékoztatást az érintett részére írásban - ideértve az
                elektronikus utat is - kell megadni. Az érintett kérésére
                szóbeli tájékoztatás is adható, feltéve, hogy más módon
                igazolták az érintett személyazonosságát. Ha az érintett
                elektronikus úton nyújtotta be a kérelmet, a tájékoztatást
                lehetőség szerint elektronikus úton kell megadni, kivéve, ha az
                érintett azt másként kéri.
              </Par>
              <Par>
                Az Adatkezelő a GDPR-ban előírtak szerinti információkat,
                valamint a jelen pont szerinti tájékoztatást díjmentesen
                biztosítja. Ha az érintett kérelme egyértelműen megalapozatlan,
                vagy - különösen ismétlődő jellege miatt - indokolatlan terhet
                jelent az Adatkezelő részére, illetve joggal való visszaélést
                valósít meg, az Adatkezelő - figyelemmel a kért információ vagy
                tájékoztatás nyújtásával vagy a kért intézkedés meghozatalával
                járó adminisztratív költségekre -
              </Par>
              <ul className="marker:text-[--orange] list-disc ml-6">
                <li>i.) észszerű összegű díjat számíthat fel, vagy</li>
                <li>
                  ii.) megtagadhatja a kérelem alapján történő intézkedést,
                  illetve az információszolgáltatást vagy a jelen pont szerinti
                  tájékoztatást,
                </li>
              </ul>
              <Par>
                azzal, hogy ezen körülmények fennállásának bizonyítása az
                Adatkezelőt terheli.
              </Par>
              <Par>
                Amennyiben az Adatkezelőnek megalapozott kétsége merül fel a
                kérelmet benyújtó természetes személy kilétével kapcsolatban,
                további - a kérelmező személyazonosságának megállapításához
                szükséges - információ nyújtását kérheti.
              </Par>
              <H3>6. Személyes adatok címzettjei, a címzettek kategóriái</H3>
              <Par>
                6.1 A személyes adatokat kizárólag az Adatkezelő szervezetéhez
                tartozó azon személyek jogosultak megismerni, akik az adatok
                megismeréséhez megfelelő jogosultsággal rendelkeznek.
              </Par>
              <Par>
                6.2 Adatfeldolgozó Az Adatkezelő tevékenysége ellátásához
                Adatfeldolgozót vehet igénybe. Az Adatfeldolgozó önálló döntést
                nem hoznak, kizárólag az Adatkezelővel kötött szerződés, és a
                kapott utasítás szerint jogosult eljárni. Az Adatfeldolgozó
                további adatfeldolgozó igénybe vételére csak az Adatkezelő
                hozzájárulása esetén jogosult.
              </Par>
              <Par>
                6.3 Külső szolgáltató Az Adatkezelő tevékenységi köréhez
                kapcsolódóan külső szolgáltatót vehet igénybe (pl. 3.8. pontban
                írottak). A külső szolgáltató rendszerében kezelt személyes adat
                tekintetében a külső szolgáltató saját adatvédelmi
                tájékoztatójában foglaltak az irányadók. Az Adatkezelő minden
                tőle elvárhatót megtesz annak érdekében, hogy a külső
                szolgáltató a részére továbbított személyes adatot az a
                jogszabályoknak megfelelőn kezelje, és azt kizárólag az érintett
                által meghatározott vagy a jelen Tájékoztatóban rögzített célra
                használja fel.
              </Par>
              <H3>7. Adattovábbítás lehetősége </H3>
              <Par>
                7.1 Az Adatkezelő jogosult és köteles minden olyan
                rendelkezésére álló és általa szabályszerűen tárolt személyes
                adatot az illetékes hatóságnak továbbítani, amely személyes adat
                továbbítására őt jogszabály vagy jogerős/végleges hatósági,
                bírósági határozat kötelezi. Az ilyen adattovábbítás, valamint
                az ebből származó következmények miatt az Adatkezelőt felelősség
                nem terheli.
              </Par>
              <Par>
                7.2 Amennyiben az Adatkezelő a honlapján található
                tartalomszolgáltatás üzemeltetését vagy hasznosítását részben
                vagy egészben harmadik személy számára átadja, úgy az általa
                kezelt személyes adatokat részben vagy egészben ezen harmadik
                személy számára az érintett külön hozzájárulása nélkül, azonban
                az érintett megfelelő, előzetes tájékoztatása mellett átadhatja
                az új üzemeltető részére azzal, hogy ezen adattovábbítás az
                érintettet nem hozhatja a jelen Tájékoztató mindenkor hatályos
                szövegében megjelölt adatkezelési szabályoknál hátrányosabb
                helyzetbe. Jelen pont szerinti adattovábbítás esetén az
                Adatkezelő az adattovábbítás előtt lehetőséget biztosít az
                érintett számára, hogy az adattovábbítás előtt tiltakozzon az
                adattovábbítás ellen. Tiltakozás esetén az érintett adatainak a
                jelen pont szerinti továbbítására nem kerülhet sor.
              </Par>
              <H3>8. Egyéb</H3>
              <Par>
                Az Adatkezelő az érintett tájékoztatásának biztosítása, valamint
                az adatkezelés és az adattovábbítás jogszerűségének ellenőrzése
                érdekében, az adatkezeléssel összefüggő kérelmekről, az
                adatvédelmi incidensekről és az ezekkel kapcsolatban megtett
                intézkedésekről, valamint az adattovábbításokról nyilvántartást
                vezet.
              </Par>
              <H3>9. Az Adatkezelési Tájékoztató módosítása </H3>
              <Par>
                Az Adatkezelő fenntartja a jogot, hogy a jelen Tájékoztatót
                egyoldalú döntésével bármikor módosítsa. A Tájékoztató hatályos
                szövege az Adatkezelő honlapján, az „adatvédelmi tájékoztató”
                linkre kattintva érhető el.
              </Par>
            </div>
          )}

          {form === "tanusitvanyok" && (
            <div className="flex flex-col gap-4">
              <Image
                src="/tanusitvanyok/ISO-14001.png"
                width={500}
                height={1000}
                alt="Tanusítvány"
              />
              <Image
                src="/tanusitvanyok/ISO-9001.png"
                width={500}
                height={1000}
                alt="Tanusítvány"
              />
            </div>
          )}

          {form === "csod" && (
            <div className="flex flex-col gap-4">
              <H3>Tisztelt Hitelezők!</H3>
              <Par>
                A MetAlCu Trade Kereskedelmi és Szolgálató Korlátolt Felelősségű Társaság „
csődeljárás alatt” (székhely: 1055 Budapest, Bihari János utca 13, cégjegyzékszám: 01-09-
438707, adószám: 24836577-2-41) Adós a csődeljárásról és a felszámolási eljárásról szóló 1991.
évi XLIX. törvény (a továbbiakban: Csődtv.) az alábbiakról értesíti Önöket.
              </Par>
              <Par>
                A Fővárosi Törvényszék 39.Cspk.6/2025/5. sz. végzésével elrendelte a „MetAlCu Trade Kft.”
„cs.a.” Adós csődeljárásának közzétételét a Cégközlönyben.
              </Par>
              <Par>
                A közzététel időpontja és egyben a csődeljárás kezdő időpontja: 2025. 09. 02.
              </Par>
              <Par>
                A „MetAlCu Trade Kft.” „cs.a.” Adós felhívja a hitelezőit arra, hogy a Csődtv 10. § (2) bekezdés f)
pontjában meghatározottak szerin a fennálló követeléseiket a csődeljárás elrendeléséről szóló végzés
közzétételétől számított 30 napon belül - a csődeljárás kezdő időpontját követően keletkező
követeléseiket pedig 8 munkanapon belül - jelentsék be a „MetAlCu Trade Kft.” „cs.a.” Adós és a
bíróság által kirendelt vagyonfelügyelő, LAPIDIUM Reorg Felszámoló, Végelszámoló,
Vagyonrendező és Csődkezelő Korlátolt Felelősségű Társaság (székhely: 1135 Budapest,
Csata utca 25. Fszt, elektronikus levelezési cím: lapidiumreorg@gmail.com ) részére, a
követelés nyilvántartásba vételéért fizetendő díjat ezzel egyidejűleg fizessék be a vagyonfelügyelő
MBH Bank Nyrt.-nél vezetett 10103661-51436800-02005004 számú pénzforgalmi számlájára, a
közlemény rovatban „MetAlCu Trade Kft. csa nyilvántartásba vételi díj” feltüntetésével,
valamint csatolják a követeléseiket megalapozó okiratokat.
              </Par>
              <Par>
                A fenti határidők - a hitelezői igény bejelentésének, illetve a nyilvántartásba vételi díj megfizetésének
határidőn belül történő - elmulasztása esetén a követelés nyilvántartásba vételére nem kerül sor.
              </Par>
              <Par>
                A követelés nyilvántartásba vételének feltétele az is, hogy a hitelező annak 1%-át, de legalább 10.000
forintot és legfeljebb 200 000 forintot nyilvántartásba-vételi díjként befizessen a vagyonfelügyelő
pénzforgalmi számlájára.
              </Par>
              <Par>
                A Csődtv 11. § (1) bekezdése szerinti követeléseket, a 3. § (1) bekezdés g) pont szerinti függő
követeléseket, továbbá - a folyamatban lévő peres és nemperes eljárásokban, közigazgatási hatósági
eljárásokban az adóssal szemben támasztott igényeket kivéve - az adós számviteli törvény szerinti
függő kötelezettségeivel összefüggő azon igényeket, amelyekkel összefüggésben jövőbeli eseménytől
függ, hogy keletkezik az adós számára fizetési kötelezettség, még nem kell bejelenteni.
              </Par>
              <Par>
                Az Adós a hitelezővel 2025. november 26 napján 11 órai kezdettel, 1055 Budapest, Bihari János
utca 13. sz. alatt csődegyezségi tárgyalást tart, amelyre a társaság hitelezőit ezúton is meghívja.
Az esetleges külföldi székhelyű, külföldi lakóhellyel rendelkező hitelezőket felhívjuk kézbesítési
megbízott igénybevételére.
              </Par>
              <Par>
                Tájékoztatjuk a hitelezőket, hogy a reorganizációs program és az egyezségi javaslat, valamint a
csődeljárásról és a felszámolási eljárásról szóló 1991. évi XLIX. törvény (a továbbiakban: Cstv.)
8. § (2) bekezdésében és a 14. § (1) bekezdésében felsorolt iratokat 2025. 11. 17. napjától
munkanapokon előre egyeztetett időpontban megtekinthető, az Adós székhelyén.
              </Par>
              <Par>
                Budapest, 2025. 09. 02.
              </Par>
              <Par>
                Tisztelettel:
              </Par>
              <Par>
                MetAlCu Trade Kft. .” cs.a.” Adós
              </Par>
              <Par>
Cene András ügyvezető
              </Par>
            </div>
          )}
        </>
      </Modal>
      <section className="w-full py-16 mt-16 bg-[--grey]">
        <div className="container m-auto px-4">
          <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-16 gap-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/logos/metalcu-black-logo.svg"
                width={200}
                height={100}
                alt="logo"
              />
              <div className="w-full h-[200px] mt-8">
                <GoogleMaps />
              </div>
              <Par>2051 Biatorbágy Rozália Park 11.</Par>
              <Label classname={" opacity-40"}>
                MetAlCu 2024 @ Minden jog fenntartva
              </Label>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-nowrap gap-2 items-center">
                <TbClock className=" bg-[--cream-25] min-w-8 min-h-8 p-1 rounded-full" />
                <H3 classname={""}>Nyitvatartás</H3>
              </div>
              <div className="flex flex-col gap-2">
                <Par>Nyitvatartás:</Par>
                <Label>H-CS 7:00-15:30,</Label>
                <Label>P 7:00-14:30</Label>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-nowrap gap-2 items-center">
                <TbArrowBigRightLines className=" bg-[--cream-25] min-w-8 min-h-8 p-1 rounded-full" />
                <H3 classname={""}>Gyors elérés</H3>
              </div>

              <ul className="flex flex-col justify-start gap-2 ">
                <li>
                  <button
                    onClick={() => {
                      setForm("fizetesi-modok"), togglePopup("fizetesi-modok");
                    }}
                  >
                    <Label classname={"hover:text-white cursor-pointer"}>
                      Fizetési módok
                    </Label>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setForm("aszf"), togglePopup("aszf");
                    }}
                  >
                    <Label classname={"hover:text-white cursor-pointer"}>
                      ÁSZF
                    </Label>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setForm("adatkezelesi"), togglePopup("adatkezelesi");
                    }}
                  >
                    <Label classname={"hover:text-white cursor-pointer"}>
                      Adatkezelési tájékoztató
                    </Label>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setForm("tanusitvanyok"), togglePopup("tanusitvanyok");
                    }}
                  >
                    <Label classname={"hover:text-white cursor-pointer"}>
                      Tanúsítványok
                    </Label>
                  </button>
                </li>
                <li>
                  <Link href={"/kapcsolat"}>
                    <Label classname={"hover:text-white cursor-pointer"}>
                      Írjon nekünk
                    </Label>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-nowrap gap-2 items-center">
                <TbAnchor className=" bg-[--cream-25] min-w-8 min-h-8 p-1 rounded-full" />
                <H3 classname={""}>Fontos linkek</H3>
              </div>

              <ul className="flex flex-col justify-start gap-2 ">
                <li>
                  <Link
                    href={"https://www.lme.com/en/Metals/Non-ferrous"}
                    target="__blank"
                  >
                    <Label classname={"hover:text-white cursor-pointer"}>
                      London Metal Exchange
                    </Label>
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.mnb.hu/arfolyamok"} target="_-blank">
                    <Label classname={"hover:text-white cursor-pointer"}>
                      Deviza árfolyamok
                    </Label>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-nowrap gap-2 items-center">
                <TbUsersGroup className=" bg-[--cream-25] min-w-8 min-h-8 p-1 rounded-full" />
                <H3 classname={""}>Elérhetőségek</H3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-nowrap gap-2 items-center">
                  <TbPhone className=" bg-[--cream-25] min-w-5 min-h-5 p-1 rounded-full" />
                  <a href="tel:+36 70 626 6066">
                    <Label classname={" hover:text-white cursor-pointer"}>
                      +36 70 626 6066
                    </Label>
                  </a>
                </div>
                <div className="flex flex-nowrap gap-2 items-center">
                  <TbMail className=" bg-[--cream-25] min-w-5 min-h-5 p-1 rounded-full" />
                  <a href="mailto:sales@metalcu.hu">
                    <Label classname={" hover:text-white cursor-pointer"}>
                      sales@metalcu.hu
                    </Label>
                  </a>
                </div>
              </div>

              {/*<div className="flex flex-col gap-2">
                        <Label classname={""}>Biztonságos fizetés a <b>Stripe</b> által</Label>
                        <Link href={"https://stripe.com"} target="__blank"><Image src={"/Powered by Stripe - white.svg"} width={150} height={75}/></Link>
                    </div>*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
