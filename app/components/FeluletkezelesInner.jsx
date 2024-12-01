"use client"

import Container from './UI/Container'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Image from 'next/image'
import Link from 'next/link'
import Smalltitle from './UI/Typo/Smalltitle'
import Mainbutton from './UI/Buttons/Mainbutton'

import { motion } from "framer-motion"
import Par from './UI/Typo/Par'

export default function FeluletkezelesInner() {
  return (
    <section className="w-full px-4">
        <div className='container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4'>
            <div className='flex flex-col gap-8 py-16 lg:px-8'>
                <div className='flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]'>
                    <H2>Felületkezelés fajtái</H2>                   
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <H3>Homokszórás és szemcseszórás</H3>
                        <Par>A homokszórás és szemcseszórás olyan mechanikus tisztítási eljárások, amelyek során nagy nyomáson apró szemcséket (például homokot, acélgolyókat vagy alumínium-oxidot) fújnak a fémfelületre. Ez eltávolítja a szennyeződéseket, rozsda- vagy festékrétegeket, miközben érdesíti a felületet, javítva az alapozók és bevonatok tapadását. Ez az eljárás elengedhetetlen előkészítés a felületkezelési technikák előtt.</Par>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <H3>Galvanizálás</H3>
                        <Par>A galvanizálás elektrokémiai eljárás, amely során egy vékony fémréteget (például cinket, nikkelt vagy krómot) visznek fel a fém felületére. Az eljárás védelmet nyújt a korrózió ellen, javítja a felület keménységét, és dekoratív megjelenést is kölcsönözhet. Széles körben alkalmazzák ipari alkatrészeknél, például autóipari vagy építőipari termékek esetében.</Par>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <H3>Porfestés (porszórás)</H3>
                        <Par>A porfestés során elektrosztatikusan feltöltött porfestéket visznek fel a fémfelületre, amely hőkezelés során egyenletes, sima és tartós bevonattá olvad. Ez az eljárás kiválóan ellenáll a kopásnak, karcolásnak és időjárási hatásoknak, miközben széles szín- és textúraválasztékot kínál. Gyakran használják bútorok, autóalkatrészek és háztartási gépek felületkezelésére.</Par>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <H3>Anodizálás</H3>
                        <Par>Az anodizálás egy elektrolitikus eljárás, amely az alumínium felületén természetes oxidréteget hoz létre, növelve annak vastagságát. Ez a réteg rendkívül ellenállóvá teszi a korrózióval és kopással szemben, miközben javítja a megjelenést és lehetővé teszi a színezést. Az anodizálást széles körben alkalmazzák építészeti elemek, elektronikai eszközök és járműipari alkatrészek gyártásában.</Par>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <H3>Passziválás</H3>
                        <Par>A passziválás során a rozsdamentes acél felületét savas oldattal kezelik, amely eltávolítja a szennyeződéseket és elősegíti egy védő oxidréteg kialakulását. Ez a réteg természetes módon védi a fémet a korrózió ellen anélkül, hogy további bevonatra lenne szükség. Az eljárást különösen kritikus környezetekben, például élelmiszeripari és orvosi eszközöknél alkalmazzák.</Par>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <H3>Horganyzás</H3>
                        <Par>A horganyzás során cinkréteget visznek fel a fém felületére, hogy megakadályozzák a korróziót. Ez történhet merítéssel (tüzihorganyzás) vagy elektrolízis útján. A cink védőrétege nemcsak megakadályozza az oxidációt, hanem önfeláldozó rétegként is működik, mivel a cink először korrodálódik, megvédve az alatta lévő fémet. Gyakran alkalmazzák acélszerkezetek, kerítések és autóalkatrészek védelmére.</Par>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
