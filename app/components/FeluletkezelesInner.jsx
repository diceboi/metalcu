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

export default function FeluletkezelesInner() {
  return (
    <section className="w-full px-4">
      <div className="container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4">
        <div className="flex flex-col gap-8 py-16 lg:px-8">
          <div className="flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]">
            <H2>Felületkezelés fajtái</H2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <H3>Porfestés</H3>
              <Par>
                A porfestés (köznapi szóhasználatban gyakran szinterezés, ez
                azonban a porkohászati hevítő- zsugorító művelet megnevezésének
                pontatlan használata) egy speciális felületi bevonatot
                eredményező eljárás általában fém felületekre. Egy
                színezett műanyag-por alapú festéket hordanak fel az adott
                felületre elektrosztatikus szórópisztoly segítségével kb.
                10-100 kV feszültséggel. A fém felületén megtapad a műanyag
                porfesték, majd kemencében 160 - 200 Celsius-fokon ráolvasztják.
                Az így kapott felület rendkívül tartós, rugalmas és hőálló. (Az
                utóbbi időben már nem csak fémekhez használják ezt az eljárást,
                de műanyagon, üvegen, fán, MDF lapon.)
              </Par>
            </div>
            <div className="flex flex-col gap-4">
              <H3>Eloxálás</H3>
              <Par>
                Anodizálásnak (anódos oxidációnak) azt az eljárást nevezzük,
                amikor az alumíniumot híg savban
                (foszforsav, oxálsav, kénsav, krómsav stb.) anódként kapcsolják
                (pozitív pólus), ekkor vízbontás játszódik le, az anódon oxigén
                fejlődik, a katódon hidrogén. A fejlődő oxigén azonnal reagál az
                alumíniummal és porózus oxidréteget hoz létre. A réteg
                keménysége a fürdő hőmérsékletétől és a használt sav
                milyenségétől függ. Az anodizálás előtt a megmunkálandó
                ötvözetet megtisztítjuk forró áztató, vagy oldószeres fürdőben
                (rendszerint nátrium-hidroxidban). Az európai szabványok 5-10-15-20-25
                mikrométeres rétegvastagságokat írnak elő.
              </Par>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
