"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Container from './UI/Container';
import H1 from './UI/Typo/H1';
import H2 from './UI/Typo/H2';
import H3 from './UI/Typo/H3';
import Image from 'next/image';
import Link from 'next/link';
import Smalltitle from './UI/Typo/Smalltitle';
import Mainbutton from './UI/Buttons/Mainbutton';

import { motion } from "framer-motion";
import Par from './UI/Typo/Par';

export default function RolunkInner() {

  return (
    <section className="lg:w-8/12 w-full m-auto px-4 lg:-mt-[40vh] -mt-28">
      <div className='container m-auto border border-[--grey-border] relative lg:px-0 px-4 bg-[--lightgrey] z-10'>
        <div className='flex flex-col gap-8 py-8 lg:px-8'>
          <div className='flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]'>
            <H2 classname={'text-center self-center'}>Tisztelt Partnerünk,</H2>
          </div>
          <div className='flex flex-col gap-8'>
            <Par>
            A MetAlCu Trade Kft. 2014 óta áll ügyfelei rendelkezésére a magyar acél és színesfém félgyártmány piacon. Termékeink forgalmazása mellett kapcsolódó szolgáltatások sorát kínáljuk. A DBK osztrák-magyar cégcsoport tagjaként stabil háttérrel, széles beszállítói körrel, rugalmas kiszolgálással és folyamatosan bővülő raktárkészlettel állunk rendelkezésre. Értékesítéseink meghatározó irányát a hazai felhasználók jelentik, de termékeinkkel jelen vagyunk az EU különböző országaiban is.
            </Par>
            <Par>
            Minőségpolitikánk biztosításaként fontosnak tartjuk, hogy partnereinkkel személyes kapcsolattartás útján egyeztessük a megrendeléseket, szállításokat. Ehhez nyújt Önöknek segítséget kereskedelmi képviselőink szakmai felkészültsége és sokéves tapasztalata az alumínium, réz, bronz és acél félgyártmányok forgalmazása területén. Rugalmasságuk és fiatalos lendületük lehetővé teszi, hogy a megrendelt termékeket és szolgáltatásokat magas színvonalon biztosítsuk megrendelőink részére. 
            </Par>
            <Par>
            Üdvözlettel,<br></br>
            <b>Cene András</b><br></br>
            ügyvezető
            </Par>
          </div>
        </div>
      </div>
    </section>
  );
}
