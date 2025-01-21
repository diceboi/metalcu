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

import { useContext } from "react";
import { Context } from "@/app/Context";
import Modal from "./Modal";

export default function Footer() {
  const { openPopup, togglePopup, form, setForm } = useContext(Context);

  return (
    <>
      <Modal
        openstate={openPopup}
        onClose={() => togglePopup(null)}
      >
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
                ÁSZF - a MetAlCu Trade Kft. (Székhelye: 1055 Budapest, Bihari
                János utca 13. Telephely: 2051 Biatorbágy, Rozália park 11.
                hrsz.: 2667/43., cégjegyzékszáma: cg.: 01-09-438707) - a
                továbbiakban Szállító - értékesítéseit és termékszállításait
                szabályozzák, és a felek között létrejövő valamennyi egyedi
                szállítási szerződés elválaszthatatlan részét képezik. A
                Megrendelő ellentétes, eltérő és/vagy egyéb kikötései kizárólag
                a Szállító esetenkénti írásbeli elfogadó nyilatkozatával
                érvényesek. Jelen ÁSZF alkalmazása során „Megrendelő” alatt az
                egyes szállítási szerződésekben szereplő megrendelőt, mint másik
                szerződő felet (természetes, vagy jogi személy), ill. „Termék”
                alatt az egyes szállítási szerződésekben értékesített terméket
                kell érteni.
              </Par>
              <Par>
                2. A jelen ÁSZF keretében a Szállító kötelezettséget vállal
                arra, hogy a Megrendelő részére a szerződés időtartama alatt a
                Szállító által importált és Magyarországon forgalmazott
                színesfém és acél-félgyártmányok és egyéb termékeket /a
                továbbiakban együttesen: Termék/ a Szállító ajánlata és
                Megrendelő által esetenként adott megrendelés, ill. az
                ajánlattól eltérő megrendelés esetén a Szállító visszaigazolása
                alapján közöttük létrejött egyedi szerződésben foglalt
                feltételekkel a Megrendelő részére leszállítja. A Megrendelő
                kötelezettséget vállal arra, hogy a jelen pont szerint létrejött
                egyedi szerződésben felsorolt és részletezett Terméket átveszi,
                és a vételárát kifizeti.
              </Par>
              <Par>
                3. Szerződő felek kötelesek a közöttük megkötésre kerülő
                szállítási szerződések teljesítése körében jóhiszeműen, a
                mindenkor hatályos magyar jogszabályoknak megfelelően eljárni,
                és kölcsönösen együttműködni.
              </Par>
              <H3>II. Ajánlatok és megrendelések (a szerződés létrejötte)</H3>
              <Par>
                1. A Szállító által tett bármilyen ajánlat, ideértve a
                katalógusaiban és egyéb nyomtatványokban szereplő ajánlatot is,
                csak az ajánlatban, vagy az ahhoz csatolt egyéb kiegészítésben
                megjelölt időpontig érvényes (ajánlati kötöttség).
              </Par>
              <Par>
                2. A felek közötti érvényes szerződés a Megrendelő írásbeli
                (fax, e-mail) megrendelése, és a Szállító írásbeli (fax, e-mail)
                visszaigazolása, vagy a Szállító eltérő tartalmú írásbeli (fax,
                e-mail) visszaigazolásának Megrendelő általi írásbeli (fax,
                e-mail) elfogadása útján jön létre. A Szállító jogosult arra is,
                hogy külön visszaigazolás nélkül az ajánlattal egyező
                megrendelésben foglaltak szerint a Termék leszállításával
                teljesítsen. A megrendelésnek megfelelően leszállított Termék
                nem szállítható vissza. Az ajánlat Megrendelő általi bármely
                formában történő elfogadása egyben a jelen ÁSZF elfogadását is
                jelenti.
              </Par>
              <Par>
                3. A Megrendelő a megrendelése Szállító általi visszaigazolását
                követően nem jogosult a megrendelése sztornírozására, ill. az
                egyedi szerződéstől való elállásra, kivéve, ha a felek az egyedi
                szerződésben másként állapodnak meg, azzal, hogy a felek ilyen
                irányú megállapodása esetén is a Megrendelő 10% kötbért köteles
                fizetni Szállítónak. A kötbér alapja a megrendelésben szereplő
                Termék ellenértéke.
              </Par>
              <H3>III. Szállítási határidő</H3>
              <Par>
                1. A Szállító a Terméket az egyedi megállapodásokban
                meghatározott határidőben vállalja leszállítani a saját, ill.
                külföldi Szállító raktárkészlete függvényében.
              </Par>
              <Par>
                2. A szállítási határidő csak tájékoztató jellegű, nem kötelező
                érvényű. Ennek megfelelően a Szállító a külföldi eladó
                szállításának időpontjától, ill. a raktárkészlettől függően a
                megjelölt határidőn túni szállítás esetén is szerződésszerűen
                teljesít, így a késedelem nem jogosítja fel a Megrendelőt a
                szerződéstől való elállásra, vagy esetleges kötbér, és/vagy
                kárigény benyújtására.
              </Par>
              <Par>3. A Szállító rész- és előszállításra jogosult.</Par>
              <Par>
                4. A felek ellenkező megállapodásának hiányában a szállítás
                módját és útvonalát a Szállító jogosult meghatározni. Amennyiben
                az egyedi szerződés alapján a Megrendelő jogosult a szállításra
                vonatkozó instrukciókat adni, azt szabályszerűen és oly módon,
                illetve olyan határidőben kell megtennie, hogy Szállító
                szállítási kötelezettségét teljesíthesse.
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
                kiszámlázni és a Terméket- raktározási díj felszámítása mellett
                - felelős őrzésbe venni, vagy póthatáridő megjelölése nélkül a
                szerződéstől elállni és a Terméket más Megrendelő részére
                értékesíteni. A Megrendelő köteles a Szállítónak az átvétel
                elmulasztásával okozott igazolt károkat megtéríteni.
              </Par>
              <Par>
                7. A 6. pontban leírt kártérítési kötelezettség akkor is
                érvényes, ha Megrendelő adott időszakon belül jogosult a Felek
                megállapodásában szereplő Termék lehívására és lehívási
                kötelezettségének nem, vagy nem időben tesz eleget.
              </Par>
              <H3>IV. Teljesítés helye és ideje, és kárveszély átszállása</H3>
              <Par>
                1. A teljesítés ideje az a nap, melyen a Terméket a Megrendelő a
                teljesítés helyén igazoltan átvette.
              </Par>
              <Par>
                2. A tejesítés helye: a Szállító és a Megrendelő között
                létrejött szerződésben meghatározott hely (INCOTERMS 2010 ICC).
              </Par>
              <Par>
                3. A leszállított Termék szállítólevéllel kerül átadásra, melyen
                az átvételt a Megrendelő köteles aláírásával, cégbélyegzőjével
                igazolni.
              </Par>
              <Par>
                4. A teljesítés helyéig a kárveszély a Szállítót, míg azt
                követően a Megrendelőt terheli.
              </Par>
              <H3>V. Szállítási feltételek</H3>
              <Par>
                1. Amennyiben a szállítás a szerződésben kikötött paritás
                alapján nem díjtalanul történik, úgy ennek költsége a felek
                között létrejött szerződésben meghatározott összeg, melyet a
                Megrendelő köteles a Szállító részére annak számlája alapján
                megfizetni.
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
                között létrejött szerződésben meghatározott vételár. A vételárat
                a szállítási napon érvényes általános forgalmi adó terheli.
              </Par>
              <Par>
                2. A Megrendelő részére biztosított esetleges engedmények, az
                általános forgalmi adót nem tartalmazó eladási árból kerülnek
                levonásra.
              </Par>
              <Par>
                3. Az árak meghatározása - a felek eltérő megállapodása
                hiányában - „ex works” a Szállító biatorbágyi raktárából,
                csomagolva magyar forintban vagy devizában történik. Amennyiben
                devizában meghatározott ár esetén a Megrendelő a számlát magyar
                forintban kéri, az áru ellenértékének számlázása a deviza ár
                alapul vételével, a termék beérkezése időpontjában érvényes MNB
                deviza középárfolyam figyelembe vételével történik a felek ettől
                eltérő egyedi megállapodása hiányában.
              </Par>
              <Par>
                4. Amennyiben a vételár a szállítási díjat, biztosítási díjat,
                vámot stb. is tartalmaz, azok Szállítót érintő emelkedései
                esetén Szállító jogosult az árat egyoldalú írásos
                nyilatkozatával megemelni, amennyiben a külföldi szállító, ill.
                a szolgáltató az ajánlatban megadott árhoz képest a Termék árát
                a Megrendelő megrendelését követően 5 %-ot meghaladó mértékben
                megemeli. A Szállító az árváltozásról haladéktalanul köteles a
                Megrendelőt értesíteni. A Megrendelő az áremelési javaslat
                kézhezvételét követően azonnal, de legkésőbb a kézhezvételt
                követő 3 munkanapon belül írásban (telefaxon, vagy e-mailen)
                keresztül köteles nyilatkozni, hogy az ármódosítást elfogadja-e.
                Amennyiben Megrendelő nyilatkozattételi kötelezettségének
                határidőben nem tesz eleget, úgy a módosított árat a felek
                részéről elfogadottnak kell tekinteni. A Megrendelőnek a
                határidőben tett nemleges nyilatkozatával egyidejűleg jogában
                áll - ha a megemelt árral nem ért egyet - a szerződéstől
                elállni.
              </Par>
              <Par>
                5. A Termék vételárának megfizetése a Szállító számlája alapján
                készpénzben vagy a Szállító bankszámlájára utalással történik,
                az egyedi szerződésben megadott feltételek szerint.A Szállító
                köteles a számlát legkésőbb a teljesítést követő 15 napon belül
                kiállítani, és a számlához a Megrendelő részéről átvevő személy
                aláírásával ellátott, az átvételt bizonyító dokumentációt
                (szállítólevél) csatolni, kivéve a jelen Feltételek III. fejezet
                6. pontjában foglalt esetet. A fizetési határidő az a nap,
                amikor a számla ellenértékének a Szállító bankszámláján meg kell
                jelennie.
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
                  - egy éven belül előfordult, hogy Megrendelő esedékes
                  tartozását pénzügyi fedezet hiányában nem tudta kiegyenlíteni;
                </li>
                <li>
                  - a Megrendelővel szemben csőd-, vagy végelszámolási eljárás
                  van folyamatban.
                </li>
              </ul>
              <Par>
                Ilyen esetben a Megrendelő és a Szállító a fizetési
                biztosítékokról külön megállapodásban rendelkeznek, mely
                megállapodás megkötése a felek közötti Szállítási szerződés
                érvényességének feltétele. Fizetési késedelem esetén Szállító a
                Ptk. 301/A. § (2) bekezdés szerinti mértékű késedelmi kamatot
                számol fel, mely a fizetési határidő utolsó napját követő naptól
                esedékes.
              </Par>
              <Par>
              7. A fizetési tételek visszatartása a Szállító által el nem ismert ellenigényekre való hivatkozással nem megengedett.
              </Par>
              <Par>
              8. Megrendelő köteles megtéríteni a Szállító minden igazolt költségét (ügyvédi munkadíj stb.), mely igényérvényesítésével kapcsolatban merült fel.
              </Par>
              <Par>
              9. A Megrendelő fizetési késedelme esetén a Szállító jogosult póthatáridő nélkül a Szerződéstől írásban elállni és a termék-kiadásokat leállítani, amíg Megrendelő a Szállítóval szemben fennálló ki nem egyenlített tartozásait és azok járulékait annak járulékaival (kamat, késedelmi kamat, stb.) meg nem fizeti. Szállító jogos elállása esetén Megrendelő semmilyen kártérítésre nem jogosult.
              </Par>
              <Par>
              10. Amennyiben a Megrendelő fizetés-, vagy hitelképességét tekintve a Szerződés megkötését követően merül fel indokolt kétség, úgy a Szállító valamennyi követelése esedékessé válik, vagy ha a megrendelő az erre vonatkozó felszólítás ellenére sem hajlandó a szállítást megelőzően fizetni, illetve nem nyújt kellő biztosítékot, úgy a Szállító - amennyiben még ő maga sem teljesített, - jogosult elállni a szerződéstől, a Terméket más részére értékesíteni, és igazolt kárának megtérítését követelni a Megrendelőtől.
              </Par>
              <Par>
              11. A fizetés csak azt követően tekinthető teljesítettnek, amikor az összeg a Szállító egyedi szerződésben megjelölt bankszámláján jóváírásra került. A Szállító fenntartja a jogot, hogy a fizetéseket az egészében esedékes számlatételek, és azokkal kapcsolatos késedelmi kamatok kiegyenlítésére használja fel.
              </Par>
              <Par>
              12. Amennyiben a Megrendelő késedelmesen fizet, úgy Szállító jogosult arra, hogy az átutalt összeget először a költségekbe, majd a kamatokba, és végül a főkövetelésbe számítsa be.
              </Par>
              <H3>
              VII. Tulajdonjog fenntartása
              </H3>
              <Par>
              1. A Szállító a Termékre vonatkozó tulajdonjogát mindaddig fenntartja, amíg a Megrendelő a Termék teljes vételárát ki nem egyenlíti, valamint a szerződésből illetőleg annak megszegéséből eredő összes kötelezettségét nem teljesítette.
              </Par>
              <Par>
              2. A Szállítónak jogában áll a tulajdonjog-fenntartással átadott Terméket póthatáridő tűzése nélkül visszakövetelni a Megrendelőtől, amennyiben a Szállítóval szemben fennálló kötelezettségei teljesítésével késedelembe esik.
              </Par>
              <Par>
              3. A Megrendelő a teljes vételár kiegyenlítéséig nem jogosult az átvett Termék elzálogosítására, vagy más jellegű terhelésére.
              </Par>
              <Par>
              4. Amennyiben a Terméket Megrendelő a visszakövetelést megelőzően már feldolgozta, úgy az új Termék közös tulajdonnak minősül, melyben Szállító tulajdoni hányada megfelel az általa szállított Termék mennyiségének arányával. Megrendelő köteles az új Termék értékesítéséből származó követeléseit és ezek biztosítékait Szállítóra engedményezni a közös tulajdont képező új Termék tulajdoni hányadainak arányában.
              </Par>
              <H3>
              VIII. A Termék minőségi és mennyiségi átvétele, minőség tanúsítása
              </H3>
              <Par>
              1. A Megrendelő minden mennyiségi eltérést az átvételkor, de legfeljebb a Termék átvételétől számított három (3) munkanapon belül, a minőségi eltérést pedig a Termék átvételétől számított nyolc (8) munkanapon belül, e-mail-en, telefaxon vagy ajánlott levélben köteles a Szállítónak jelezni. A késedelmes bejelentésből eredő károkért a Szállítót nem terheli felelősség. Nem minősül a Szállító hibás teljesítésének a Termék mennyiségének a szerződésben meghatározott mennyiségtől való, ± 10 %-ot meg nem haladó mennyiségi eltérése. A számlázás alapját a szállítólevélen megjelölt súlyadat képezi, kivéve, ha a felek másként állapodtak meg.
              </Par>
              <Par>
              2. Amennyiben a Termék fuvarozó útján kerül leszállításra, hiány, vagy sérülés esetén a Megrendelő köteles a megfelelő dokumentumokat (szállítólevélen a hiba jelzése, közös kárfelvételi jegyzőkönyv, stb.) biztosítani, annak érdekében, hogy a kár a fuvarozóval szemben érvényesíthető legyen.
              </Par>
              <Par>
              3. A reklamáció rendezése céljából, ha szükséges a felek mindkét fél részvételével helyszíni szemlét tartanak, az erről készült jegyzőkönyvet a jelenlévő felek képviselői aláírással hitelesítik. Vita esetén a felek a megfelelő szakértelemmel rendelkező igazságügyi szakértő szakvéleményét fogadják el irányadónak. A szakértő díját az a fél viseli, akinek terhére szól a szakvélemény.
              </Par>
              <Par>
              4. Minőségi reklamáció esetén a kifogásolt Termék - a Szállító által igényelt mintát kivéve - csak a Szállító előzetes írásbeli jóváhagyásával küldhető vissza. A Termék jogosulatlan visszaküldése esetén a Szállító nem köteles visszafizetni a vételárat. A Szállítóhoz visszaküldött Termék szállítási költsége elfogadott alapos reklamáció esetén a Szállítót, egyébként a Megrendelőt terheli.
              </Par>
              <Par>
              5. A Megrendelő az általa minőségileg kifogásolt Terméket nem jogosult felhasználni, a felhasználásból eredő károkért Szállító felelősséget nem vállal.
              </Par>
              <Par>
              6. A visszaküldött Termék átvétele, és/vagy a kifogásolt hiba vizsgálatának megkezdése nem jelenti a Megrendelő igényének Szállító általi elismerését.
              </Par>
              <Par>
              7. A Szállító a termék minőségét az érvényes szabványoknak megfelelően tanúsítja. A minőség ezt meghaladó tanúsítása a Megrendelő ilyen irányú kérése esetén kizárólag a Megrendelő költségére történhet.
              </Par>
              <H3>
              IX. Szavatosság, felelősség
              </H3>
              <Par>
              1. A Szállító által forgalmazott Termék minőségéért a mindenkor hatályos jogszabályok szerinti, vagy a gyártó által meghatározott ideig (figyelemmel az egyes anyagok sajátosságaira) szavatosságot vállal, azaz szavatolja, hogy a Termék az átadása idején a felek között létrejött szerződésben kikötött specifikációnak, ill. szabványnak megfelel. A Szállítót a specifikáció, ill. szabvány előírásait meghaladó minőségért (karcmentesség, stb.) szavatossági felelősség kizárólag az esetben terheli, amennyiben a Megrendelő megrendelésében foglalt ilyen irányú igényét a Szállító írásban visszaigazolta. Erre vonatkozó kifejezett írásbeli kötelezettségvállalás hiányában továbbá a Szállító nem szavatolja, hogy a Termék alkalmas bármely, a Megrendelő által elérni kívánt speciális célra.
              </Par>
              <Par>
              2. A szavatosság nem vonatkozik a Termék olyan hibáira, hiányosságaira, melyek az átvételt követően keletkeztek, illetve amelyeket Megrendelő a VIII. pontban szabályozott határidőn belül szabályszerűen bejelenteni elmulasztott.
              </Par>
              <Par>
              3. A szabályszerűen érvényesített és jogos kifogás esetén a Szállító - választása szerint - árengedményt nyújt, vagy kicseréli a Terméket. Egyéb, bármilyen jellegű - különösképpen a közvetlen kár, vagy kárkövetkezmény megtérítésére vonatkozó - igény a Szállítóval szemben - a jogszabály eltérő rendelkezése hiányában - kizárt. A Szállító jogilag nem kizárható helytállásának mértéke - jogszabály eltérő rendelkezése hiányában - az érintett Termék vételárának értékére korlátozódik.
              </Par>
              <Par>
              4. A jelen Fejezetben meghatározott szavatosság kizárólag a Megrendelő irányában érvényes, és nem vonatkozik a Megrendelő vevőire, vagy termékeinek felhasználójára, és helyettesít minden más - akár törvényben foglalt, akár harmadik személy által vállalt, akár kereskedelmi szokásra alapított - jótállást, vagy szavatosságot. A Megrendelőt a Termékre vonatkozó kifogás benyújtása nem jogosítja fel a kifogásolt Termék vételárának visszatartására.
              </Par>
              <Par>
              5. Az olyan Termék tekintetében, amelyek a Felek megállapodásának megfelelően a standard minőség alatti, II. osztályú, vagy értékcsökkentett minőségi szintűek, mivel a Szállító az ár megállapításánál a csökkent minőséget értékarányosan figyelembe vette, a Megrendelő semmilyen minőségi igénnyel nem élhet.
              </Par>
              <Par>
              6. A Termék felhasználása és/vagy újraértékesítése esetén a vonatkozó törvényi és hatósági előírások betartásáért kizárólag Megrendelő felel, Szállítót a szabályok megszegéséből eredő károkért semmilyen felelősség nem terheli.
              </Par>
              <H3>
              X. Termékfelelősség
              </H3>
              <Par>
              1. A Szállítót termékfelelősség a magyar termékfelelősségről szóló törvényben előírtak szerint terheli.
              </Par>
              <H3>
              XI. Nyomon követhetőség
              </H3>
              <Par>
              1. A Termék nyomon-követhetősége a vonatkozó műbizonylat Szállító általi rendelkezésre bocsátásával kizárólag a felek erre irányuló külön megállapodása alapján történhet. 
              </Par>
              <H3>
              XII. Vis major
              </H3>
              <Par>
              1. Vis major események, melyek a Szállítót vagy bármely beszállítóját érintik, feljogosítják a Szállítót arra, hogy az akadályoztatás idejére, méltányos póthatáridő kitűzése mellett a teljesítést elhalassza, illetve amennyiben a szállítás nem lehetséges a szerződéstől részben vagy egészben elálljon. Vis major esetnek számít többek között a földrengés, villámcsapás, fagy, köd, vihar, áradások minden teljesítést nehezítő kihatása, háború, törvény- illetve hatósági beavatkozások, lefoglalás, üzemzavarok, sztrájk, nemzetközi fizetési korlátozások, alapanyag- energia kiesés, szabotázs, terrorcselekmények stb.
              </Par>
              <H3>
              XIII. Részbeni érvénytelenség
              </H3>
              <Par>
              1. Amennyiben a jelen feltételek meghatározásai érvénytelenné, kivitelezhetetlenné vagy értelmezhetetlenné válnak, úgy a többi feltétel érvényességét ez nem érinti. A hatálytalan vagy nem teljesíthető feltételeket olyan hatályos és kivitelezhető meghatározásokkal kell helyettesíteni, amelyek az eredeti hatálytalan vagy nem teljesíthető feltételekhez jogi vagy gazdasági szempontból a lehető legközelebb állnak.
              </Par>
              <H3>
              XIV. Incoterms
              </H3>
              <Par>
              1. A Felek ellenkező rendelkezése hiányában az érintett szerződéses feltételek értelmezésénél az INCOTERMS 2010 ICC meghatározásai érvényesek.
              </Par>
              <H3>
              XV. Vitás kérdések rendezése
              </H3>
              <Par>
              1. A jelen ÁSZF a magyar jog alapján készült. A jelen ÁSZF-ben nem szabályozott kérdésekben a magyar Ptk. és egyéb vonatkozó magyar jogszabályok rendelkezései alkalmazandóak.
              </Par>
              <Par>
              2. A Felek a szerződésből eredően közöttük felmerült vitás kérdéseket elsősorban tárgyalás útján, egyezséggel kísérlik meg rendezni a vita alapjául szolgáló tény, adat, körülmény felmerülésétől számított 30 napon belül. Amennyiben az írásbeli egyezség megkötésére a fenti időtartamon belül nem kerül sor, a Felek a vita rendezésére - a per tárgyától és a pertárgy értékétől függően - a Szállító székhelye szerint illetékes bíróság kizárólagos illetékességét kötik ki.
              </Par>
              <H3>
              XVI. Környezetvédelem/munkahelyi egészség 
              </H3>
              <Par>
              1. Szállító elkötelezett a környezet védelme mellett. A Szállító telephelyére belépő személyek részére - biztonságuk érdekében - munkavédelmi tájékoztatót biztosít. A telephelyen a KRESZ szabályai érvényesek.
              </Par>
              <H3>
              XVII. Védjegyek és ipari mintavédelem
              </H3>
              <Par>
              1. Amennyiben a Szállító által leszállított áruk véd- ill. cégjeggyel ellátottak, tovább-eladásuk esetén a Megrendelő köteles azokat a bejegyzett védjeggyel, eredeti csomagolásban, felbontatlan állapotában eladni. Ha ilyen áruk a Szállító beleegyezésével további feldolgozáson mennek keresztül, egyéb termékekbe beépítenek, stb., ezt követően a fenti jegyeket a Szállító előzetes írásos belegyezésével lehet csak felhasználni.
              </Par>
              <Label>
              Biatorbágy, 2014. április 1.
              </Label>
              <Label>
              MetAlCu Trade Kft.
              </Label>
            </div>
          )}

          {form === "tanusitvanyok" && (
            <div className="flex flex-col gap-4">
                <Image src="/tanusitvanyok/ISO-14001.png" width={500} height={1000} alt="Tanusítvány" />
                <Image src="/tanusitvanyok/ISO-9001.png" width={500} height={1000} alt="Tanusítvány" />
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
                  <button onClick={() => {
                      setForm("aszf"), togglePopup("aszf");
                    }}>
                    <Label classname={"hover:text-white cursor-pointer"}>
                      ÁSZF
                    </Label>
                  </button>
                </li>
                <li>
                  <button onClick={() => {
                      setForm("tanusitvanyok"), togglePopup("tanusitvanyok");
                    }}>
                    <Label classname={"hover:text-white cursor-pointer"}>
                      Tanusítványok
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
