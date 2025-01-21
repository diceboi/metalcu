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

export default function LogisztikaInner() {
  return (
    <section className="w-full px-4">
        <div className='container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4'>
            <div className='flex flex-col gap-8 py-16 lg:px-8'>
                <div className='flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]'>
                    <H2>Logisztikai szolgáltatások</H2>                   
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <Par>Igény esetén teljes körű logisztikai szolgáltatást kínálunk partnereink számára: puffertárolás, just in
                        time kiszállítás. Egyedi csomagolás és címkézés.</Par>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
