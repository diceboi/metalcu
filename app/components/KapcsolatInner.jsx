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

export default function KapcsolatInner() {
  const searchParams = useSearchParams();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    // Get the value of "termek" from the URL
    const termek = searchParams.get("termek");
    if (termek) {
      setProductName(termek);
    }
  }, [searchParams]);

  return (
    <section className="lg:w-8/12 w-full m-auto px-4 lg:-mt-[40vh] -mt-28">
      <div className='container m-auto border border-[--grey-border] relative lg:px-0 px-4 bg-[--lightgrey] z-10'>
        <div className='flex flex-col gap-8 py-8 lg:px-8'>
          <div className='flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]'>
            <H2 classname={'text-center self-center'}>Írj nekünk</H2>
          </div>
          <div className='flex flex-col gap-8'>
            <form className='flex flex-col gap-4'>
              <input type='text' placeholder='Név' className='border border-[--grey-border] bg-[--product-bg] p-4' />
              <input type='phone' placeholder='Telefonszám' className='border border-[--grey-border] bg-[--product-bg] p-4' />
              <input type='email' placeholder='E-mail cím' className='border border-[--grey-border] bg-[--product-bg] p-4' />
              <input 
                type='text' 
                placeholder='Termékek neve' 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)} 
                className='border border-[--grey-border] bg-[--product-bg] p-4' 
              />
              <textarea type='text' placeholder='Üzenet' rows={10} className='border border-[--grey-border] bg-[--product-bg] p-4' />
              <Mainbutton classname={'self-center'}>Küldés</Mainbutton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
